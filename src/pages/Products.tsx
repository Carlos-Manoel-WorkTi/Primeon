import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchBar } from '@/components/SearchBar';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Star, ShoppingCart, Heart, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import product1 from '@/assets/product1.jpg';
import product2 from '@/assets/product2.jpg';
import product3 from '@/assets/product3.jpg';
import { FadeSlideUp } from '@/components/FadeSlideUp ';
import { FadeSlide } from '@/components/FadeSlide';

const products = [
  {
    id: 1,
    name: 'Premium Elite Pro',
    description: 'O produto que revoluciona sua experiência com tecnologia de ponta e design excepcional.',
    image: product1,
    price: 299.90,
    originalPrice: 399.90,
    rating: 4.9,
    reviews: 234,
    category: 'premium',
    discount: 25
  },
  {
    id: 2,
    name: 'Master Collection',
    description: 'Qualidade superior encontra inovação em cada detalhe cuidadosamente projetado.',
    image: product2,
    price: 449.90,
    originalPrice: 549.90,
    rating: 4.8,
    reviews: 189,
    category: 'master',
    discount: 18
  },
  {
    id: 3,
    name: 'Signature Series',
    description: 'A escolha dos profissionais que não aceitam compromissos com a excelência.',
    image: product3,
    price: 599.90,
    originalPrice: 699.90,
    rating: 5.0,
    reviews: 156,
    category: 'signature',
    discount: 14
  },
  {
    id: 4,
    name: 'Deluxe Edition',
    description: 'Experiência premium com recursos avançados para usuários exigentes.',
    image: product1,
    price: 349.90,
    originalPrice: 429.90,
    rating: 4.7,
    reviews: 98,
    category: 'deluxe',
    discount: 19
  },
  {
    id: 5,
    name: 'Professional Plus',
    description: 'Ferramenta profissional com desempenho superior e durabilidade excepcional.',
    image: product2,
    price: 799.90,
    originalPrice: 999.90,
    rating: 4.9,
    reviews: 278,
    category: 'professional',
    discount: 20
  },
  {
    id: 6,
    name: 'Exclusive Limited',
    description: 'Edição limitada com design único e características exclusivas.',
    image: product3,
    price: 899.90,
    originalPrice: 1199.90,
    rating: 5.0,
    reviews: 67,
    category: 'exclusive',
    discount: 25
  }
];

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');

  const handleSearch = (query: string) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    const sorted = [...filteredProducts].sort((a, b) => {
      switch (value) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });
    setFilteredProducts(sorted);
  };

  const handleFilter = (value: string) => {
    setFilterBy(value);
    if (value === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === value);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold gradient-text">
              PREMIUM
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/products" className="text-primary font-medium">Produtos</Link>
              <Link to="/explore" className="text-foreground hover:text-primary transition-colors">Explorar</Link>
              <SearchBar onSearch={handleSearch} />
              <Button className="hero-button">
                Minha Conta
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nossa <span className="gradient-text">Coleção Completa</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore nossa linha completa de produtos premium cuidadosamente selecionados para você.
            </p>
          </div>
        </ScrollReveal>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-secondary/10 rounded-xl">
          <div className="flex-1">
            <FadeSlide direction={"left"}  delay={100}duration={2}>
               <SearchBar onSearch={handleSearch} placeholder="Buscar por nome ou descrição..." />
            </FadeSlide>
          </div>
          <div className="flex gap-4">
             <FadeSlide direction={"right"}  delay={100}duration={2}>
            <Select value={filterBy} onValueChange={handleFilter}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="master">Master</SelectItem>
                <SelectItem value="signature">Signature</SelectItem>
                <SelectItem value="deluxe">Deluxe</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="exclusive">Exclusive</SelectItem>
              </SelectContent>
            </Select>
            </FadeSlide>
             <FadeSlide direction={"right"}  delay={100}duration={2}>
            <Select value={sortBy} onValueChange={handleSort}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nome A-Z</SelectItem>
                <SelectItem value="price-low">Menor Preço</SelectItem>
                <SelectItem value="price-high">Maior Preço</SelectItem>
                <SelectItem value="rating">Avaliação</SelectItem>
              </SelectContent>
            </Select>
            </FadeSlide>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 100}>
                <FadeSlideUp delay={200}>
              <Card className="group overflow-hidden bg-secondary/20 border-border/20 hover:glow-box transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.discount > 0 && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      -{product.discount}%
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-primary fill-current' : 'text-muted-foreground'}`} 
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviews} avaliações)
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                    
                    <Button className="hero-button group/btn">
                      <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Comprar
                    </Button>
                  </div>
                </div>
              </Card>
              </FadeSlideUp>
            </ScrollReveal>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold mb-4">Nenhum produto encontrado</h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar os filtros ou termos de busca.
            </p>
            <Button onClick={() => {
              setFilteredProducts(products);
              setFilterBy('all');
            }}>
              Ver Todos os Produtos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;