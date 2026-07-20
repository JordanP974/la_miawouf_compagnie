import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  text?: string;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  textClassName?: string;
  children?: ReactNode;
}

function SectionHeader({
  eyebrow,
  title,
  text,
  className,
  eyebrowClassName,
  titleClassName,
  textClassName,
  children,
}: SectionHeaderProps) {
  return (
    <div className={['section-content', className].filter(Boolean).join(' ')}>
      <span className={['eyebrow', eyebrowClassName].filter(Boolean).join(' ')}>{eyebrow}</span>
      <h2 className={['section-title', titleClassName].filter(Boolean).join(' ')}>{title}</h2>
      {text && <p className={['section-text', textClassName].filter(Boolean).join(' ')}>{text}</p>}
      {children}
    </div>
  );
}

export default SectionHeader;
