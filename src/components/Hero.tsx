interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return <div className='text-center'>{children}</div>;
};

const Title = ({ children }: HeroElementProps) => (
  <h1 className='my-6 text-lg font-medium -tracking-[0.16rem] backdrop-blur-md md:text-5xl'>
    {children}
  </h1>
);

const Subtitle = ({ children }: HeroElementProps) => (
  <h2 className='mb-12 text-lg text-grey'>{children}</h2>
);

Hero.Title = Title;
Hero.Subtitle = Subtitle;

export default Hero;
