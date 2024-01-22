import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

const Card = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border bg-card text-card-foreground shadow-md overflow-hidden',
        className
      )}
      {...props}
    />
  );
});

const CardInfo = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function CardInfo({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-2.5 p-6', className)}
      {...props}
    />
  );
});

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(function CardTitle({ className, ...props }, ref) {
  return (
    <h3
      ref={ref}
      className={cn(
        'text-xl font-semibold leading-none tracking-wide',
        className
      )}
      {...props}
    />
  );
});

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(function CardDescription({ className, ...props }, ref) {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
});

// 예: <CardConent><Image/></CardConent>
const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function CardContent({ className, ...props }, ref) {
  return <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />;
});

export { Card, CardInfo, CardTitle, CardDescription, CardContent };
