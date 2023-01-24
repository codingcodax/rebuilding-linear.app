import Link from 'next/link';

import Icons from '~/components/Icons';
const Logo = () => {
  return (
    <li>
      <Link className='flex items-center text-md font-medium' href='/'>
        <Icons.Logo className='mr-2 h-[1.8rem] w-[1.8rem]' /> Linear
      </Link>
    </li>
  );
};

export default Logo;
