import { smoothScrollTo } from "@/hooks/useSmoothScroll";

interface CTAButtonProps {
  text: string;
  href?: string;
  className?: string;
}

const CTAButton = ({ text, href = "#checkout", className = "" }: CTAButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const elementId = href.substring(1);
      smoothScrollTo(elementId, 1800);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`btn-cta block w-full max-w-2xl mx-auto text-sm md:text-base ${className}`}
    >
      {text}
    </a>
  );
};

export default CTAButton;
