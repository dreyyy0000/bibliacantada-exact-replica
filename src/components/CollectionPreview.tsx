import capaColecao from "@/assets/capa-colecao-completa.webp";

const CollectionPreview = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src={capaColecao}
            alt="Coleção Completa Bíblia em Música"
            className="w-full max-w-2xl h-auto rounded-lg shadow-xl"
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
