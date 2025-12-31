import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";
import testimonial7 from "@/assets/testimonial-7.jpg";

const testimonials = [
  { image: testimonial1, alt: "Depoimento @salao.canil.happy.dog" },
  { image: testimonial2, alt: "Depoimento Ivana Jaber" },
  { image: testimonial3, alt: "Depoimento Rogério Panassio" },
  { image: testimonial4, alt: "Depoimento @mariangela_pinheiro24" },
  { image: testimonial5, alt: "Depoimento @kitalbolosepaes" },
  { image: testimonial6, alt: "Depoimento @shirleipessoa" },
  { image: testimonial7, alt: "Depoimento" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="section-heading mb-8">
        O que estão falando sobre a Bíblia em Música
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
