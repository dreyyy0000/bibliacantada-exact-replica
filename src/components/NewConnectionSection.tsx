import { Check } from "lucide-react";

const features = [
  "Musical e inspirador: Canções devocionais que tocam a alma e criam um ambiente de adoração.",
  "Fiel às Escrituras: Todas as letras foram baseadas diretamente no texto bíblico, em forma poética e fiel.",
  "Didático e meditativo: Ajuda a memorizar versículos e aplicar os ensinamentos no dia a dia.",
  "Conexão profunda: Permite que você viva a Palavra com emoção, entendimento e fé genuína.",
];

const idealFor = [
  "Ter um devocional musical diário.",
  "Se aprofundar espiritualmente com leveza.",
  "Memorizar versículos com facilidade.",
  "Compreender melhor os ensinamentos de Jesus e dos apóstolos.",
  "Fortalecer a fé e tomar decisões com sabedoria.",
  "Criar um ambiente de adoração em casa, no trabalho ou nos momentos de oração.",
];

const NewConnectionSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-foreground text-xl md:text-2xl font-semibold mb-8">
          Uma nova forma de se conectar com a palavra de Deus:
        </h2>

        <div className="space-y-4 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <p className="text-foreground text-base">
                <span className="font-semibold">{feature.split(":")[0]}:</span>
                {feature.split(":")[1]}
              </p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-base text-center mb-8">
          Cada projeto foi cuidadosamente desenvolvido com base nas Escrituras Sagradas, traduzindo a sabedoria e o amor de Deus em músicas que transformam o ambiente e tocam o coração.
        </p>

        <h3 className="text-center text-foreground text-lg font-semibold mb-6">
          Ideal para quem deseja:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {idealFor.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-foreground text-base">{item}</p>
            </div>
          ))}
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

export default NewConnectionSection;
