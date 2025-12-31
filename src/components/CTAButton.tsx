interface CTAButtonProps {
  text: string;
  href?: string;
  className?: string;
}

const CTAButton = ({ text, href = "#checkout", className = "" }: CTAButtonProps) => {
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
