const Footer = () => {
  return (
    <footer className="py-8 px-4 text-center border-t border-border">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Bíblia em Música. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
