import { FormEvent, useState } from "react";
import { CardMembro } from "../../CardMembro";

type especialidades =
  | "Desenvolvedor Front-End"
  | "Desenvolvedor Back-End"
  | "Administrador de Banco de Dados";

enum EnumEspecialidades {
  devfront = "Desenvolvedor Front-End",
  devback = "Desenvolvedor Back-End",
  dba = "Administrador de Banco de Dados",
}

type TItem = {
  name: string;
  email: string;
  especialidade: especialidades | "";
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
      especialidade: EnumEspecialidades.devfront,
      id: gerarId(),
    },
  ]);

  const [valores, setValores] = useState<TItem>({
    email: "",
    name: "",
    especialidade: "",
    id: "",
  });

  const createElement = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const itemCriado = { ...valores, id: gerarId() };
    const novoArray = [...itens, itemCriado];
    setItens(novoArray);
    limparElementos();
  };

  const limparElementos = () => {
    setValores({
      email: "",
      name: "",
      especialidade: "",
      id: "",
    });
  }

  const changeElement = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valorEnum = e.target.value as keyof typeof EnumEspecialidades;
    const especialidade = EnumEspecialidades[valorEnum];

    console.log(especialidade);
    

    setValores({
      ...valores,
      especialidade,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <h3 className="text-lg text-slate-600">Criar cadastro de TechPeople</h3>
      <form
        className="text-white flex flex-col items-start justify-start gap-8"
        onSubmit={createElement}
      >
        <div className="flex items-center justify-center gap-4">
          <label>Digite o nome</label>
          <input
            type="text"
            required
            placeholder="Nome"
            value={valores.name}
            className="p-1 rounded-lg bg-slate-700"
            onChange={(e) =>
              setValores({
                ...valores,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <label>Digite o e-mail</label>
          <input
            type="text"
            required
            placeholder="Email"
            className="p-1 rounded-lg bg-slate-700"
            value={valores.email}
            onChange={(e) =>
              setValores({
                ...valores,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <h4>Selecione o cargo</h4>
          <select
            className="p-1 rounded-lg bg-slate-700 w-full"
            onChange={changeElement}
            required
          >
            <option value=""></option>
            <option value="devfront">Desenvolvedor Front End</option>
            <option value="devback">Desenvolvedor Back End</option>
            <option value="dba">Administrador de Banco de Dados</option>
          </select>
        </div>
        <button
          type="submit"
          className="self-center bg-slate-500 p-2 rounded-lg text-black hover:bg-slate-300"
        >
          Criar
        </button>
      </form>
      <div className="flex flex-col items-center justify-center gap-8">
        <h4>Membros cadastrados</h4>
        <div className="flex flex-wrap gap-8 max-w-96">
          {itens?.map((item) => (
            <CardMembro
              email={item.email}
              funcao={item.especialidade!}
              nome={item.name}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crud;
