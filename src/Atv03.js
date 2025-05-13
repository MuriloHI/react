import Profile from "./Profile";
import { Link } from "react-router-dom";
import "./Profile.css";

export default function Atv03() {
  return (
    <section className="section_completo">
      <h1 className="titulo">Atividade 3</h1>
      <h2 className="subtitulo">UMA GRANDE ESCRITORA: Clarice Lispector</h2>
      <section className="section_galeria">
        <Profile />
        <Profile />
        <Profile />
      </section>
      <Link to="/" className="voltar-link">Voltar</Link>
    </section>
  );
}
