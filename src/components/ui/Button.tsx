import { cva, type VariantProps } from 'class-variance-authority';

import { ButtonOrLink, type Props as ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-[border,_background-color,_color,_box-shadow,_opacity] duration-[120ms] ease-linear [text-shadow:#00000040_0px_3px_8px] hover:shadow-[#503fcd80_0px_1px_40px] hover:[text-shadow:#0000008f_0px_3px_12px]',
  {
    variants: {
      intent: {
        primary: 'bg-primary-gradient',
      },
      size: {
        small: 'px-3 h-7 text-xs',
        medium: 'px-4 h-8 text-sm',
        large: 'px-6 h-12 text-md',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

export const Button = ({ intent, size, ...props }: Props) => {
  return <ButtonOrLink className={buttonStyles({ intent, size })} {...props} />;
};
