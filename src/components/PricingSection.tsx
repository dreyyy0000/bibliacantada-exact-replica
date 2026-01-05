import DynamicDate from "./DynamicDate";

const PricingSection = () => {
  return (
    <section className="py-12 px-4" id="checkout">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-muted-foreground text-base mb-4">
          Você está recebendo quatro coleções completas da Bíblia em forma de
          música por menos do valor de um único projeto.
        </p>

        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=500&fit=crop"
            alt="Coleção Completa"
            className="w-48 md:w-64 mx-auto rounded-lg shadow-xl mb-6"
          />
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-2xl">
          <p className="text-muted-foreground text-sm uppercase tracking-wide mb-2">
            Valor promocional
          </p>
          <p className="text-foreground text-base mb-2">
            dos 4 projetos
          </p>
          <p className="text-muted-foreground text-sm mb-4">+ bônus separadamente:</p>
          
          <p className="text-muted-foreground text-2xl line-through mb-6">
            R$ 299,00
          </p>

          <div className="bg-gold/20 rounded-lg p-4 mb-6">
            <DynamicDate />
          </div>

          <p className="text-muted-foreground text-sm mb-2">por apenas:</p>
          
          <p className="text-5xl md:text-6xl font-bold gold-text mb-4">
            R$ 29,90
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-muted-foreground">
            <span>Pagamento único</span>
            <span>•</span>
            <span>7 dias de Garantia</span>
            <span>•</span>
            <span>Acesso vitalício</span>
          </div>

          <a
            href="https://pay.kiwify.com.br/eH8zUm0"
            className="btn-cta block w-full text-lg animate-pulse-glow"
          >
            Eu quero agora
          </a>
        </div>

        <p className="text-muted-foreground text-sm mt-6 max-w-md mx-auto">
          O que você pagaria em um único livro ou curso devocional, agora te dá
          acesso a toda a Bíblia cantada, de forma organizada, fiel e
          inspiradora!
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
