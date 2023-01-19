import type { ComponentProps } from 'react';
import Link from 'next/link';

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<typeof Link>;

export type Props = ButtonOrLinkProps;

export const ButtonOrLink = ({ href, ...props }: Props) => {
  const isLink = typeof href !== 'undefined';
  const ButtonOrLink = isLink ? 'a' : 'button';

  const content = <ButtonOrLink {...props} />;

  if (isLink) return <Link href={href} {...props} />;

  return content;
};

export default ButtonOrLink;
