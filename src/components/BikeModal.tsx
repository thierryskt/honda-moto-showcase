import { useState, useEffect } from 'react';
import { X, MessageCircle, FileText, CreditCard } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Bike, ColorOption } from '@/types/bike';
import { sendWhatsAppMessage, formatBikeInterestMessage } from '@/utils/whatsapp';

interface BikeModalProps {
  bike: Bike | null;
  isOpen: boolean;
  onClose: () => void;
  onConsorcioClick: (bike: Bike) => void;
  onFinanciamentoClick: (bike: Bike) => void;
}

const BikeModal = ({ bike, isOpen, onClose, onConsorcioClick, onFinanciamentoClick }: BikeModalProps) => {
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [currentImage, setCurrentImage] = useState<string>('');
  const [isImageLoading, setIsImageLoading] = useState(false);

  useEffect(() => {
    if (bike) {
      if (bike.colors && bike.colors.length > 0) {
        setSelectedColor(bike.colors[0]);
        setCurrentImage(bike.colors[0].image);
      } else {
        setSelectedColor(null);
        setCurrentImage(bike.image);
      }
    }
  }, [bike]);

  if (!bike) return null;

  const handleColorChange = (color: ColorOption) => {
    if (selectedColor?.name !== color.name) {
      setIsImageLoading(true);
      setSelectedColor(color);
      setCurrentImage(color.image);
      // Simulate loading time for smooth transition
      setTimeout(() => setIsImageLoading(false), 300);
    }
  };

  const handleWhatsAppClick = () => {
    const colorInfo = selectedColor ? ` na cor ${selectedColor.name}` : '';
    const message = formatBikeInterestMessage(bike.name + colorInfo, bike.price);
    sendWhatsAppMessage(message);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-honda-red flex items-center justify-between">
            {bike.name}
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Imagem da Moto */}
          <div className="space-y-4">
            <div className="relative h-64 lg:h-80 bg-gradient-to-br from-honda-blue/5 to-honda-red/5 rounded-lg overflow-hidden">
              {isImageLoading && (
                <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10">
                  <div className="w-8 h-8 border-2 border-honda-red border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={currentImage}
                alt={`${bike.name}${selectedColor ? ` - ${selectedColor.name}` : ''}`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isImageLoading ? 'opacity-50' : 'opacity-100'
                }`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop';
                }}
                onLoad={() => setIsImageLoading(false)}
              />
            </div>

            {/* Seletor de Cores */}
            {bike.colors && bike.colors.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Cores Disponíveis:</h4>
                <div className="flex gap-3 flex-wrap">
                  {bike.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => handleColorChange(color)}
                      className={`
                        relative w-12 h-12 rounded-full border-3 transition-all duration-300 hover:scale-105 group
                        ${selectedColor?.name === color.name 
                          ? 'border-honda-red scale-110 shadow-lg shadow-honda-red/25' 
                          : 'border-border hover:border-honda-red/50'
                        }
                      `}
                      style={{ backgroundColor: color.colorCode }}
                      title={color.name}
                      aria-label={`Selecionar cor ${color.name}`}
                    >
                      {selectedColor?.name === color.name && (
                        <div className="absolute inset-0 rounded-full border-2 border-white/80"></div>
                      )}
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Cor selecionada: {selectedColor?.name || 'Padrão'}
                </p>
              </div>
            )}
          </div>

          {/* Informações da Moto */}
          <div className="space-y-6">
            {/* Preço */}
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-honda-red mb-2">
                {bike.price}
              </div>
              <p className="text-sm text-muted-foreground">
                *Preço público sugerido. Frete não incluso.
              </p>
            </div>

            {/* Descrição */}
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Descrição:</h4>
              <p className="text-muted-foreground">{bike.description}</p>
            </div>

            {/* Botões de Ação */}
            <div className="grid grid-cols-1 gap-3">
              <Button
                onClick={() => onConsorcioClick(bike)}
                className="bg-honda-blue hover:bg-honda-dark-blue text-white flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Consórcio
              </Button>
              
              <Button
                onClick={() => onFinanciamentoClick(bike)}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                Financiamento
              </Button>
              
              <Button
                onClick={handleWhatsAppClick}
                className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>

            {/* Especificações Técnicas */}
            {bike.specs && (
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Especificações Técnicas:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {bike.specs.motor && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Motor:</span>
                      <span className="text-foreground font-medium">{bike.specs.motor}</span>
                    </div>
                  )}
                  {bike.specs.cilindrada && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Cilindrada:</span>
                      <span className="text-foreground font-medium">{bike.specs.cilindrada}</span>
                    </div>
                  )}
                  {bike.specs.potencia && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Potência:</span>
                      <span className="text-foreground font-medium">{bike.specs.potencia}</span>
                    </div>
                  )}
                  {bike.specs.transmissao && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Transmissão:</span>
                      <span className="text-foreground font-medium">{bike.specs.transmissao}</span>
                    </div>
                  )}
                  {bike.specs.combustivel && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Combustível:</span>
                      <span className="text-foreground font-medium">{bike.specs.combustivel}</span>
                    </div>
                  )}
                  {bike.specs.partida && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Partida:</span>
                      <span className="text-foreground font-medium">{bike.specs.partida}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BikeModal;