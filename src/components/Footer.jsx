export default function Footer() {
  return (
    <footer>
      <p>© 2026 Juliana Rosario. All rights reserved.</p>
      <img
        src="/logo-monogram.png"
        alt="JR"
        style={{ height: '28px', width: 'auto', opacity: 0.4 }}
        onError={e => e.target.style.display = 'none'}
      />
      <a href="mailto:julianamrosario@gmail.com">julianamrosario@gmail.com</a>
    </footer>
  )
}
