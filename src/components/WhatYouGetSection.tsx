import { Check } from "lucide-react";

const features = [
  "4 coleções completas: Salmos, Provérbios, Cartas e Evangelhos.",
  "351 músicas devocionais em alta qualidade (MP3).",
  "Letras poéticas e fiéis às Escrituras.",
  "PDFs com acompanhamento de cada música.",
  "Acesso digital vitalício (celular, tablet ou computador).",
  "Download offline para ouvir quando quiser.",
];

const WhatYouGetSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="section-heading mb-8">O que você vai receber?</h2>

      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 bg-card/50 rounded-lg p-4">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <p className="text-foreground text-base">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouGetSection;
