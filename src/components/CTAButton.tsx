interface CTAButtonProps {
  text: string;
  href?: string;
  className?: string;
}

const CTAButton = ({ text, href = "https://ambienteseguro.org.ua/c/f3351a172d", className = "" }: CTAButtonProps) => {
  return (
    <a
      href={href}
      className={`btn-cta block w-full max-w-2xl mx-auto text-sm md:text-base ${className}`}
    >
      {text}
    </a>
  );
};

export default CTAButton;
