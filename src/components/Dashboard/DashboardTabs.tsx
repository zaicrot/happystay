import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListingForm, TestimonialForm } from "@/types/dashboard";
import { ListingsHeader } from "./ListingsHeader";
import { ListingsTable } from "./ListingsTable";
import { ListingsEmpty } from "./ListingsEmpty";
import { TestimonialsHeader } from "./TestimonialsHeader";
import { TestimonialCard } from "./TestimonialCard";

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  listings: ListingForm[];
  testimonials: TestimonialForm[];
  onAddListing: () => void;
  onAddTestimonial: () => void;
  onEditListing: (id: number) => void;
  onDeleteListing: (id: number) => void;
  onUpdateTestimonial: (
    id: number,
    field: keyof TestimonialForm,
    value: string
  ) => void;
  onDeleteTestimonial: (id: number) => void;
}

export const DashboardTabs = ({
  activeTab,
  onTabChange,
  listings,
  testimonials,
  onAddListing,
  onAddTestimonial,
  onEditListing,
  onDeleteListing,
  onUpdateTestimonial,
  onDeleteTestimonial,
}: DashboardTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full max-w-sm grid-cols-2 bg-transparent border-b border-border/40 gap-0 h-auto p-0">
        <TabsTrigger
          value="listings"
          className="gap-2 data-[state=active]:bg-ocean data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground border-b-2 data-[state=active]:border-ocean data-[state=inactive]:border-transparent font-medium py-3"
        >
          Alojamientos
        </TabsTrigger>
        <TabsTrigger
          value="testimonials"
          className="gap-2 data-[state=active]:bg-seafoam data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground border-b-2 data-[state=active]:border-seafoam data-[state=inactive]:border-transparent font-medium py-3"
        >
          Testimonios
        </TabsTrigger>
      </TabsList>

      <TabsContent value="listings" className="space-y-6 mt-8">
        <ListingsHeader
          listingCount={listings.length}
          onAddListing={onAddListing}
        />

        {listings.length > 0 ? (
          <ListingsTable
            listings={listings}
            onEdit={onEditListing}
            onDelete={onDeleteListing}
          />
        ) : (
          <ListingsEmpty onCreateListing={onAddListing} />
        )}
      </TabsContent>

      <TabsContent value="testimonials" className="space-y-6 mt-8">
        <TestimonialsHeader onAddTestimonial={onAddTestimonial} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              testimonial={t}
              onUpdate={onUpdateTestimonial}
              onDelete={onDeleteTestimonial}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
