interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};

const Title = ({ children }: HeroElementProps) => (
  <h1 className="text-5xl">{children}</h1>
);

const Subtitle = ({ children }: HeroElementProps) => (
  <h2 className="text-lg">{children}</h2>
);

Hero.Title = Title;
Hero.Subtitle = Subtitle;

export default Hero;
