import Link from 'next/link';

import Icons from '../Icons';
import Logo from '../Icons/Logo';

import FooterLinks from './FooterLinks';

function Footer() {
  return (
    <footer className='border-t border-white/[0.08] py-[5.8rem] text-sm'>
      <div className='container flex flex-wrap px-8 lg:flex-row'>
        <div className='flex w-full flex-row items-center justify-between lg:mr-auto lg:flex-col lg:items-start'>
          <Link className='link-transition-inverse flex items-center' href='/'>
            <Logo className='mr-2 h-[1.8rem] w-[1.8rem] text-white' /> Linear -
            Designed Worldwide
          </Link>

          <div className='flex space-x-3 lg:space-x-6'>
            <Link className='link-transition-inverse' href='/'>
              <Icons.Twitter className='h-[1.8rem] w-[1.8rem]' />
            </Link>
            <Link className='link-transition-inverse' href='/'>
              <Icons.GitHub className='h-[1.8rem] w-[1.8rem]' />
            </Link>
            <Link className='link-transition-inverse' href='/'>
              <Icons.Slack className='h-[1.8rem] w-[1.8rem]' />
            </Link>
          </div>
        </div>

        <FooterLinks />
      </div>
    </footer>
  );
}

export default Footer;
