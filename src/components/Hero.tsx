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
  <h1 className="my-6 text-5xl">{children}</h1>
);

const Subtitle = ({ children }: HeroElementProps) => (
  <h2 className="mb-11 text-lg">{children}</h2>
);

Hero.Title = Title;
Hero.Subtitle = Subtitle;

export default Hero;
