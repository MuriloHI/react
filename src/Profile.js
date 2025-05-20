import './Profile.css';

export default function Profile() {
  const name = "Clarice Lispector";
  const avatar = "https://cdn.pensador.com/img/authors/cl/ar/clarice-lispector-2-l.jpg";
  const theme = {
    backgroundColor: "#f4f0ea",
    color: "#3e2c29",
    padding: "20px",
    borderRadius: "12px",
    fontFamily: "'Georgia', serif",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
  };

  function Avatar({ person = { name: "Clarice" }, size = 150 }) {
    return (
      <img
        src={avatar}
        alt={person.name}
        width={size}
        className="clarice-avatar"
      />
    );
  }

  function Card({ children }) {
    return <div className="clarice-card">{children}</div>;
  }

  const isOnline = false;
  const showWarning = true;

  const people = [
    { id: 1, name: "Clarice", profession: "Escritora" },
    { id: 2, name: "Virginia Woolf", profession: "Escritora" }
  ];

  const writers = people.filter(p => p.profession === "Escritora");

  const listItems = writers.map(p => (
    <li key={p.id}>{p.name} - {p.profession}</li>
  ));

  function Obra({ livros }) {
    return <p>{livros} obras publicadas</p>;
  }

  return (
    <div style={theme}>
      <h1>{name}</h1>
      <Avatar person={{ name }} />
      <Card>
        <p>"Renasço da própria destruição."</p>
      </Card>
      
      {isOnline ? <p>🟢 Online</p> : <p>🔴 Offline</p>}
      {showWarning && <p className="atencao">Atenção: conteúdo sensível.</p>}
      <ul>{listItems}</ul>
      <Obra livros={29} />
    </div>
  );
}
