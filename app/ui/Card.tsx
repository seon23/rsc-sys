import { PropsWithChildren } from 'react';

type Props = {
  className: string;
};

export default function Card({ children }: PropsWithChildren<Props>) {
  return <div className=''>{children}</div>;
}
