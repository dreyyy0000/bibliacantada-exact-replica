import { Music, Mail, BookOpen, BookMarked } from "lucide-react";
import iconExclamation from "@/assets/icon-exclamation.svg";
import canteAdoreBg from "@/assets/cante-adore-bg.webp";

const collections = [
  {
    icon: Music,
    title: "150 Salmos em Música",
    description: "Músicas inspiradas em todos os Salmos, compostas com base no texto bíblico, para fortalecer a fé, trazer paz e renovar a esperança.",
    variant: "cream" as const,
  },
  {
    icon: Mail,
    title: "Todas as Cartas de Paulo em Música",
    description: "70 canções devocionais com os ensinamentos do apóstolo Paulo, traduzindo seus conselhos, exortações e revelações em melodias poderosas.",
    variant: "brown" as const,
  },
  {
    icon: BookOpen,
    title: "Provérbios em Música",
    description: "31 canções sobre sabedoria, discernimento e decisões guiadas por Deus — um capítulo em cada música, com aplicação prática para a vida.",
    variant: "orange" as const,
  },
  {
    icon: BookMarked,
    title: "Evangelhos em Música",
    description: "100 canções que narram a vida de Jesus — do nascimento à ressurreição, conduzindo o ouvinte por uma jornada emocionante através dos quatro Evangelhos.",
    variant: "gold" as const,
  },
];

const getCardStyles = (variant: "cream" | "brown" | "orange" | "gold") => {
  switch (variant) {
    case "cream":
      return "bg-[#e8e0d5]";
    case "brown":
      return "bg-[#6b3a0a]";
    case "orange":
      return "bg-[#b5710d]";
    case "gold":
      return "bg-[#d9a41e]";
  }
};

const getIconBgStyles = (variant: "cream" | "brown" | "orange" | "gold") => {
  switch (variant) {
    case "cream":
      return "bg-[#d9a41e]";
    case "brown":
      return "bg-[#e8e0d5]";
    case "orange":
      return "bg-[#6b3a0a]";
    case "gold":
      return "bg-[#6b3a0a]";
  }
};

const getIconStyles = (variant: "cream" | "brown" | "orange" | "gold") => {
  switch (variant) {
    case "cream":
      return "text-[#6b3a0a]";
    case "brown":
      return "text-[#6b3a0a]";
    case "orange":
      return "text-[#e8e0d5]";
    case "gold":
      return "text-[#e8e0d5]";
  }
};

const getTitleStyles = (variant: "cream" | "brown" | "orange" | "gold") => {
  switch (variant) {
    case "cream":
      return "text-[#6b3a0a]";
    case "brown":
      return "text-[#d9a41e]";
    case "orange":
      return "text-[#6b3a0a]";
    case "gold":
      return "text-[#6b3a0a]";
  }
};

const getTextStyles = (variant: "cream" | "brown" | "orange" | "gold") => {
  switch (variant) {
    case "cream":
      return "text-[#6b3a0a]";
    case "brown":
      return "text-[#e8e0d5]";
    case "orange":
      return "text-[#6b3a0a]";
    case "gold":
      return "text-[#6b3a0a]";
  }
};

const AccessSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-foreground text-lg md:text-xl mb-2">
        <span className="font-bold gold-text">Tenha acesso exclusivo</span> de forma organizada, fácil e prática a:
      </h2>

      <div className="max-w-sm mx-auto mt-10 flex flex-col gap-4">
        {collections.map((collection, index) => (
          <div
            key={index}
            className={`rounded-2xl p-5 ${getCardStyles(collection.variant)}`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${getIconBgStyles(collection.variant)}`}>
              <collection.icon className={`w-5 h-5 ${getIconStyles(collection.variant)}`} />
            </div>
            <h3 className={`font-bold text-base leading-tight mb-2 ${getTitleStyles(collection.variant)}`}>
              {collection.title}
            </h3>
            <p className={`text-xs leading-relaxed opacity-90 ${getTextStyles(collection.variant)}`}>
              {collection.description}
            </p>
          </div>
        ))}
      </div>

      {/* Nova seção "Sua relação com a Bíblia" */}
      <div className="text-center mt-16 max-w-md mx-auto">
        <img src={iconExclamation} alt="" className="w-16 h-auto mx-auto mb-6" />
        
        <h3 className="text-white text-2xl font-bold leading-tight mb-4">
          Sua relação com a Bíblia nunca mais será a mesma!
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-10">
          A Bíblia em Música reúne as principais coleções devocionais da Bíblia em um só lugar — um material exclusivo, criado para te guiar em uma imersão espiritual sonora completa.
        </p>

      </div>
    </section>
  );
};

export default AccessSection;
