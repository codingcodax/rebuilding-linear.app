interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className='mx-auto max-w-[120rem]'>{children}</div>;
};

export default Container;
