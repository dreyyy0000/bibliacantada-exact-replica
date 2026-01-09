import garantia7Dias from "@/assets/garantia-7-dias.png";

const GuaranteeSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-card rounded-2xl p-8">
        <div className="flex-shrink-0">
          <img 
            src={garantia7Dias} 
            alt="Garantia de 7 dias" 
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-foreground mb-3">
            Garantia Incondicional
          </h3>
          <p className="text-muted-foreground">
            Você tem 7 dias para testar. Se não sentir sua fé fortalecida,
            devolvemos 100% do seu investimento!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
