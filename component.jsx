/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Pb9Gbd4z0Rp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-10 flex items-center justify-between">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          ZOOX PRIME
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-xs">
            <Input type="search" placeholder="Search by neighborhood, price..." className="pr-12" />
            <Button variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2">
              <SearchIcon className="w-5 h-5" />
            </Button>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Buy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Rent
            </Link>
            <Link href="#" className="hover:underline md:hidden" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
          <Button variant="outline" className="md:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </header>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden fixed bottom-4 right-4 z-50">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
          <nav className="grid gap-4">
            <Link href="#" className="font-medium hover:underline" prefetch={false}>
              Buy
            </Link>
            <Link href="#" className="font-medium hover:underline" prefetch={false}>
              Rent
            </Link>
            <Link href="#" className="font-medium hover:underline" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="font-medium hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <main className="flex-1">
        <section className="relative">
          <Carousel className="w-full" autoplay interval={5000}>
            <CarouselContent>
              <CarouselItem>
                <div className="bg-[url('/hero.jpg')] bg-cover bg-center h-[500px]" />
              </CarouselItem>
              <CarouselItem>
                <div className="bg-[url('/hero2.jpg')] bg-cover bg-center h-[500px]" />
              </CarouselItem>
              <CarouselItem>
                <div className="bg-[url('/hero3.jpg')] bg-cover bg-center h-[500px]" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <ChevronLeftIcon className="w-8 h-8 text-white" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
              <ChevronRightIcon className="w-8 h-8 text-white" />
            </CarouselNext>
          </Carousel>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-black/50 text-white p-8 rounded-lg text-center max-w-xl">
              <h1 className="text-4xl font-bold mb-4">Discover Luxury Living</h1>
              <p className="text-lg mb-8">
                Explore our collection of high-end properties in the most desirable locations.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Buy
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Rent
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group">
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Apartment 1"
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover rounded-t-lg group-hover:opacity-80 transition-opacity"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </Link>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold">Penthouse Apartment</h3>
                    <div className="text-primary font-medium">$1,500,000</div>
                  </div>
                  <div className="text-muted-foreground mb-4">3 Bedrooms • 2 Bathrooms • 2,000 sq ft</div>
                  <Button variant="outline" className="w-full" onClick={() => console.log("Schedule Visit")}>
                    Schedule Visit
                  </Button>
                </CardContent>
              </Card>
              <Card className="group">
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Apartment 2"
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover rounded-t-lg group-hover:opacity-80 transition-opacity"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </Link>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold">Luxury Villa</h3>
                    <div className="text-primary font-medium">$3,000,000</div>
                  </div>
                  <div className="text-muted-foreground mb-4">5 Bedrooms • 4 Bathrooms • 4,500 sq ft</div>
                  <Button variant="outline" className="w-full" onClick={() => console.log("Schedule Visit")}>
                    Schedule Visit
                  </Button>
                </CardContent>
              </Card>
              <Card className="group">
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt="Apartment 3"
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover rounded-t-lg group-hover:opacity-80 transition-opacity"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </Link>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold">Beachfront Mansion</h3>
                    <div className="text-primary font-medium">$5,000,000</div>
                  </div>
                  <div className="text-muted-foreground mb-4">6 Bedrooms • 5 Bathrooms • 6,000 sq ft</div>
                  <Button variant="outline" className="w-full" onClick={() => console.log("Schedule Visit")}>
                    Schedule Visit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6 flex items-center justify-between">
        <div className="text-sm">&copy; 2024 ZOOX PRIME. All rights reserved.</div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About Us
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}