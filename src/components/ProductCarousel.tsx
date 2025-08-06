import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import product1 from '@/assets/product1.jpg';
import product2 from '@/assets/product2.jpg';
import product3 from '@/assets/product3.jpg';

const products = [
  {
    id: 1,
    name: 'Premium Elite Pro',
    description: 'O produto que revoluciona sua experiência com tecnologia de ponta e design excepcional.',
    image: product1,
    price: 'R$ 299,90'
  },
  {
    id: 2,
    name: 'Master Collection',
    description: 'Qualidade superior encontra inovação em cada detalhe cuidadosamente projetado.',
    image: product2,
    price: 'R$ 449,90'
  },
  {
    id: 3,
    name: 'Signature Series',
    description: 'A escolha dos profissionais que não aceitam compromissos com a excelência.',
    image: product3,
    price: 'R$ 599,90'
  }
];

export const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16 bg-secondary/20 backdrop-blur-sm">
                <div className="order-2 lg:order-1 space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-bold gradient-text">
                    {product.name}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-6">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Button className="hero-button px-8 py-3 text-lg">
                      Comprar Agora
                    </Button>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative group">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 lg:h-96 object-cover rounded-xl glow-box group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary scale-125' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};