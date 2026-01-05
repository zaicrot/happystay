# Dashboard - Guía de Organización

## 📊 Diagrama de Estructura

```
Dashboard (Página Principal)
│
├─ DashboardHeader
│  └─ Encabezado con navegación
│
├─ DashboardTabs
│  │
│  ├─ TAB: Alojamientos
│  │  ├─ ListingsHeader
│  │  │  └─ Contador de propiedades + Botón crear
│  │  │
│  │  └─ ListingsTable O ListingsEmpty
│  │     └─ Tabla con alojamientos o mensaje vacío
│  │
│  └─ TAB: Testimonios
│     ├─ TestimonialsHeader
│     │  └─ Descripción + Botón crear
│     │
│     └─ TestimonialCard[]
│        └─ Grid de tarjetas editables
│
└─ EditListingModal
   ├─ BasicInfoSection
   │  └─ Nombre, ubicación, precio, URL
   │
   ├─ CapacitySection
   │  └─ Huéspedes, habitaciones, baños, destacado
   │
   ├─ AmenitiesSection
   │  └─ Amenities dinámicas
   │
   └─ GallerySection
      └─ Carga y vista de imágenes
```

## 🎯 Responsabilidades por Archivo

### Página (`src/pages/Dashboard.tsx`)

- **Responsabilidad**: Orquestar toda la aplicación
- **Hace**:
  - Initializa 3 hooks personalizados
  - Maneja el estado activo (tab)
  - Renderiza componentes principales
  - Pasa props a componentes hijos

### Componentes Principal

| Archivo                | Responsabilidad                      |
| ---------------------- | ------------------------------------ |
| `DashboardHeader.tsx`  | Barra superior, logo, botón volver   |
| `DashboardTabs.tsx`    | Contenedor de tabs, switch de vistas |
| `EditListingModal.tsx` | Orquesta secciones dentro del modal  |

### Componentes de Alojamientos

| Archivo              | Responsabilidad                    |
| -------------------- | ---------------------------------- |
| `ListingsHeader.tsx` | Mostrar contador y botón crear     |
| `ListingsTable.tsx`  | Tabla de alojamientos con acciones |
| `ListingsEmpty.tsx`  | Mensaje cuando no hay datos        |

### Secciones del Modal

| Archivo                | Responsabilidad                       |
| ---------------------- | ------------------------------------- |
| `BasicInfoSection.tsx` | Campos de información general         |
| `CapacitySection.tsx`  | Campos de capacidad y características |
| `AmenitiesSection.tsx` | Gestionar amenidades con CRUD         |
| `GallerySection.tsx`   | Carga y galería de imágenes           |

### Componentes de Testimonios

| Archivo                  | Responsabilidad             |
| ------------------------ | --------------------------- |
| `TestimonialsHeader.tsx` | Encabezado con botón crear  |
| `TestimonialCard.tsx`    | Tarjeta editable individual |

## 🧠 Hooks Personalizados

### `useListingManagement.ts`

```typescript
// Entrada
const { listings } = useListingManagement(initialListings)

// Salida
{
  listings,
  nextListingId,
  updateListing,
  addListing,
  removeListing,
  addImagesToListing,
  removeImage,
  addAmenity,
  removeAmenity,
  updateAmenity,
}
```

### `useTestimonialManagement.ts`

```typescript
// Entrada
const { testimonials } = useTestimonialManagement(initialTestimonials)

// Salida
{
  testimonials,
  updateTestimonial,
  addTestimonial,
  removeTestimonial,
}
```

### `useModalManagement.ts`

```typescript
// Salida
{
  editingListingId,
  isModalOpen,
  openEditModal,
  closeEditModal,
  setIsModalOpen,
}
```

## 📦 Constantes

### `amenityIcons.ts`

Mapeo de tipo de amenidad → Icono + Etiqueta

Ejemplo:

```typescript
AMENITY_ICONS.beach = {
  icon: Waves,
  label: "Playa/Vista al mar",
};
```

### `initialData.ts`

- `initialListings`: Array con 5 alojamientos precargados
- `initialTestimonials`: Array con 3 testimonios precargados

## 🔗 Tipos TypeScript

### `dashboard.ts`

```typescript
type UploadedImage {
  id: string;
  name: string;
  preview: string;
}

type Amenity {
  id: string;
  icon: string;
  label: string;
}

interface ListingForm {
  id: number;
  name: string;
  location: string;
  price: string;
  slug: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  airbnbUrl: string;
  featured: boolean;
  amenities: Amenity[];
  images: UploadedImage[];
}

interface TestimonialForm {
  id: number;
  name: string;
  text: string;
  type: "Familia" | "Pareja" | "Amigos" | "Estadia";
}
```

## 🔄 Flujo de Eventos

### Crear Alojamiento

```
ListingsHeader (onAddListing)
  → useListingManagement.addListing()
    → setListings([...prev, newListing])
      → ListingsTable re-renderiza
```

### Editar Alojamiento

```
ListingsTable (onEdit)
  → openEditModal(id)
    → editingListingId = id, isModalOpen = true
      → EditListingModal renderiza
        → BasicInfoSection, CapacitySection, etc.
          → Cambios se guardan con updateListing()
```

### Agregar Amenity

```
AmenitiesSection (onAddAmenity)
  → useListingManagement.addAmenity()
    → setListings con nueva amenidad
      → AmenityItem se renderiza
```

### Cargar Imágenes

```
GallerySection (onAddImages)
  → useListingManagement.addImagesToListing()
    → setListings con nuevas imágenes
      → ImagePreview[] se renderiza
```

## 📚 Importar Componentes

### Opción 1: Desde el index (Recomendado)

```typescript
import {
  DashboardHeader,
  ListingsTable,
  EditListingModal,
} from "@/components/Dashboard";

import { useListingManagement, useTestimonialManagement } from "@/hooks";

import { AMENITY_ICONS, initialListings } from "@/constants";
```

### Opción 2: Importación específica

```typescript
import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { useListingManagement } from "@/hooks/useListingManagement";
import { AMENITY_ICONS } from "@/constants/amenityIcons";
```

## 🎨 Estilos

Todos los componentes usan:

- **Tailwind CSS**: Clases de utilidad
- **Componentes UI**: De `@/components/ui/`
- **Iconos**: De `lucide-react`

Paleta de colores usada:

- **Ocean**: Color primario (azul)
- **Seafoam**: Color secundario (verde azulado)
- **Amber**: Para estados destacados
- **Destructive**: Para acciones peligrosas

## ✅ Checklist de Mejoras

- ✅ Separación de responsabilidades
- ✅ Componentes reutilizables
- ✅ Hooks personalizados
- ✅ Constantes centralizadas
- ✅ Tipos bien definidos
- ✅ Estructura modular
- ✅ Documentación clara
- ✅ Índices de exportación
- ✅ Fácil de extender

## 🚀 Próximas Mejoras Sugeridas

1. **Persistencia de datos**

   - Guardar en localStorage o base de datos
   - Agregar loading states

2. **Validaciones**

   - Validar campos requeridos
   - Mostrar errores

3. **Componentes adicionales**

   - Confirmación antes de eliminar
   - Notificaciones (toast)
   - Paginación en tabla

4. **Testing**

   - Tests unitarios para hooks
   - Tests de integración para componentes
   - Tests E2E

5. **Performance**
   - Memoizar componentes si es necesario
   - Lazy loading de imágenes
   - Optimizar re-renders
