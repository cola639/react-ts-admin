const Footer = () => {
  return (
    <div style={{ color: '#536DFE', fontWeight: 400, marginTop: '2.5rem' }}>
      © 2014-{new Date().getFullYear()}
      <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://flatlogic.com" rel="noopener noreferrer" target="_blank">
        Flatlogic
      </a>
      , LLC. All rights reserved.
    </div>
  )
}

export default Footer
