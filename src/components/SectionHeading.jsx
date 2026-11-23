import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, text, center = false, className = '' }) {
  return (
    <Reveal className={`mb-10 max-w-2xl md:mb-14 ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-h2">{title}</h2>
      {text && <p className="mt-4 text-lead text-muted [.on-dark_&]:text-sand/80">{text}</p>}
    </Reveal>
  );
}
