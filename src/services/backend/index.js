/**
 * HappyStay Backend Service
 * Base URL: http://localhost:8000
 * Handles Authentication and Property management.
 */

// const API_URL = "http://localhost:8000";
const API_URL = "https://integracion149.com/website_12ee8434/backend/public";
const API_PREFIX = "/api";

class BackendService {
  constructor() {
    this.token = localStorage.getItem("happystay_token") || null;
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem("happystay_token", token);
    } else {
      localStorage.removeItem("happystay_token");
    }
  }

  getToken() {
    return this.token;
  }

  /**
   * Generic request handler
   * @param {string} endpoint - e.g., '/properties'
   * @param {string} method - 'GET', 'POST', 'PUT', 'DELETE'
   * @param {object | FormData} body - Data to send
   * @param {object} customHeaders - Additional headers
   */
  async request(endpoint, method = "GET", body = null, customHeaders = {}) {
    const headers = {
      Accept: "application/json",
      ...customHeaders,
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    // Determine if Content-Type should be JSON
    if (body && !(body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    const config = {
      method,
      headers,
    };

    if (body) {
      config.body = body instanceof FormData ? body : JSON.stringify(body);
    }

    const url =
      endpoint.startsWith("/api") || endpoint.startsWith("/properties")
        ? `${API_URL}${endpoint}`
        : `${API_URL}${API_PREFIX}${endpoint}`;

    try {
      const response = await fetch(url, config);

      // Handle 204 No Content
      if (response.status === 204) {
        return null;
      }

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw {
          status: response.status,
          message: data.message || "Something went wrong",
          errors: data.errors || null,
        };
      }

      return data;
    } catch (error) {
      // Re-throw formatted error
      throw error;
    }
  }

  // ==========================================
  // AUTHENTICATION
  // ==========================================

  /**
   * Register a new user
   * @param {object} userData - { name, email, password, password_confirmation }
   */
  async register(userData) {
    const response = await this.request("/api/register", "POST", userData);
    if (response.access_token) {
      this.setToken(response.access_token);
    }
    return response;
  }

  /**
   * Login user
   * @param {object} credentials - { email, password }
   */
  async login(credentials) {
    const response = await this.request("/api/login", "POST", credentials);
    if (response.access_token) {
      this.setToken(response.access_token);
    }
    return response;
  }

  /**
   * Logout user
   */
  async logout() {
    try {
      await this.request("/api/logout", "POST");
    } finally {
      this.setToken(null);
    }
  }

  /**
   * Get current authenticated user
   */
  async getCurrentUser() {
    return this.request("/api/user");
  }

  // ==========================================
  // PROPERTIES (PUBLIC)
  // ==========================================

  /**
   * List properties with filters
   * @param {object} params - { location, max_price, guests, featured, sort_by, sort_order, per_page, page }
   */
  async getProperties(params = {}) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        searchParams.append(key, value);
      }
    });
    const queryString = searchParams.toString();
    return this.request(`/properties?${queryString}`, "GET");
  }

  /**
   * Get featured properties
   * @param {number} limit
   */
  async getFeaturedProperties(limit = 6) {
    return this.request(`/properties/featured?limit=${limit}`, "GET");
  }

  /**
   * Search properties
   * @param {string} query
   */
  async searchProperties(query) {
    return this.request(
      `/properties/search?q=${encodeURIComponent(query)}`,
      "GET"
    );
  }

  /**
   * Filter by price range
   * @param {number} min_price
   * @param {number} max_price
   */
  async getPriceRange(min_price = 0, max_price = 999999) {
    return this.request(
      `/properties/price-range?min_price=${min_price}&max_price=${max_price}`,
      "GET"
    );
  }

  /**
   * Get property details
   * @param {string|number} id
   */
  async getPropertyById(id) {
    return this.request(`/properties/${id}`, "GET");
  }

  // ==========================================
  // PROPERTIES (PROTECTED)
  // ==========================================

  /**
   * Create a new property
   * @param {object} propertyData
   */
  async createProperty(propertyData) {
    return this.request("/properties", "POST", propertyData);
  }

  /**
   * Update an existing property
   * @param {string|number} id
   * @param {object} propertyData
   */
  async updateProperty(id, propertyData) {
    return this.request(`/properties/${id}`, "PUT", propertyData);
  }

  /**
   * Delete a property
   * @param {string|number} id
   */
  async deleteProperty(id) {
    return this.request(`/properties/${id}`, "DELETE");
  }

  /**
   * Upload images
   * @param {File[]} files - Array of File objects
   */
  async uploadImages(files) {
    const formData = new FormData();
    // The API expects 'images[]'
    if (Array.isArray(files)) {
      files.forEach((file) => formData.append("images[]", file));
    } else {
      formData.append("images[]", files);
    }

    // Content-Type is auto-set with FormData (multipart/form-data)
    return this.request("/properties/images/upload", "POST", formData);
  }

  // ==========================================
  // TESTIMONIALS (PUBLIC)
  // ==========================================

  /**
   * List all active testimonials
   */
  async getTestimonials() {
    return this.request("/testimonials", "GET");
  }

  /**
   * Get testimonial by id
   * @param {string|number} id
   */
  async getTestimonialById(id) {
    return this.request(`/testimonials/${id}`, "GET");
  }

  // ==========================================
  // TESTIMONIALS (PROTECTED)
  // ==========================================

  /**
   * Create a new testimonial
   * @param {object} testimonialData - { name, location, rating, text, avatar, is_active }
   */
  async createTestimonial(testimonialData) {
    return this.request("/testimonials", "POST", testimonialData);
  }

  /**
   * Update an existing testimonial
   * @param {string|number} id
   * @param {object} testimonialData
   */
  async updateTestimonial(id, testimonialData) {
    return this.request(`/testimonials/${id}`, "PUT", testimonialData);
  }

  /**
   * Delete a testimonial
   * @param {string|number} id
   */
  async deleteTestimonial(id) {
    return this.request(`/testimonials/${id}`, "DELETE");
  }
}

// Export a singleton instance
const backendService = new BackendService();
export default backendService;
