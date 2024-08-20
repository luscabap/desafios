import { v4 as uuidv4 } from "uuid"
import { TDesafio } from "../types/TDesafio"

export const desafios: TDesafio[] = [
  {
    id: uuidv4(),
    nome: "Conversão de Temperatura (C° -> °F)",
    slug: "conversao-temperatura",
    enunciado: "Crie um código que converta graus Celsius para Fahrenheit e vice-versa.",
    resolucao: "ConversaoTemperatura",
    dicas: [
      "Fórmulas: F = (C * 9/5) + 32 e C = (F - 32) * 5/9",
      "Salve os valores digitados pelo usuário em um state."
    ]
  },
  {
    id: uuidv4(),
    nome: "Calculadora IMC",
    slug: "calculadora-imc",
    enunciado: "Crie um código que faça o cálculo do IMC de uma pessoa.",
    resolucao: "CalculoIMC",
    dicas: [
      "Fórmula: IMC = peso + altura²",
      "Padronize o valor do input peso e altura (kg e cm, por exemplo).",
      "Salve os valores digitados pelo usuário em um state."
    ]
  },
  {
    id: uuidv4(),
    nome: "Área e Perímetros de figuras planas",
    slug: "area-perimetro-planas",
    enunciado: "Crie um código que o usuário seleciona a figura plana e receba os valores das dimensões para o cálculo do perímetro e área.",
    resolucao: "FigurasPlanas",
    dicas: [
      "Salve os valores digitados pelo usuário em um state."
    ]
  },
  {
    id: uuidv4(),
    nome: "Filtrar produtos de uma loja",
    slug: "filtro-produtos",
    enunciado: "Crie opções de filtrar produtos por preço, quantidade, desconto, categoria crescente e decrescente.",
    resolucao: "FiltroProdutos",
    dicas: [
      "Faça a requisição dos produtos no endpoint: https://dummyjson.com/products"
    ]
  }
]