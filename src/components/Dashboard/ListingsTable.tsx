import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";
import { ListingForm } from "@/types/dashboard";

interface ListingsTableProps {
  listings: ListingForm[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const ListingsTable = ({
  listings,
  onEdit,
  onDelete,
}: ListingsTableProps) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-border/40 shadow-sm">
      <table className="w-full">
        <thead className="bg-ocean/5 border-b border-border/40">
          <tr>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wide font-semibold text-foreground">
              Nombre
            </th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wide font-semibold text-foreground">
              Ubicación
            </th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wide font-semibold text-foreground">
              Capacidad
            </th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wide font-semibold text-foreground">
              Precio
            </th>
            <th className="px-6 py-4 text-left text-xs uppercase tracking-wide font-semibold text-foreground">
              Imágenes
            </th>
            <th className="px-6 py-4 text-right text-xs uppercase tracking-wide font-semibold text-foreground">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/40">
          {listings.map((listing) => (
            <tr key={listing.id} className="hover:bg-card/50 transition">
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="font-medium text-foreground">
                    {listing.name}
                  </div>
                  {listing.featured && (
                    <Badge className="bg-amber-500/20 text-amber-700 border-amber-200 text-xs">
                      Destacado
                    </Badge>
                  )}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  ID #{listing.id}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                {listing.location}
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-foreground space-y-0.5">
                  <div>{listing.guests} huéspedes</div>
                  <div className="text-xs text-muted-foreground">
                    {listing.bedrooms} hab · {listing.bathrooms} baños
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <Badge variant="secondary">{listing.price}</Badge>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {listing.images.length}
                  </span>
                  {listing.images.length > 0 && (
                    <Badge className="bg-green-500/20 text-green-700 border-green-200">
                      Cargadas
                    </Badge>
                  )}
                  {listing.images.length === 0 && (
                    <Badge variant="outline" className="text-amber-600">
                      Sin imágenes
                    </Badge>
                  )}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => onEdit(listing.id)}
                  >
                    <Edit2 className="w-4 h-4" />
                    Editar
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => onDelete(listing.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
