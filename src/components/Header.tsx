import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sendWhatsAppMessage } from '@/utils/whatsapp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    sendWhatsAppMessage('Olá! Gostaria de mais informações sobre as motocicletas Honda.');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Modern Design */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-display font-bold gradient-text">
              DIVINO HONDA
            </h1>
          </div>

          {/* Desktop Navigation - Modern Styling */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('estoque')}
              className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Estoque
            </button>
            <button
              onClick={() => scrollToSection('stats')}
              className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10"
            >
              Contato
            </button>
          </nav>

          {/* Contact Button - Modern CTA */}
          <div className="hidden md:block">
            <Button
              onClick={handleContactClick}
              className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white font-semibold px-6 py-3 rounded-xl shadow-button hover:shadow-hover transform hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              💬 Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button - Modern Design */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Modern Design */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 glass-morphism border-t border-white/10 rounded-b-2xl">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-3 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/10"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('estoque')}
                className="block w-full text-left px-4 py-3 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/10"
              >
                Estoque
              </button>
              <button
                onClick={() => scrollToSection('stats')}
                className="block w-full text-left px-4 py-3 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/10"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-3 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-white/10"
              >
                Contato
              </button>
              <div className="px-4 pt-2">
                <Button
                  onClick={handleContactClick}
                  className="w-full bg-whatsapp-green hover:bg-whatsapp-green/90 text-white font-semibold py-3 rounded-xl shadow-button"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  💬 Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;