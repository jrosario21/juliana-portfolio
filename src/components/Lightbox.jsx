import { useEffect, useRef } from 'react'
import './Lightbox.css'

export default function Lightbox({ src, alt, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const opener = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const handleKey = e => {
      if (e.key === 'Escape') onClose()
      // Only one focusable control inside, so keep focus on it
      if (e.key === 'Tab') { e.preventDefault(); closeRef.current?.focus() }
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
      if (opener && opener.focus) opener.focus()
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Enlarged image: ${alt}`} onClick={onClose}>
      <button ref={closeRef} className="lightbox-close" onClick={onClose} aria-label="Close enlarged image">
        <span aria-hidden="true">&#x2715;</span>
      </button>
      <img
        className="lightbox-img"
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
      />
      <div className="lightbox-hint" aria-hidden="true">Press Esc or click anywhere to close</div>
    </div>
  )
}
