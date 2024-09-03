import { FormEvent, useState } from "react";

type especialidades = "dev-front" | "dev-backend" | "dba"

enum EnumEspecialidades {
  DesenvolvedorFrontEnd = "dev-front",
  DesenvolvedorBackEnd = "dev-backend",
  AdminBancoDados = "dba",
}

type TItem = {
  name: string;
  email: string;
  especialidade: especialidades | null;
  id: string;
};

const Crud = () => {
  const gerarId = () => {
    return String(Math.random() * 10);
  };

  const [itens, setItens] = useState<TItem[]>([
    {
      name: "Lucas",
      email: "lucas@gmail.com",
      especialidade: EnumEspecialidades.DesenvolvedorFrontEnd,
      id: gerarId(),
    },
  ]);

  const [valores, setValores] = useState<TItem>({
    email: "",
    name: "",
    especialidade: null,
    id: "",
  });

  const createElement = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const itemCriado = { ...valores, id: gerarId() };
    const novoArray = [...itens, itemCriado];
    setItens(novoArray);
    limpaCampos();
  };

  const limpaCampos = () => {
    setValores({
      email: "",
      name: "",
      especialidade: null,
      id: "",
    });
  };
  return (
    <div>
      <h3 className="text-lg text-slate-600">Criar cadastro de TechPeople</h3>
      <form className="text-white flex flex-col items-start justify-start gap-8" onSubmit={createElement}>
        <div>
          <label>Digite o nome</label>
          <input
            type="text"
            required
            placeholder="Nome"
            className="p-1 rounded-lg bg-slate-700"
            onChange={(e) =>
              setValores({
                ...valores,
                name: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Digite o e-mail</label>
          <input
            type="text"
            required
            placeholder="Email"
            className="p-1 rounded-lg bg-slate-700"
            onChange={(e) =>
              setValores({
                ...valores,
                email: e.target.value,
              })
            }
          />
        </div>
        <select 
          className="p-1 rounded-lg bg-slate-700"
          onChange={e => setValores({
            ...valores,
            especialidade: EnumEspecialidades.AdminBancoDados
          })}
        >
          <option value="0">dev-front</option>
          <option value="1">dev-backend</option>
          <option value="2">dba</option>
        </select>
        <button type="submit" className="self-center bg-slate-500 p-2 rounded-lg text-black">Criar</button>
      </form>
      {itens?.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <h5 className="text-red-400">{item.especialidade}</h5>
        </div>
      ))}
    </div>
  );
};

export default Crud;
