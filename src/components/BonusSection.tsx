const bonuses = [
  {
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=300&h=400&fit=crop",
    title: "Guia Emocional dos Salmos, Provérbios, Cartas de Paulo e Evangelhos",
    description: "Um guia criado para te mostrar qual música ouvir de acordo com sua necessidade espiritual.",
  },
  {
    image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=300&h=400&fit=crop",
    title: "Devocional 30 Dias",
    description: "Um plano devocional prático para aplicar a Palavra em 30 dias, com reflexões e orações guiadas.",
  },
  {
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=400&fit=crop",
    title: "Versões Instrumentais para Oração e Relaxamento",
    description: "Músicas suaves, ideais para orações, momentos de paz e ambiente devocional.",
  },
  {
    image: "https://images.unsplash.com/photo-1548048026-5a1a941d93d3?w=300&h=400&fit=crop",
    title: "Guia Visual Interativo dos Personagens Bíblicos",
    description: "Um material que apresenta os principais personagens citados nas canções, ajudando na compreensão histórica e espiritual.",
  },
  {
    image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=300&h=400&fit=crop",
    title: "Desafio 7 Dias – Memorize a Palavra",
    description: "Uma jornada de 7 dias com exercícios e músicas específicas para te ajudar a elevar ainda mais a sua fé.",
  },
];

const BonusSection = () => {
  return (
    <section className="py-12 px-4">
      <p className="text-center text-foreground text-lg mb-2">Tem mais!</p>
      <h2 className="section-heading mb-2">
        Você vai receber 20 Bônus Exclusivos que custam mais de{" "}
        <span className="gold-text font-bold">R$ 200,00</span>
      </h2>

      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bonuses.map((bonus, index) => (
          <div
            key={index}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={bonus.image}
              alt={bonus.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-foreground font-semibold text-base mb-2">
                {bonus.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {bonus.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BonusSection;
