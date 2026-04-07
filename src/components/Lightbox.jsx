import { useEffect } from 'react'
import './Lightbox.css'

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&#x2715;</button>
      <img
        className="lightbox-img"
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
      />
      <div className="lightbox-hint">Press Esc or click anywhere to close</div>
    </div>
  )
}
