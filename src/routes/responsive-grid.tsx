import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/responsive-grid")({
  component: ResponsiveGrid,
});

function ResponsiveGrid() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const products = [
    { id: 'p1', name: 'Smart Watch' },
    { id: 'p2', name: 'Smart Watch Pro' },
    { id: 'p3', name: 'Smart Watch Ultra' },
    { id: 'p4', name: 'Smart Watch SE' },
    { id: 'p5', name: 'Smart Watch Mini' },
    { id: 'p6', name: 'Smart Watch Max' },
    { id: 'p7', name: 'Smart Watch Lite' },
    { id: 'p8', name: 'Smart Watch Plus' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Side Navigation */}
      <div
        className={`h-screen bg-muted flex flex-col border-r transition-all duration-300 ${
          isCollapsed ? "w-[60px]" : "w-[240px]"
        }`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <span className={isCollapsed ? "hidden" : "font-semibold"}>Navigation</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
        <nav className="flex-1 p-2">
          {["Dashboard", "Products", "Analytics", "Settings"].map((item) => (
            <div
              key={item}
              className={`px-4 py-2 rounded-md cursor-pointer hover:bg-background mb-1 transition-all ${
                isCollapsed ? "text-center" : ""
              }`}
            >
              {isCollapsed ? item[0] : item}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 @container">
        <h1 className="text-3xl font-bold mb-8">Responsive Grid Demo</h1>

        <div className="grid gap-4 transition-all duration-300 grid-cols-1 @3xl:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} name={product.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
