import { Music, Mail, BookOpen, BookMarked } from "lucide-react";

const collections = [
  {
    icon: Music,
    title: "150 Salmos em Música",
    description: "Músicas inspiradas em todos os Salmos, compostas com base no texto bíblico, para fortalecer a fé, trazer paz e renovar a esperança.",
    variant: "dark" as const,
  },
  {
    icon: Mail,
    title: "Todas as Cartas de Paulo em Música",
    description: "70 canções devocionais com os ensinamentos do apóstolo Paulo, traduzindo seus conselhos, exortações e revelações em melodias poderosas.",
    variant: "light" as const,
  },
  {
    icon: BookOpen,
    title: "Provérbios em Música",
    description: "31 canções sobre sabedoria, discernimento e decisões guiadas por Deus — um capítulo em cada música, com aplicação prática para a vida.",
    variant: "dark" as const,
  },
  {
    icon: BookMarked,
    title: "Evangelhos em Música",
    description: "100 canções que narram a vida de Jesus — do nascimento à ressurreição, conduzindo o ouvinte por uma jornada emocionante através dos quatro Evangelhos.",
    variant: "gold" as const,
  },
];

const getCardStyles = (variant: "dark" | "light" | "gold") => {
  switch (variant) {
    case "dark":
      return "bg-[#5c3d2e]";
    case "light":
      return "bg-[#f5efe6]";
    case "gold":
      return "bg-[#d4a84b]";
  }
};

const getIconStyles = (variant: "dark" | "light" | "gold") => {
  switch (variant) {
    case "dark":
      return "text-[#d4a84b]";
    case "light":
      return "text-[#5c3d2e]";
    case "gold":
      return "text-[#5c3d2e]";
  }
};

const getTitleStyles = (variant: "dark" | "light" | "gold") => {
  switch (variant) {
    case "dark":
      return "text-[#d4a84b]";
    case "light":
      return "text-[#5c3d2e]";
    case "gold":
      return "text-[#5c3d2e]";
  }
};

const getTextStyles = (variant: "dark" | "light" | "gold") => {
  switch (variant) {
    case "dark":
      return "text-[#f5efe6]";
    case "light":
      return "text-[#5c3d2e]";
    case "gold":
      return "text-[#5c3d2e]";
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
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${collection.variant === 'dark' ? 'bg-[#d4a84b]' : collection.variant === 'light' ? 'bg-[#5c3d2e]' : 'bg-[#5c3d2e]'}`}>
              <collection.icon className={`w-5 h-5 ${collection.variant === 'dark' ? 'text-[#5c3d2e]' : 'text-[#f5efe6]'}`} />
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

      <div className="text-center mt-10">
        <p className="text-foreground text-lg md:text-xl mb-4">
          Sua relação com a Bíblia nunca mais será a mesma!
        </p>
        <p className="text-muted-foreground text-base max-w-3xl mx-auto">
          A Bíblia em Música reúne as principais coleções devocionais da Bíblia em um só lugar — um material exclusivo, criado para te guiar em uma imersão espiritual sonora completa.
        </p>
      </div>
    </section>
  );
};

export default AccessSection;
