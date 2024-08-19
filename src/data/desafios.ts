import { v4 as uuidv4 } from "uuid"
import { TDesafio } from "../types/TDesafio"

export const desafios: TDesafio[] = [
  {
    id: uuidv4(),
    nome: "Conversão de Temperatura (C° -> °F)",
    slug: "conversao-temperatura",
    enunciado: "Crie um código que converta graus Celsius para Fahrenheit e vice-versa.",
    resolucao: "ConversaoTemperatura",
  },
  {
    id: uuidv4(),
    nome: "Calculadora IMC",
    slug: "calculadora-imc",
    enunciado: "Crie um código que faça o cálculo do IMC de uma pessoa.",
    resolucao: "CalculoIMC",
  },
  {
    id: uuidv4(),
    nome: "Área e Perímetros de figuras planas",
    slug: "area-perimetro-planas",
    enunciado: "Crie um código que o usuário seleciona a figura plana e receba os valores das dimensões para o cálculo do perímetro e área.",
    resolucao: "FigurasPlanas",
  }
]