function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Group 20 logo" className="logo-img" />
        <span className="logo-text">Planetary Science Data</span>
      </div>

      <nav>
        <a href="#hero">Home</a>
        <a href="#planets">Planets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
