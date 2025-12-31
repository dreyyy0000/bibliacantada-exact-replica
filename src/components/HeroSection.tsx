import headerBible from "@/assets/header-bible.jpg";

const HeroSection = () => {
  return (
    <section className="pt-8 pb-12 px-4 text-center">
      {/* Bible Image */}
      <div className="mb-6">
        <img
          src={headerBible}
          alt="Bíblia iluminada"
          className="mx-auto w-48 md:w-56 h-auto rounded-lg shadow-2xl"
        />
      </div>

      {/* Logo - Premium Typography */}
      <div className="mb-8">
        <p className="font-cormorant text-2xl md:text-3xl font-medium tracking-wide text-foreground italic">
          Bíblia Viva
        </p>
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-4xl mx-auto uppercase">
        OS LIVROS DA BÍBLIA FORAM TRANSFORMADOS EM{" "}
        <span className="gold-text">350 MÚSICAS</span> PARA QUE ADORE E CANTE
        CADA VERSÍCULO.
      </h1>

      {/* Subheadline */}
      <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-4">
        Todos os 150 Salmos, as cartas de Paulo, Provérbios e a trajetória de
        Jesus, foram transformados em músicas devocionais.
      </p>

      <p className="text-base md:text-lg max-w-3xl mx-auto">
        <span className="gold-text">
          Após baixar todas as músicas, você poderá ouvir onde e como quiser,
        </span>{" "}
        <span className="text-muted-foreground">sem precisar de internet.</span>
      </p>
    </section>
  );
};

export default HeroSection;
