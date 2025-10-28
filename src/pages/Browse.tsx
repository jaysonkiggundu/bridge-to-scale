import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Filter } from "lucide-react";

const Browse = () => {
  const businesses = [
    {
      name: "Tech Innovations Inc",
      category: "Technology",
      location: "San Francisco, CA",
      rating: 4.8,
      reviews: 124,
      diversity: ["Black-owned", "Female-founded"],
      description: "Leading cloud solutions provider specializing in AI and machine learning",
    },
    {
      name: "Green Solutions Co",
      category: "Sustainability",
      location: "Austin, TX",
      rating: 4.9,
      reviews: 89,
      diversity: ["Latino-owned"],
      description: "Sustainable packaging and eco-friendly business solutions",
    },
    {
      name: "Creative Design Studio",
      category: "Design",
      location: "New York, NY",
      rating: 4.7,
      reviews: 156,
      diversity: ["LGBTQIA+-owned", "Female-founded"],
      description: "Award-winning branding and digital design agency",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Discover Diverse Businesses</h1>
          <p className="text-lg text-muted-foreground">
            Find and support minority-owned businesses across all industries
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search businesses..."
                className="pl-12 h-12"
              />
            </div>
            <div className="relative md:w-64">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Location"
                className="pl-12 h-12"
              />
            </div>
            <Button size="lg" variant="outline">
              <Filter className="mr-2 h-5 w-5" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {["All", "Black-owned", "Female-founded", "Latino-owned", "LGBTQIA+-owned", "Technology", "Retail", "Services"].map((filter) => (
              <Badge
                key={filter}
                variant={filter === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => (
            <Card key={index} className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary-glow/20" />
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{business.rating}</span>
                    <span className="text-muted-foreground">({business.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{business.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {business.location}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {business.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{business.category}</Badge>
                  {business.diversity.map((tag, i) => (
                    <Badge key={i} className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">View Profile</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
