import { Undo2 } from "lucide-react";
import "./RegisterContact.css";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextArea,
} from "semantic-ui-react";
import InputMask from "react-input-mask";
import { useEffect, useState } from "react";

const RegisterContact = () => {
  const generos = [
    { key: "m", text: "Masculino", value: "masculino" },
    { key: "f", text: "Feminino", value: "feminino" },
  ];

  const options = [
    { key: "s", text: "Sim", value: "sim" },
    { key: "n", text: "Não", value: "não" },
  ];

  const [cep, setCep] = useState("");
  const [uf, setUf] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");

  useEffect(() => {
    if (cep.length < 8) {
      setUf("");
      setLogradouro("");
      setCidade("");
      setBairro("");
    }
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUf(data.uf);
          setBairro(data.bairro);
          setCidade(data.localidade);
          setLogradouro(data.logradouro);
        });
    }
  }, [cep]);

  const [grupos, setGrupos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputValue.trim() !== "" && !grupos.includes(inputValue.trim())) {
        setGrupos([...grupos, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const removeGrupo = (grupoToRemove) => {
    setGrupos(grupos.filter((grupo) => grupo !== grupoToRemove));
  };

  return (
    <section className="flex register-contact-container">
      <div className="contact-header">
        <h2>Cadastrar Contato</h2>
        <div className="div-icon-back">
          <Link to={"/contact"}>
            <Undo2 strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      <div className="register-contact-form">
        <div className="register-contact-form-header">
          <h2>Dados Contato</h2>
        </div>
        <div className="register-contact-form-body">
          <Form>
            <FormGroup widths="equal">
              <FormInput required fluid label="NOME" width={16} />
              <FormInput fluid label="APELIDO" width={10} />
              <FormInput fluid label="NASCIMENTO" width={8}>
                <InputMask mask="99/99/9999" placeholder="DD/MM/AAAA" />
              </FormInput>
            </FormGroup>
            <FormGroup widths="equal">
              <FormSelect
                fluid
                label="SEXO"
                options={generos}
                placeholder="Sexo"
              />
              <FormInput required fluid label="WHATSAPP">
                <InputMask
                  mask="(99) 99999-9999"
                  placeholder="(99) 99999-9999"
                />
              </FormInput>
              <FormInput fluid label="TELEFONE">
                <InputMask
                  mask="(99) 99999-9999"
                  placeholder="(99) 99999-9999"
                />
              </FormInput>
              <FormInput fluid label="EMAIL" type="" />
            </FormGroup>
            <FormGroup widths="equal">
              <FormSelect fluid label="LIDERANÇA" options={options} width={4} />
              <FormInput label="INDICADO POR" fluid />
            </FormGroup>
            <FormGroup widths="equal">
              <FormInput label="LOCAL DE VOTAÇÃO" fluid />
              <FormInput label="ZONA ELEITORAL" fluid width={8} />
            </FormGroup>

            <div className="register-address">
              <div className="register-address-header">
                <h3>Endereço</h3>
              </div>
              <div className="register-address-inputs">
                <Form>
                  <FormGroup widths="equal">
                    <FormInput
                      label="CEP"
                      fluid
                      width={6}
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                    />
                    <FormInput
                      label="LOGRADOURO"
                      fluid
                      value={logradouro}
                      onChange={(e) => setLogradouro(e.target.value)}
                    />
                    <FormInput label="N°" fluid width={4} />
                  </FormGroup>
                  <FormGroup widths="equal">
                    <FormInput
                      label="BAIRRO"
                      fluid
                      value={bairro}
                      onChange={(e) => setBairro(e.target.value)}
                    />
                    <FormInput
                      label="CIDADE"
                      fluid
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                    />
                    <FormInput
                      label="UF"
                      fluid
                      width={6}
                      value={uf}
                      onChange={(e) => setUf(e.target.value)}
                    />
                  </FormGroup>
                  <FormInput label="COMPLEMENTO" fluid />
                </Form>
              </div>
            </div>

            <div className="register-group">
              <div className="register-group-header">
                <h3>Grupos</h3>
              </div>
              <p>
                Este campo é utilizado para agrupar seus contatos de acordo com
                diferentes categorias, tais como FUTEBOL, IGREJA, EVENTO X,
                entre outras. Você pode adicionar mais de um grupo, se
                necessário.
              </p>
              <div className="register-group-input">
                <div>
                  <label style={{ fontWeight: "bold" }}>GRUPO</label>
                  <FormInput
                    style={{ width: "400px", marginTop: "5px" }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                </div>

                {grupos.map((grupo, index) => (
                  <div key={index} className="groups">
                    <span>{grupo}</span>
                    <button onClick={() => removeGrupo(grupo)}>X</button>
                  </div>
                ))}
              </div>
            </div>

            <FormTextArea
              placeholder="OBSERVAÇÂO"
              style={{ padding: "5px 10px", width: "100%", minHeight: 200 }}
              r
            />
            <div className="register-contact-footer">
              <i>* Campos de preenchimento obrigatório.</i>
              <button type="submit">Salvar Contato</button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default RegisterContact;
