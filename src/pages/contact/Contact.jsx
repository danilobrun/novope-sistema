import { Plus, Undo2 } from "lucide-react";
import "./Contact.css";
import StatsOverview from "../../components/statsOverview/StatsOverview";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="flex">
      <div className="contact-header">
        <h2>Contatos</h2>
        <div className="div-icon-back">
          <Undo2 strokeWidth={1.5} />
        </div>
      </div>
      <StatsOverview />
      <div className="contact-list">
        <div className="contact-list-btns">
          <Link to={'/register-contact'}>
            <button>
              <Plus strokeWidth={1.5} />
              <span>Novo Contato</span>
            </button>
          </Link>
          <button>
            <Plus strokeWidth={1.5} />
            <span>Importar Contatos</span>
          </button>
        </div>
        <div className="contact-input">
          <label>procurar</label>
          <input type="text" placeholder="localizar" />
        </div>
        <table className="contact-table">
          <thead>
            <tr>
              <th scope="col" align="left">Sina.</th>
              <th scope="col" align="left">Cadastro</th>
              <th scope="col" align="left">Nome</th>
              <th scope="col" align="left">Apelido</th>
              <th scope="col" align="left">Grupos</th>
              <th scope="col" align="left">Bairro</th>
              <th scope="col" align="left">Idade</th>
              <th scope="col" align="left">Indicações</th>
              <th scope="col" align="right">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="center"><div className="sina"></div></td>
              <td>12/08/2024</td>
              <td> <div className="circle-name"></div>danilo brun</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td align="center">0</td>
              <td align="right">teste</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Contact;
