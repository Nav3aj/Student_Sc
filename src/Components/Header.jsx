function Header({ title }) {
  return (
    <header className="header">
      <p className="header-sub">ACADEMIC TERMINAL V2.0</p>
      <h1 className="header-title">
        STUDENT <span>{title.split(" ")[1].toUpperCase()}</span>
      </h1>
      <div className="header-line"></div>
    </header>
  );
}

export default Header;