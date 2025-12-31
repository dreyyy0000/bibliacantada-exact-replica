import { Check } from "lucide-react";

const benefits = [
  "Memorizar a Palavra de Deus de forma natural e prazerosa.",
  "Meditar e se conectar com Deus diariamente.",
  "Fortalecer a fé e tomar decisões com sabedoria.",
  "Criar um ambiente de adoração em casa, no trabalho ou nos momentos de oração.",
];

const BenefitsSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="section-heading mb-8">
        A Bíblia em Música vai te ajudar a:
      </h2>

      <div className="max-w-2xl mx-auto space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
            <p className="text-foreground text-base">{benefit}</p>
          </div>
        ))}
      </div>

      <a
        href="#checkout"
        className="btn-cta block w-full max-w-xl mx-auto text-sm md:text-base"
      >
        Quero acessar a Bíblia em Música agora
      </a>
    </section>
  );
};

export default BenefitsSection;
