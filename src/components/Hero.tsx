interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};

const Title = ({ children }: HeroElementProps) => <h1>{children}</h1>;

const Subtitle = ({ children }: HeroElementProps) => <h2>{children}</h2>;

Hero.Title = Title;
Hero.Subtitle = Subtitle;

export default Hero;
