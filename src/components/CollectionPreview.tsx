import capaColecao from "@/assets/capa-colecao-completa.webp";

const CollectionPreview = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <div className="relative flex-shrink-0">
          {/* Rating Badge */}
          <div className="absolute top-4 left-4 bg-amber-500 text-black px-3 py-1.5 rounded-lg font-bold text-sm flex items-center gap-1 shadow-lg z-10">
            <span>5.0</span>
            <div className="flex text-xs">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
          
          {/* Guarantee Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex flex-col items-center justify-center text-black font-bold shadow-lg border-2 border-amber-300">
              <span className="text-[10px] uppercase leading-none">Garantia</span>
              <span className="text-xl leading-none">7</span>
              <span className="text-[10px] uppercase leading-none">dias</span>
            </div>
          </div>
          
          <img
            src={capaColecao}
            alt="Coleção Completa Bíblia em Música - Os 150 Salmos, Cartas de Paulo, Provérbios e Evangelhos"
            className="w-full max-w-3xl h-auto"
          />
        </div>
        <div className="text-center">
          <a
            href="#checkout"
            className="btn-cta inline-block text-sm md:text-base"
          >
            Quero acessar a Bíblia em Música agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionPreview;
