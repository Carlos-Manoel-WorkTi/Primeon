import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ParallaxSection } from '@/components/ParallaxSection';
import { SearchBar } from '@/components/SearchBar';
import { 
  Sparkles, 
  TrendingUp, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  Play,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';
import product1 from '@/assets/product1.jpg';
import product2 from '@/assets/product2.jpg';
import product3 from '@/assets/product3.jpg';

const categories = [
  {
    id: 'trending',
    name: 'Tendências',
    icon: TrendingUp,
    description: 'Descubra os produtos mais populares do momento',
    items: [
      { name: 'Premium Elite Pro', image: product1, trend: '+45%' },
      { name: 'Master Collection', image: product2, trend: '+32%' },
      { name: 'Signature Series', image: product3, trend: '+28%' }
    ]
  },
  {
    id: 'featured',
    name: 'Destaques',
    icon: Sparkles,
    description: 'Produtos em destaque selecionados especialmente para você',
    items: [
      { name: 'Deluxe Edition', image: product2, badge: 'Novo' },
      { name: 'Professional Plus', image: product3, badge: 'Top' },
      { name: 'Exclusive Limited', image: product1, badge: 'Limitado' }
    ]
  },
  {
    id: 'collections',
    name: 'Coleções',
    icon: Award,
    description: 'Explore nossas coleções temáticas cuidadosamente curadas',
    items: [
      { name: 'Coleção Inverno', image: product3, items: '12 produtos' },
      { name: 'Edição Especial', image: product1, items: '8 produtos' },
      { name: 'Linha Premium', image: product2, items: '15 produtos' }
    ]
  }
];

const stats = [
  { label: 'Produtos Únicos', value: '500+', icon: Sparkles },
  { label: 'Clientes Satisfeitos', value: '10K+', icon: Users },
  { label: 'Países Atendidos', value: '25+', icon: Globe },
  { label: 'Anos de Experiência', value: '15+', icon: Award }
];

const Explore = () => {
  const [activeTab, setActiveTab] = useState('trending');

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
              <Link to="/products" className="text-foreground hover:text-primary transition-colors">Produtos</Link>
              <Link to="/explore" className="text-primary font-medium">Explorar</Link>
              <SearchBar />
              <Button className="hero-button">
                Minha Conta
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/80 z-10" />
        
        <div className="container mx-auto px-6 relative z-20">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm font-semibold">
                <Zap className="h-4 w-4 mr-2" />
                Explore & Descubra
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Explore o Mundo dos{' '}
                <span className="gradient-text">Produtos Premium</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Mergulhe em uma experiência única de descoberta. Encontre produtos que definem tendências e elevam seu padrão de vida.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="hero-button text-lg px-8 py-4 group">
                  <Play className="h-5 w-5 mr-2" />
                  Começar Exploração
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary hover:text-primary-foreground">
                  Ver Guia Completo
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <Card className="text-center p-6 bg-background/50 border-border/20 hover:glow-box transition-all duration-500">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 gradient-text">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Descubra Por <span className="gradient-text">Categoria</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Navegue através de nossas categorias especiais e encontre exatamente o que procura.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-secondary/20 p-2 rounded-xl">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {category.items.map((item, index) => (
                      <ScrollReveal key={index} delay={index * 200}>
                        <Card className="group overflow-hidden bg-secondary/20 border-border/20 hover:glow-box transition-all duration-500 cursor-pointer">
                          <div className="relative overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                            
                            {category.id === 'trending' && item.trend && (
                              <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                                {item.trend}
                              </Badge>
                            )}
                            
                            {category.id === 'featured' && item.badge && (
                              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                                {item.badge}
                              </Badge>
                            )}
                            
                            {category.id === 'collections' && item.items && (
                              <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                                {item.items}
                              </Badge>
                            )}
                          </div>
                          
                          <div className="p-6">
                            <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                              {item.name}
                            </h4>
                            
                            <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                              Explorar
                              <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </Card>
                      </ScrollReveal>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection speed={0.3}>
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Pronto Para <span className="gradient-text">Descobrir Mais</span>?
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Junte-se à nossa comunidade de exploradores e seja o primeiro a descobrir as últimas novidades.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="hero-button text-lg px-8 py-4 group" asChild>
                    <Link to="/products">
                      Ver Todos os Produtos
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary hover:text-primary-foreground">
                    <Shield className="h-5 w-5 mr-2" />
                    Garantia Premium
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ParallaxSection>
    </div>
  );
};

export default Explore;