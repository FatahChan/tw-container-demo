import { cn } from "@/lib/utils";
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
    { id: "p1", name: "Smart Watch" },
    { id: "p2", name: "Smart Watch Pro" },
    { id: "p3", name: "Smart Watch Ultra" },
    { id: "p4", name: "Smart Watch SE" },
    { id: "p5", name: "Smart Watch Mini" },
    { id: "p6", name: "Smart Watch Max" },
    { id: "p7", name: "Smart Watch Lite" },
    { id: "p8", name: "Smart Watch Plus" },
  ];

  return (
    <div className="@container/page flex min-h-screen bg-background">
      {/* Side Navigation */}
      <div
        className={`sticky top-0 flex h-screen flex-col border-r bg-muted transition-all duration-200 ${
          isCollapsed ? "w-[60px]" : "@sm/page:w-[240px] w-screen"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <Button
            variant="outline"
            size="icon"
            className={cn("flex w-full justify-between px-2", {
              "justify-center": isCollapsed,
            })}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className={isCollapsed ? "hidden" : "font-semibold"}>
              Navigation
            </span>

            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
        <nav className="p-2">
          {["Dashboard", "Products", "Analytics", "Settings"].map((item) => (
            <div
              key={item}
              className={`mb-1 cursor-pointer rounded-md px-4 py-2 transition-all hover:bg-background ${
                isCollapsed ? "text-center" : ""
              }`}
            >
              {isCollapsed ? item[0] : item}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="@container flex-grow">
        {/* <h1 className="text-3xl font-bold mb-8">Responsive Grid Demo</h1> */}

        <div className="@[15rem]:grid hidden @3xl:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4 grid-cols-1 gap-4 @sm:p-4 p-1 transition-all duration-300">
          {products.map((product) => (
            <ProductCard key={product.id} name={product.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
