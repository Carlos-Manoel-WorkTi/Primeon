import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TypingEffect } from '@/components/TypingEffect';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ProductCarousel } from '@/components/ProductCarousel';
import { Star, Shield, Truck, Award, ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const typingWords = ['Exclusivos', 'Premium', 'Únicos', 'Revolucionários', 'Excepcionais'];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">
              PREMIUM
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#produtos" className="text-foreground hover:text-primary transition-colors">Produtos</a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
              <Button className="hero-button">
                Comprar Agora
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-background/60 z-10" />
        
        <div className="container mx-auto px-6 text-center z-20">
          <ScrollReveal delay={200}>
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm font-semibold">
              🚀 Novidade Exclusiva
            </Badge>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Descubra Produtos{' '}
              <br className="hidden md:block" />
              <TypingEffect 
                staticText=""
                words={typingWords}
                typeSpeed={100}
                deleteSpeed={80}
                pauseDuration={2000}
              />
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Transforme sua experiência com nossa coleção cuidadosamente selecionada de produtos que definem o padrão de excelência no mercado.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="hero-button text-lg px-8 py-4 group">
                Explorar Coleção
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary hover:text-primary-foreground">
                Ver Demonstração
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <ParallaxSection speed={0.3} className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce text-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </ParallaxSection>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por Que Escolher <span className="gradient-text">Premium</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Cada produto é uma promessa de qualidade, inovação e satisfação garantida.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Garantia Premium', desc: 'Proteção total com garantia estendida' },
              { icon: Truck, title: 'Entrega Expressa', desc: 'Receba em até 24h em todo Brasil' },
              { icon: Award, title: 'Qualidade Certificada', desc: 'Produtos com certificação internacional' },
              { icon: Star, title: 'Avaliação 5 Estrelas', desc: 'Mais de 10.000 clientes satisfeitos' }
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 200} direction="up">
                <Card className="p-6 text-center bg-secondary/20 border-border/20 hover:glow-box transition-all duration-500 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossa <span className="gradient-text">Coleção Premium</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Produtos selecionados especialmente para quem busca o melhor em qualidade e design.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <ProductCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <ParallaxSection speed={0.2}>
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Pronto Para <span className="gradient-text">Elevar Seu Padrão</span>?
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Junte-se a milhares de clientes que já descobriram a diferença da qualidade premium.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  {[
                    'Frete Grátis em Todo Brasil',
                    'Garantia de 2 Anos',
                    'Suporte 24/7'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center justify-center gap-2 text-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <Button className="hero-button text-xl px-12 py-6 group">
                  Começar Agora
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </ScrollReveal>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-4">
              PREMIUM
            </div>
            <p className="text-muted-foreground mb-6">
              Transformando experiências através da excelência.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
