import { Music, BookOpen, ScrollText, BookMarked } from "lucide-react";

const collections = [
  {
    icon: Music,
    title: "150 Salmos em Música",
    description: "Músicas inspiradas em todos os Salmos, compostas com base no texto bíblico, para fortalecer a fé, trazer paz e renovar a esperança.",
    variant: "dark" as const,
  },
  {
    icon: ScrollText,
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
      return "bg-[#3d2a1a] text-white";
    case "light":
      return "bg-[#f5e6d3] text-[#3d2a1a]";
    case "gold":
      return "bg-gradient-to-br from-amber-500 to-amber-600 text-[#3d2a1a]";
  }
};

const getIconStyles = (variant: "dark" | "light" | "gold") => {
  switch (variant) {
    case "dark":
      return "text-amber-400";
    case "light":
      return "text-amber-600";
    case "gold":
      return "text-[#3d2a1a]";
  }
};

const getTitleStyles = (variant: "dark" | "light" | "gold") => {
  switch (variant) {
    case "dark":
      return "text-amber-400";
    case "light":
      return "text-[#3d2a1a]";
    case "gold":
      return "text-[#3d2a1a]";
  }
};

const getTextStyles = (variant: "dark" | "light" | "gold") => {
  switch (variant) {
    case "dark":
      return "text-white/80";
    case "light":
      return "text-[#3d2a1a]/80";
    case "gold":
      return "text-[#3d2a1a]/80";
  }
};

const AccessSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-foreground text-lg md:text-xl mb-2">
        <span className="font-bold gold-text">Tenha acesso exclusivo</span> de forma organizada, fácil e prática a:
      </h2>

      <div className="max-w-md mx-auto mt-10 flex flex-col gap-4">
        {collections.map((collection, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 ${getCardStyles(collection.variant)}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <collection.icon className={`w-8 h-8 ${getIconStyles(collection.variant)}`} />
              <h3 className={`font-bold text-lg ${getTitleStyles(collection.variant)}`}>
                {collection.title}
              </h3>
            </div>
            <p className={`text-sm leading-relaxed ${getTextStyles(collection.variant)}`}>
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
