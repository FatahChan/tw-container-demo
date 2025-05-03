import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ProductCardProps {
  name?: string;
}

export function ProductCard({ name = "Smart Watch" }: ProductCardProps) {
  return (
    <div className="@container">
      <Card className="py-0">
        <div className="flex @lg:flex-row flex-col">
          <div className="relative @lg:h-auto h-48 @lg:w-48">
            <img
              alt={name}
              className="h-full w-full @lg:rounded-t-none rounded-t-lg @lg:rounded-l-lg object-cover"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            />
          </div>
          <div className="flex flex-col gap-4 py-4">
            <CardHeader>
              <CardTitle className="@lg:text-xl text-lg">{name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                A sleek and modern smartwatch with advanced health tracking
                features and long battery life.
              </p>
            </CardContent>
            <CardFooter className="mt-auto flex items-center justify-between">
              <span className="font-bold text-lg">$199.99</span>
              <Button>Add to Cart</Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
