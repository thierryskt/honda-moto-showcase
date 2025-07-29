const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/29c09e18-b68e-4404-9f0f-38e5f2dbcc05.png" 
          alt="Divino Honda - Concessionária Autorizada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-honda-red to-white bg-clip-text text-transparent animate-fade-in">
            DIVINO HONDA
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium animate-fade-in [animation-delay:0.2s]">
            Concessionária Autorizada - Os Melhores Modelos 2025
          </p>
          
          {/* Description */}
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in [animation-delay:0.4s]">
            Descubra a linha completa Honda com qualidade garantida, 
            financiamento facilitado e atendimento especializado.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.6s]">
            <button
              onClick={() => document.getElementById('estoque')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-honda-red hover:bg-honda-dark-red text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Ver Estoque
            </button>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Entre em Contato
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;