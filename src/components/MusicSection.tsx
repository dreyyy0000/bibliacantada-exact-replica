import MusicCard from "./MusicCard";
import musicEvangelhos from "@/assets/music-evangelhos.png";
import musicRomanos from "@/assets/music-romanos.png";
import musicProverbios from "@/assets/music-proverbios.png";
import musicSalmos from "@/assets/music-salmos.png";

const musicData = [
  {
    image: musicEvangelhos,
    title: "Música 29 - O Sermão do Monte – parte 1 (Bem-aventuranças) - Músicas dos Evangelhos",
    duration: "3:36",
    audioSrc: "/audio/musica-29-sermao-do-monte.mp3",
  },
  {
    image: musicRomanos,
    title: "Capítulo 7 – A Luta entre a Carne e o Espírito – Carta de Paulo aos Romanos",
    duration: "4:17",
    audioSrc: "/audio/capitulo-7-romanos.mp3",
  },
  {
    image: musicProverbios,
    title: "Provérbios 1 - A Voz da Sabedoria",
    duration: "3:54",
    audioSrc: "/audio/proverbios-1.mp3",
  },
  {
    image: musicSalmos,
    title: "Ouça como ficou o Salmos 23",
    duration: "3:25",
    audioSrc: "/audio/salmos-23.mp3",
  },
];

const MusicSection = () => {
  return (
    <section className="px-4 pb-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {musicData.map((music, index) => (
          <MusicCard key={index} {...music} />
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
