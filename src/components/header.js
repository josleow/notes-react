export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="headerRow">
        <div>
          <h1>Josephine's React Notes</h1>
          <p>Simple note-taking with React</p>
        </div>

        <button className="themeBtn" onClick={onToggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </header>
  );
}
