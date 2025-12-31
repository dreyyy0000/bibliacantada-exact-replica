const GuaranteeSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-card rounded-2xl p-8">
        <div className="flex-shrink-0 text-center">
          <div className="w-28 h-28 rounded-full border-4 border-gold flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-gold">7</span>
            <span className="text-xs text-foreground">dias de</span>
            <span className="text-sm font-semibold text-foreground">garantia</span>
          </div>
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
