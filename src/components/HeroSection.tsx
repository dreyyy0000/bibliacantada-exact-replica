import headerBible from "@/assets/header-bible.jpg";

const HeroSection = () => {
  return (
    <section className="pt-8 pb-12 px-4 text-center">
      {/* Logo with Bible Image */}
      <div className="mb-8">
        <img 
          src={headerBible} 
          alt="Bíblia aberta com luz divina" 
          className="w-48 md:w-64 mx-auto mb-4 rounded-lg shadow-lg"
        />
        <h2 className="font-cormorant text-3xl md:text-4xl font-semibold italic text-foreground tracking-wide">
          Bíblia Viva
        </h2>
      </div>

      {/* Main Headline */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6 max-w-4xl mx-auto uppercase tracking-wide">
        OS LIVROS DA BÍBLIA FORAM TRANSFORMADOS EM{" "}
        <span className="gold-text">350 MÚSICAS</span> PARA QUE ADORE E CANTE
        CADA VERSÍCULO.
      </h1>

      {/* Subheadline */}
      <p className="text-foreground text-base md:text-lg max-w-3xl mx-auto mb-4">
        Todos os 150 Salmos, as cartas de Paulo, Provérbios e a trajetória de
        Jesus, foram transformados em músicas devocionais.
      </p>

      <p className="text-base md:text-lg max-w-3xl mx-auto">
        <span className="gold-text">
          Após baixar todas as músicas, você poderá ouvir onde e como quiser,
        </span>{" "}
        <span className="text-foreground">sem precisar de internet.</span>
      </p>
    </section>
  );
};

export default HeroSection;
