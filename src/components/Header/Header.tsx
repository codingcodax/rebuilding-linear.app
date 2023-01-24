import Nav from './Nav';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-20 w-full'>
      <div className='before:pointer-events-none before:absolute before:-top-[1px] before:right-0 before:-bottom-1/2 before:left-0 before:h-[7.3rem] before:select-none before:backdrop-blur-md before:[mask-image:linear-gradient(to_bottom,#000_4.8rem,transparent)]' />

      <Nav />
    </header>
  );
};

export default Header;
