import { Music, BookOpen, ScrollText, Cross } from "lucide-react";

const collections = [
  {
    icon: Music,
    title: "150 Salmos em Música",
    description: "Músicas inspiradas em todos os Salmos, compostas com base no texto bíblico, para fortalecer a fé, trazer paz e renovar a esperança.",
  },
  {
    icon: ScrollText,
    title: "Todas as Cartas de Paulo em Música",
    description: "70 canções devocionais com os ensinamentos do apóstolo Paulo, traduzindo seus conselhos, exortações e revelações em melodias poderosas.",
  },
  {
    icon: BookOpen,
    title: "Provérbios em Música",
    description: "31 canções sobre sabedoria, discernimento e decisões guiadas por Deus — um capítulo em cada música, com aplicação prática para a vida.",
  },
  {
    icon: Cross,
    title: "Evangelhos em Música",
    description: "100 canções que narram a vida de Jesus — do nascimento à ressurreição, conduzindo o ouvinte por uma jornada emocionante através dos quatro Evangelhos.",
  },
];

const AccessSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-foreground text-lg md:text-xl mb-2">
        <span className="font-bold gold-text">Tenha acesso exclusivo</span> de forma organizada, fácil e prática a:
      </h2>

      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-6 flex gap-4 items-start"
          >
            <div className="flex-shrink-0">
              <collection.icon className="w-10 h-10 text-gold" />
            </div>
            <div>
              <h3 className="text-foreground font-semibold text-lg mb-2">
                {collection.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {collection.description}
              </p>
            </div>
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
