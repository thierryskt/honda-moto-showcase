import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, Clock } from 'lucide-react';
import { Bike } from '@/types/bike';

interface BikeCardProps {
  bike: Bike;
  onInterestClick: (bike: Bike) => void;
}

const BikeCard = ({ bike, onInterestClick }: BikeCardProps) => {
  const getRandomViews = () => Math.floor(Math.random() * 50) + 10;
  const getRandomDaysAgo = () => Math.floor(Math.random() * 7) + 1;
  const isPopular = Math.random() > 0.7;
  const isRecommended = Math.random() > 0.6;

  return (
    <Card className="group card-modern hover-lift bg-card border-border/50 overflow-hidden">
      <div className="relative">
        {/* Modern Price Tag with Gradient */}
        <div className="absolute top-4 left-4 z-10 bg-gradient-cta text-white px-4 py-2 rounded-xl font-bold text-lg shadow-button">
          {bike.price}
          <div className="text-xs font-normal opacity-90 mt-1">à vista</div>
        </div>

        {/* Enhanced Social Badges */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          {isPopular && (
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
              🔥 Mais Vendida
            </Badge>
          )}
          {isRecommended && (
            <Badge className="bg-gradient-accent text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
              ⭐ Recomendação do João
            </Badge>
          )}
        </div>

        {/* Modern Heart/Save Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-4 right-4 z-10 bg-white/90 hover:bg-white text-honda-red shadow-lg rounded-full backdrop-blur-sm hover:scale-110 transition-all duration-300"
        >
          <Heart className="w-5 h-5" />
        </Button>
        
        {/* Enhanced Bike Image Container */}
        <div className="relative h-64 bg-gradient-category flex items-center justify-center overflow-hidden rounded-t-2xl">
          <img
            src={bike.image}
            alt={bike.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop';
            }}
          />
          
          {/* Modern Overlay with CTA */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
            <Button
              variant="secondary"
              className="bg-white/95 text-honda-red hover:bg-white font-semibold px-6 py-3 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
              onClick={() => onInterestClick(bike)}
            >
              📱 Ver Detalhes
            </Button>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        {/* Title with modern typography */}
        <h3 className="text-2xl font-display font-bold mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
          {bike.name}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {bike.description}
        </p>

        {/* Enhanced Social Stats */}
        <div className="flex items-center justify-between mb-6 p-3 bg-gradient-category rounded-xl">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Eye className="w-4 h-4 text-honda-blue" />
            <span className="font-medium">{getRandomViews()}</span>
            <span>visualizações</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-4 h-4 text-honda-red" />
            <span className="font-medium">Último vendido há {getRandomDaysAgo()} dias</span>
          </div>
        </div>
        
        {/* Modern CTA Section */}
        <div className="space-y-4">
          <Button
            onClick={() => onInterestClick(bike)}
            className="w-full cta-button text-lg py-4 rounded-xl font-bold"
          >
            💬 Quero Esta Moto!
          </Button>
          
          {/* Trust Signal */}
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg py-2">
            <span className="text-green-600">✓</span>
            <span>Garantia Honda • Financiamento em 24h • Entrada facilitada</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BikeCard;