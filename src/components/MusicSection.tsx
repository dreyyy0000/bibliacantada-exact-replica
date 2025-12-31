import MusicCard from "./MusicCard";

const musicData = [
  {
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=400&fit=crop",
    title: "Música 29 - O Sermão do Monte – parte 1 (Bem-aventuranças) - Músicas dos Evangelhos",
    duration: "3:36",
  },
  {
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=400&fit=crop",
    title: "Capítulo 7 – A Luta entre a Carne e o Espírito – Carta de Paulo aos Romanos",
    duration: "4:17",
  },
  {
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",
    title: "Provérbios 1 - A Voz da Sabedoria",
    duration: "3:54",
  },
  {
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop",
    title: "Ouça como ficou o Salmos 23",
    duration: "3:25",
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
