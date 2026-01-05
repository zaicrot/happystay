# Dashboard - Estructura Refactorizada

## 📁 Estructura de Archivos

```
src/
├── pages/
│   └── Dashboard.tsx                    # Página principal (refactorizada)
├── components/Dashboard/                # Componentes del Dashboard
│   ├── index.ts                        # Exportaciones centralizadas
│   ├── DashboardHeader.tsx             # Encabezado del panel
│   ├── DashboardTabs.tsx               # Tabs principales (Alojamientos/Testimonios)
│   ├── EditListingModal.tsx            # Modal de edición de alojamientos
│   ├── ListingsHeader.tsx              # Encabezado de alojamientos
│   ├── ListingsTable.tsx               # Tabla de alojamientos
│   ├── ListingsEmpty.tsx               # Estado vacío de alojamientos
│   ├── BasicInfoSection.tsx            # Sección de información básica
│   ├── CapacitySection.tsx             # Sección de capacidad
│   ├── AmenitiesSection.tsx            # Sección de amenidades
│   ├── GallerySection.tsx              # Sección de galería
│   ├── TestimonialsHeader.tsx          # Encabezado de testimonios
│   └── TestimonialCard.tsx             # Tarjeta de testimonio
├── hooks/                               # Hooks personalizados
│   ├── index.ts                        # Exportaciones centralizadas
│   ├── useListingManagement.ts         # Lógica de alojamientos
│   ├── useTestimonialManagement.ts     # Lógica de testimonios
│   └── useModalManagement.ts           # Lógica del modal
├── constants/                           # Constantes
│   ├── index.ts                        # Exportaciones centralizadas
│   ├── amenityIcons.ts                 # Mapeo de iconos
│   └── initialData.ts                  # Datos iniciales
└── types/                               # Tipos TypeScript
    ├── index.ts                        # Exportaciones centralizadas
    └── dashboard.ts                    # Tipos del Dashboard
```

## 🎯 Responsabilidades

### Página Principal (`Dashboard.tsx`)

- Coordina todos los componentes
- Maneja el estado mediante hooks personalizados
- Orquesta la lógica de alojamientos y testimonios

### Componentes (`components/Dashboard/`)

#### Componentes Principales

- **DashboardHeader**: Barra superior con navegación
- **DashboardTabs**: Contenedor de tabs (Alojamientos/Testimonios)
- **EditListingModal**: Modal para editar alojamientos

#### Sección de Alojamientos

- **ListingsHeader**: Encabezado con contador y botón de crear
- **ListingsTable**: Tabla listando todos los alojamientos
- **ListingsEmpty**: Mensaje cuando no hay alojamientos

#### Secciones del Modal

- **BasicInfoSection**: Nombre, ubicación, precio, URL
- **CapacitySection**: Huéspedes, habitaciones, baños, destacado
- **AmenitiesSection**: Servicios y amenidades
- **GallerySection**: Carga y vista de imágenes

#### Sección de Testimonios

- **TestimonialsHeader**: Encabezado con contador y botón de crear
- **TestimonialCard**: Tarjeta editable de un testimonio

### Hooks Personalizados (`hooks/`)

#### `useListingManagement`

- **Estado**: `listings`
- **Funciones**:
  - `updateListing`: Actualiza un campo de un alojamiento
  - `addListing`: Crea un nuevo alojamiento
  - `removeListing`: Elimina un alojamiento
  - `addImagesToListing`: Agrega imágenes a un alojamiento
  - `removeImage`: Elimina una imagen
  - `addAmenity`: Agrega un servicio a un alojamiento
  - `removeAmenity`: Elimina un servicio
  - `updateAmenity`: Actualiza un servicio

#### `useTestimonialManagement`

- **Estado**: `testimonials`
- **Funciones**:
  - `updateTestimonial`: Actualiza un campo de un testimonio
  - `addTestimonial`: Crea un nuevo testimonio
  - `removeTestimonial`: Elimina un testimonio

#### `useModalManagement`

- **Estado**: `editingListingId`, `isModalOpen`
- **Funciones**:
  - `openEditModal`: Abre el modal para editar
  - `closeEditModal`: Cierra el modal
  - `setIsModalOpen`: Controla la visibilidad del modal

### Constantes (`constants/`)

#### `amenityIcons`

Mapeo de tipos de amenidades con sus iconos de Lucide React:

- beach (Waves)
- ac (Wind)
- grill (Flame)
- terrace (Home)
- security (Shield)
- kitchen (UtensilsCrossed)
- pool (Droplets)
- wifi (Wifi)
- coffee (Coffee)
- bedding (Bed)
- bath (Droplets)
- parking (Car)
- gym (Dumbbell)

#### `initialData`

Datos iniciales preconfigurados:

- 5 alojamientos de ejemplo
- 3 testimonios de ejemplo

### Tipos (`types/`)

#### `dashboard.ts`

```typescript
type UploadedImage
interface Amenity
interface ListingForm
interface TestimonialForm
```

## 🔄 Flujo de Datos

```
Dashboard (Página Principal)
├── Estado:
│   ├── activeTab
│   ├── listings (via useListingManagement)
│   ├── testimonials (via useTestimonialManagement)
│   └── editingListingId, isModalOpen (via useModalManagement)
│
└── Componentes Renderizados:
    ├── DashboardHeader
    ├── DashboardTabs
    │   ├── Listings Tab
    │   │   ├── ListingsHeader (props: count, onAdd)
    │   │   ├── ListingsTable (props: listings, onEdit, onDelete)
    │   │   └── ListingsEmpty (props: onCreate)
    │   │
    │   └── Testimonials Tab
    │       ├── TestimonialsHeader (props: onAdd)
    │       └── TestimonialCard[] (props: testimonial, onUpdate, onDelete)
    │
    └── EditListingModal
        ├── BasicInfoSection
        ├── CapacitySection
        ├── AmenitiesSection
        │   └── AmenityItem[] (sub-componente)
        ├── GallerySection
        │   └── ImagePreview[] (sub-componente)
        └── Acciones (Cancelar/Listo)
```

## 🚀 Ventajas de la Refactorización

1. **Separación de Responsabilidades**

   - Cada componente tiene un propósito claro
   - Lógica separada en hooks personalizados
   - Constantes centralizadas

2. **Reutilizable**

   - Componentes pequeños y reutilizables
   - Hooks que pueden usarse en otras páginas
   - Constantes compartidas

3. **Mantenibilidad**

   - Código más legible y organizado
   - Fácil de encontrar y modificar funcionalidades
   - Menos duplicación

4. **Escalabilidad**

   - Fácil agregar nuevas características
   - Estructura preparada para crecimiento
   - Pruebas unitarias simplificadas

5. **Performance**
   - Re-renders optimizados
   - Componentes memorizados donde necesario
   - Lógica eficiente en hooks

## 📝 Ejemplo de Uso

```typescript
import {
  DashboardHeader,
  ListingsTable,
  EditListingModal,
} from "@/components/Dashboard";
import { useListingManagement } from "@/hooks";
import { initialListings } from "@/constants";

// En un componente
const { listings, addListing, removeListing } =
  useListingManagement(initialListings);
```

## 🔗 Importaciones Simplificadas

Gracias a los archivos `index.ts`, puedes importar de forma más limpia:

```typescript
// ✅ Recomendado
import { DashboardHeader } from "@/components/Dashboard";
import { useListingManagement } from "@/hooks";
import { AMENITY_ICONS, initialListings } from "@/constants";

// También funciona (más específico)
import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { useListingManagement } from "@/hooks/useListingManagement";
import { AMENITY_ICONS } from "@/constants/amenityIcons";
```
