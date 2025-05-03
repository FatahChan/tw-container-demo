import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card"

interface ProductCardProps {
  name?: string;
}

export function ProductCard({ name = "Smart Watch" }: ProductCardProps) {
  return (
    <div className="@container">
      <Card>
        <div className="flex flex-col @md:flex-row">
          <div className="relative h-48 @md:h-auto @md:w-48">
            <img
              alt={name}
              className="h-full w-full rounded-t-lg object-cover @md:rounded-l-lg @md:rounded-t-none"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            />
          </div>
          <div className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg @md:text-xl">{name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A sleek and modern smartwatch with advanced health tracking features and long battery life.
              </p>
            </CardContent>
            <CardFooter className="mt-auto flex items-center justify-between">
              <span className="text-lg font-bold">$199.99</span>
              <Button>Add to Cart</Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  )
}
