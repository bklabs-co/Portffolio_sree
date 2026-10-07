import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

// Native dialog supplies background inertness, Escape and focus containment.
export default function Modal({ children, onClose, labelId, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const dialog = ref.current
    const opener = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.showModal()
    return () => {
      dialog.close()
      document.body.style.overflow = overflow
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true })
    }
  }, [])
  return <dialog ref={ref} className={`modal ${className}`} aria-labelledby={labelId}
    onCancel={event => { event.preventDefault(); onClose() }}
    onClick={event => { if (event.target === event.currentTarget) onClose() }}>
    <div className="modal-content">
      <button type="button" className="icon-button modal-close" aria-label="Close preview" onClick={onClose}><X size={22} /></button>
      {children}
    </div>
  </dialog>
}
