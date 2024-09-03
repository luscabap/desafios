import { 
  ConversaoTemperatura, 
  CalculoIMC,
  FigurasPlanas,
  FiltroProdutos,
  Crud
} from "./Resolucoes/index"

export const RecordResolucoes: Record<string, React.ReactNode> = {
  ConversaoTemperatura: <ConversaoTemperatura />,
  CalculoIMC: <CalculoIMC />,
  FigurasPlanas: <FigurasPlanas />,
  FiltroProdutos: <FiltroProdutos />,
  CRUD: <Crud />
}