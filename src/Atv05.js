import FormQuiz from "./FormQuiz";
import FormTicket from "./FormTicket";
import Accordion from "./Accordion";
import ContactList from "./ContactList";
import Chat from "./Chat";
import Messenger from "./Messenger";
import { Link } from "react-router-dom";


export default function Atv05() {
  return (
    <>
        <FormQuiz />
        <FormTicket />
        <Accordion />
        <Messenger />

        <Link to="/" className="voltar-link">Voltar</Link> 
    </>
  );
}
