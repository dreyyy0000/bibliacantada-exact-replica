import comboGuiaEmocional from "@/assets/combo-guia-emocional.webp";
import comboDevocional from "@/assets/combo-devocional-30d.webp";
import comboGuiaVisual from "@/assets/combo-guia-visual.webp";
import comboDesafio from "@/assets/combo-desafio-7d.webp";
import instrumentais from "@/assets/instrumentais.webp";

const bonuses = [
  {
    image: comboGuiaEmocional,
    title: "Guia Emocional dos Salmos, Provérbios, Cartas de Paulo e Evangelhos",
    description: "Um guia criado para te mostrar qual música ouvir de acordo com sua necessidade espiritual.",
  },
  {
    image: comboDevocional,
    title: "Devocional 30 Dias",
    description: "Um plano devocional prático para aplicar a Palavra em 30 dias, com reflexões e orações guiadas.",
  },
  {
    image: instrumentais,
    title: "Versões Instrumentais para Oração e Relaxamento",
    description: "Músicas suaves, ideais para orações, momentos de paz e ambiente devocional.",
    singleImage: true,
  },
  {
    image: comboGuiaVisual,
    title: "Guia Visual Interativo dos Personagens Bíblicos",
    description: "Um material que apresenta os principais personagens citados nas canções, ajudando na compreensão histórica e espiritual.",
  },
  {
    image: comboDesafio,
    title: "Desafio 7 Dias – Memorize a Palavra",
    description: "Uma jornada de 7 dias com exercícios e músicas específicas para te ajudar a elevar ainda mais a sua fé.",
  },
];

const BonusSection = () => {
  return (
    <section className="py-12 px-4">
      <p className="text-center text-foreground text-lg mb-2">Tem mais!</p>
      <h2 className="section-heading mb-2">Você vai receber</h2>
      <p className="text-center text-foreground text-xl md:text-2xl font-bold mb-2">
        <span className="gold-text">20 Bônus Exclusivos</span> que custam mais de
      </p>
      <p className="text-center text-2xl md:text-3xl font-bold gold-text mb-10">
        R$ 400,00
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bonuses.map((bonus, index) => (
          <div
            key={index}
            className={`bg-card rounded-xl p-6 shadow-lg border border-gold/20 flex flex-col items-center text-center ${
              bonus.singleImage ? "lg:col-span-1" : ""
            }`}
          >
            <img
              src={bonus.image}
              alt={bonus.title}
              className={`mb-4 ${bonus.singleImage ? "w-36 h-auto" : "w-48 h-auto"}`}
            />
            <h3 className="text-foreground font-semibold text-lg mb-2">
              {bonus.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {bonus.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BonusSection;
