import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface DashboardHeaderProps {
  onBackClick: () => void;
}

export const DashboardHeader = ({ onBackClick }: DashboardHeaderProps) => {
  return (
    <header className="border-b border-border/40 bg-gradient-to-r from-card/80 to-ocean/5 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 py-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-ocean font-semibold">
            Admin Panel
          </p>
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground mt-1">
            HappyStay Manager
          </h1>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={onBackClick}
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al sitio
        </Button>
      </div>
    </header>
  );
};
