import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

/**
 * Lightbox acessível: Esc fecha, setas navegam, Tab fica preso no diálogo, foco volta ao elemento de origem.
 * Props: images [{src, alt}], index (null = fechado), onChange(novoIndex|null)
 */
export default function Lightbox({ images, index, onChange }) {
  const dialogRef = useRef(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector('button')?.focus();
    return () => {
      document.body.style.overflow = '';
      previous?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onChange(null);
      else if (e.key === 'ArrowRight') onChange((index + 1) % images.length);
      else if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length);
      else if (e.key === 'Tab') {
        const f = dialogRef.current.querySelectorAll('button');
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, index, images.length, onChange]);

  if (!open) return null;
  const current = images[index];
  const many = images.length > 1;
  const nav = 'absolute top-1/2 -translate-y-1/2 rounded-full bg-sand/15 p-3 text-sand hover:bg-sand/30';

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria de fotos, imagem ${index + 1} de ${images.length}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-dark/95 p-4"
      onClick={(e) => e.target === e.currentTarget && onChange(null)}
    >
      <button type="button" onClick={() => onChange(null)} aria-label="Fechar galeria" className="absolute right-4 top-4 rounded-full bg-sand/15 p-3 text-sand hover:bg-sand/30">
        <X size={24} aria-hidden="true" />
      </button>
      {many && (
        <button type="button" onClick={() => onChange((index - 1 + images.length) % images.length)} aria-label="Foto anterior" className={`${nav} left-3`}>
          <ChevronLeft size={28} aria-hidden="true" />
        </button>
      )}
      <figure className="max-h-full max-w-5xl">
        <img src={current.src} alt={current.alt} className="max-h-[80vh] w-auto rounded-xl object-contain" />
        <figcaption className="mt-3 text-center text-sm text-sand/85">
          {current.alt} ({index + 1} de {images.length})
        </figcaption>
      </figure>
      {many && (
        <button type="button" onClick={() => onChange((index + 1) % images.length)} aria-label="Próxima foto" className={`${nav} right-3`}>
          <ChevronRight size={28} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
