import salmosThumb from "@/assets/salmos-thumb.webp";
import pauloThumb from "@/assets/paulo-thumb.webp";
import proverbiosImg from "@/assets/proverbios.webp";

const IntroSection = () => {
  return (
    <section className="py-12 px-4 text-center">
      <p className="text-foreground text-lg md:text-xl max-w-3xl mx-auto mb-6">
        <span className="gold-text font-semibold">Músicas que transformam</span> a leitura da Bíblia em louvor, meditação e
        crescimento espiritual.
      </p>

      <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-4">
        Durante séculos, a Palavra de Deus foi lida, estudada e recitada.
      </p>

      <p className="text-foreground text-base md:text-lg max-w-3xl mx-auto mb-4">
        Agora, ela pode ser sentida, cantada e vivida.
      </p>

      <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-8">
        A Bíblia em Música reúne os Salmos, Provérbios, Cartas de Paulo e
        Evangelhos em uma única jornada musical, feita para transformar sua vida
        espiritual por meio da música.
      </p>

      <div className="flex justify-center gap-4 flex-wrap max-w-lg mx-auto">
        <img
          src={salmosThumb}
          alt="Os 150 Salmos"
          className="w-24 h-20 md:w-32 md:h-24 object-cover rounded-lg shadow-lg"
        />
        <img
          src={proverbiosImg}
          alt="Provérbios em Música"
          className="w-24 h-20 md:w-32 md:h-24 object-cover rounded-lg shadow-lg"
        />
        <img
          src={pauloThumb}
          alt="Cartas de Paulo"
          className="w-24 h-20 md:w-32 md:h-24 object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default IntroSection;
