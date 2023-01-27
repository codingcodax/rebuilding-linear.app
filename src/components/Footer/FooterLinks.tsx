import Link from 'next/link';

import { footerLinks } from '~/constants';
import { cn } from '~/utils';

const FooterLinks = () => {
  return (
    <>
      {footerLinks.map(({ title, links }) => (
        <div
          key={title}
          className={cn(
            'mt-10 min-w-[50%]',
            'lg:mt-0 lg:min-w-[min(180px,_100%)]'
          )}
        >
          <h3 className='mb-[1.4rem] font-medium'>{title}</h3>

          <ul className='space-y-[1.4rem]'>
            {links.map(({ name, href }) => (
              <li key={name}>
                <Link
                  className='link-transition-inverse leading-[2.4rem]'
                  href={href}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterLinks;
