const CollectionPreview = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop"
            alt="Coleção Bíblia em Música"
            className="w-64 md:w-80 h-auto rounded-lg shadow-xl"
          />
        </div>
        <div className="text-center md:text-left">
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
