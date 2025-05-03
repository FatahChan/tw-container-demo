import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "../components/ProductCard";

export const Route = createFileRoute("/")({
  component: ContainerDemo,
});

function ContainerDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="mb-8 font-bold text-3xl">Container Query Demo</h1>

      <div className="space-y-8">
        {/* Small container */}
        <section>
          <h2 className="mb-4 font-semibold text-xl">
            Small Container (300px)
          </h2>
          <div className="w-[300px] border border-muted-foreground border-dashed p-4">
            <ProductCard />
          </div>
        </section>

        {/* Medium container */}
        <section>
          <h2 className="mb-4 font-semibold text-xl">
            Medium Container (500px)
          </h2>
          <div className="w-[500px] border border-muted-foreground border-dashed p-4">
            <ProductCard />
          </div>
        </section>

        {/* Large container */}
        <section>
          <h2 className="mb-4 font-semibold text-xl">
            Large Container (800px)
          </h2>
          <div className="w-[800px] border border-muted-foreground border-dashed p-4">
            <ProductCard />
          </div>
        </section>

        {/* Full width container */}
        <section>
          <h2 className="mb-4 font-semibold text-xl">Full Width Container</h2>
          <div className="border border-muted-foreground border-dashed p-4">
            <ProductCard />
          </div>
        </section>
      </div>
    </div>
  );
}
