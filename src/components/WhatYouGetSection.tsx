import iconImages from "@/assets/icon-images.svg";
import iconHeadphones from "@/assets/icon-headphones.svg";
import iconDocument from "@/assets/icon-document.svg";
import iconPdf from "@/assets/icon-pdf.svg";
import iconLock from "@/assets/icon-lock.svg";
import iconBookmark from "@/assets/icon-bookmark.svg";

const features = [
  {
    icon: iconImages,
    text: "4 coleções completas: Salmos, Provérbios, Cartas e Evangelhos.",
  },
  {
    icon: iconHeadphones,
    text: "351 músicas devocionais em alta qualidade (MP3).",
  },
  {
    icon: iconDocument,
    text: "Letras poéticas e fiéis às Escrituras.",
  },
  {
    icon: iconPdf,
    text: "PDFs com acompanhamento de cada música.",
  },
  {
    icon: iconLock,
    text: "Acesso digital vitalício (celular, tablet ou computador).",
  },
  {
    icon: iconBookmark,
    text: "Download offline para ouvir quando quiser.",
  },
];

const WhatYouGetSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="section-heading mb-8">O que você vai receber?</h2>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={feature.icon}
              alt=""
              className="w-16 h-16 flex-shrink-0"
            />
            <p className="text-foreground text-base">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouGetSection;
