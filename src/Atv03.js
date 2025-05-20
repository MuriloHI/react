import Profile from "./Profile";
import Avatar from "./Avatar";
import TodoList from "./ToDoList";
import PackingList from "./PackingList";
import TeaSet from "./TeaSet";
import TeaGathering from "./TeaGathering";
import { Link } from "react-router-dom";
import "./Profile.css";

export default function Atv03() {
  return (
    <section className="section_completo">
      <h1 className="titulo">Atividade 3</h1>
      <h2 className="subtitulo">Componentes</h2>
      <section className="section_galeria">
        <Profile />
        <Profile />
        <Profile />
        <Avatar />
        <getImageUrl />
        <TodoList />
        <PackingList />
        <TeaSet />
        <TeaGathering />
      </section>
      <Link to="/" className="voltar-link">Voltar</Link>
    </section>
  );
}
