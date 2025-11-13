import * as readlineSync from 'readline-sync';
import { ProdutoController } from './src/Controller/ProdutoController';
import { Acessorio } from './src/model/Acessorio';

const controller = new ProdutoController();
let opcao: number;

do {
  console.log("\n--------------------------------------");
  console.log("          LOJA NICK ACESSÓRIOS         ");
  console.log("--------------------------------------");
  console.log("1 - Cadastrar novos produtos");
  console.log("2 - Listar todos os produtos");
  console.log("3 - Buscar produto por número de etiqueta");
  console.log("4 - Atualizar um produto da lista");
  console.log("5 - Excluir um produto da lista");
  console.log("0 - Sair");
  console.log("--------------------------------------");

  
  console.log("\nInforme a opção desejada: ");
  opcao = readlineSync.questionInt();

  switch (opcao) {
    case 1:
     console.log("\nDigite as informações do produto: ")
      console.log("\nQual a marca do produto produto? ")
      const marca = readlineSync.question()
      console.log("\nQual o número da etiqueta? ")
      const etiqueta = readlineSync.questionFloat()
      console.log("\nQual o nome do produto? ")
      const nome = readlineSync.question()
      console.log("\nQual o preço do produto? ")
      const preco = readlineSync.questionFloat()
      console.log("\nQuantidade do produto: ")
      const quant = readlineSync.questionFloat()
      console.log(`\nProduto cadastrado: ${nome}, R$${preco.toFixed(2)}, Quantidade: ${quant}`)
      const novoProduto = new Acessorio(marca, etiqueta, nome, preco, quant);
      controller.cadastrar(novoProduto)
      break

    case 2:
      controller.listarTodos();
      break;

    case 3:
      console.log("Digite o núemro da etiqueta para encontrar o produto: ")
      const Busca = readlineSync.questionFloat();
      const encontrado = controller.buscar(Busca);
      if (encontrado) encontrado.visualizar();
      else console.log("Produto não encontrado!");
      break;

    case 4:
      console.log("Número da etiqueta para atualizar o produto: ")
      const Atualiza = readlineSync.questionFloat();
      const Atualizacao = controller.buscar(Atualiza);
      if (Atualizacao) {
        console.log("\nQual a marca do produto produto? ")
      const marca = readlineSync.question()
      console.log("\nQual o número da etiqueta? ")
      const etiqueta = readlineSync.questionFloat()
      console.log("\nQual o nome do produto? ")
      const nome = readlineSync.question()
      console.log("\nQual o preço do produto? ")
      const preco = readlineSync.questionFloat()
      console.log("\nQuantidade do produto: ")
      const quant = readlineSync.questionFloat()
      console.log(`\nProduto cadastrado: ${nome}, R$${preco.toFixed(2)}, Quantidade: ${quant}`)
       const novoProduto = new Acessorio(marca, etiqueta, nome, preco, quant);
      controller.cadastrar(novoProduto)

      } else {
        console.log("Desculpe, o produto não foi encontrado!");
      }
      break;

    case 5:
      console.log("Digite o número da etiqueta para excluir: ")
      const Excluir = readlineSync.questionFloat();
      controller.deletar(Excluir);
      break;

    case 0:
      console.log("\nVocê clicou em sair! Até breve...");
      break;

    default:
      console.log("\nOpção inválida. Digite novamente!");
  }

} while (opcao !== 0);


