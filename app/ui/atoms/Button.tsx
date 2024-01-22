import { PropsWithChildren } from 'react';

type Props = {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  className?: string;
};

export default function Button({
  type,
  onClick,
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
