import { desafios } from "../../data/desafios"
import { SobreDesafio } from "../../components/SobreDesafio";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl text-center my-4">DESAFIO PARA OS DEVS!</h1>
      <article className="flex flex-col gap-4">
        <div>
          <h4 className="text-slate-500">PARA QUE SERVE?</h4>
          <p>Esse site serve para ajudar programadores iniciantes e até mesmo experientes que queiram revisar conteúdos base</p>
        </div>
        <div>
          <h4 className="text-slate-500">QUAL A PROPOSTA?</h4>
          <p>A proposta é verificar os desafios e tentar resolver eles. Caso não consiga, tem uma parte de "DICA" na página do desafio.</p>
        </div>
        <p>BOA SORTE!</p>
      </article>
      <div className="flex flex-col items-start justify-start gap-4">
      <h2>Desafios</h2>
      {
        desafios.map(desafio => (
          <SobreDesafio descricao={desafio.enunciado} slug={desafio.slug} nome={desafio.nome} key={desafio.id}/>)
        )
      }
      </div>
    </div>
  )
}