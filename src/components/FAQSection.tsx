import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "1. O que é a Bíblia em Música?",
    answer:
      "A Bíblia em Música é uma coleção completa que transforma os textos da Bíblia em canções devocionais. São 351 músicas inspiradas nos Salmos, Provérbios, Cartas de Paulo e Evangelhos — compostas com base nas Escrituras, para te ajudar a memorizar, meditar e viver a Palavra de Deus de um jeito novo: cantando.",
  },
  {
    question: "2. Como vou receber o acesso?",
    answer:
      "Após a confirmação do pagamento, você receberá um e-mail com os dados de acesso à plataforma onde estão todas as músicas e materiais bônus. O acesso é imediato e vitalício.",
  },
  {
    question: "3. Posso ouvir offline?",
    answer:
      "Sim! Todas as músicas estão disponíveis para download em MP3. Você pode baixar e ouvir onde e quando quiser, sem precisar de internet.",
  },
  {
    question: "4. Funciona no celular?",
    answer:
      "Sim! Você pode acessar pelo celular, tablet ou computador. A plataforma é 100% responsiva e as músicas podem ser baixadas para qualquer dispositivo.",
  },
  {
    question: "5. Como funciona a garantia?",
    answer:
      "Você tem 7 dias para testar todo o conteúdo. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso e devolvemos 100% do seu investimento.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 px-4">
      <p className="text-center text-muted-foreground text-sm uppercase tracking-wide mb-2">
        FAQ
      </p>
      <h2 className="section-heading mb-8">
        Perguntas <span className="gold-text">Frequentes</span>
      </h2>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-lg px-4 border-none"
            >
              <AccordionTrigger className="text-foreground text-left text-base hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
