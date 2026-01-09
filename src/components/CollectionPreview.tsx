import capaColecao from "@/assets/capa-colecao-completa.webp";
import { smoothScrollTo } from "@/hooks/useSmoothScroll";

const CollectionPreview = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("checkout", 1800);
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src={capaColecao}
            alt="Coleção Completa Bíblia em Música - Os 150 Salmos, Cartas de Paulo, Provérbios e Evangelhos"
            className="w-full max-w-3xl h-auto"
          />
        </div>
        <div className="text-center">
          <a
            href="#checkout"
            onClick={handleClick}
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
