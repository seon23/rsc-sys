import { ReactNode } from "react";

export default function MyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className='py-12'>{children}</div>;
}
