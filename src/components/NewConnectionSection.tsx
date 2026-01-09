import { Check } from "lucide-react";
import pergaminhoEscrituras from "@/assets/pergaminho-escrituras.png";

const features = [
  {
    title: "Musical e inspirador",
    description: "Canções devocionais que tocam a alma e criam um ambiente de adoração."
  },
  {
    title: "Fiel às Escrituras",
    description: "Todas as letras foram baseadas diretamente no texto bíblico, em forma poética e fiel."
  },
  {
    title: "Didático e meditativo",
    description: "Ajuda a memorizar versículos e aplicar os ensinamentos no dia a dia."
  },
  {
    title: "Conexão profunda",
    description: "Permite que você viva a Palavra com emoção, entendimento e fé genuína."
  },
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
      <div className="max-w-md mx-auto">
        <h2 className="text-center text-foreground text-xl md:text-2xl mb-8">
          Uma nova forma de se conectar <span className="gold-text font-bold">com a palavra de Deus:</span>
        </h2>

        <div className="space-y-4 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#3d2a1a] rounded-xl p-4">
              <p className="text-white text-sm">
                <span className="text-[#c8a45a] font-semibold underline">{feature.title}:</span>{" "}
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Imagem do pergaminho */}
        <div className="my-10">
          <img 
            src={pergaminhoEscrituras} 
            alt="Cada projeto foi cuidadosamente desenvolvido com base nas Escrituras Sagradas" 
            className="w-full h-auto"
          />
        </div>

        <h3 className="text-center text-foreground text-lg font-semibold mb-6">
          Ideal para quem deseja:
        </h3>

        <div className="space-y-3 mb-8">
          {idealFor.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-foreground text-sm">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://ambienteseguro.org.ua/c/f3351a172d"
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
