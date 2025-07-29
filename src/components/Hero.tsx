const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/29c09e18-b68e-4404-9f0f-38e5f2dbcc05.png" 
          alt="Divino Honda - Concessionária Autorizada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-honda-red/20 via-transparent to-honda-blue/20"></div>
      </div>
      
      {/* Modern Content Container */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Trust Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 animate-fade-in">
          <span className="text-white/90 text-sm font-medium">✓ Concessionária Autorizada Honda</span>
        </div>
        
        {/* Main Headline - Conversion Focused */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 animate-fade-in leading-tight">
          <span className="block">DIVINO HONDA</span>
          <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 gradient-text">
            Modelos 2025 Chegaram!
          </span>
        </h1>
        
        {/* Value Proposition */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in font-medium leading-relaxed" style={{ animationDelay: '0.2s' }}>
          <strong>Financiamento aprovado em 24h</strong> • Entrada facilitada • Consórcio sem juros<br/>
          <span className="text-white/80">Realize seu sonho com as melhores condições do mercado</span>
        </p>
        
        {/* CTA Buttons - Modern Design */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-8" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => scrollToSection('estoque')}
            className="group relative overflow-hidden bg-gradient-cta text-white font-semibold px-10 py-5 rounded-2xl shadow-button hover:shadow-glow transform hover:scale-105 transition-all duration-300 border border-white/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              🏍️ Ver Estoque Completo
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          
          <button 
            onClick={() => scrollToSection('contato')}
            className="glass-morphism text-white font-semibold px-10 py-5 rounded-2xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            💬 Falar com Especialista
          </button>
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span className="text-sm">4.9/5 (847 avaliações)</span>
          </div>
          <div className="text-sm">•</div>
          <div className="text-sm">+2.000 motos vendidas</div>
          <div className="text-sm">•</div>
          <div className="text-sm">8 anos de experiência</div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-white/60 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;