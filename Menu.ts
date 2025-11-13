import * as readlineSync from 'readline-sync'

let opcao: number;

do {
  console.log("\n--------------------------------------")
  console.log("          LOJA NICK ACESSÓRIOS         ")
  console.log("----------------------------------------")
  console.log("\n1 - Cadastrar novos produtos")
  console.log("2 - Listar todos os produtos")
  console.log("3 - Buscar produto por número de etiqueta")
  console.log("4 - Atualizar um produto da lista")
  console.log("5 - Excluir um produto da lista")
  console.log("0 - Sair")
  console.log("--------------------------------------")

  console.log("\nInforme a opção desejada: ")
  opcao = readlineSync.questionInt()

  switch (opcao) {
    case 1:
      console.log("\nDigite as informações do produto: ")
      console.log("\nQual o nome do produto? ")
      const nome = readlineSync.question()
      console.log("\nQual o preço do produto? ")
      const preco = readlineSync.questionFloat()
      console.log("\nQuantidade do produto: ")
      const quant = readlineSync.questionFloat()
      console.log(`\nProduto cadastrado: ${nome}, R$${preco.toFixed(2)}, Quantidade: ${quant}`)
      break

    case 2:
      console.log("\nProdutos em estoque: ")
      break

    case 3:
      console.log("\nDigite o número da etiqueta: ")
      const num = readlineSync.questionFloat()
      console.log(`Produto com a etiqueta ${num} `)
      break

    case 4:
      console.log("\nAtualização do produto!")
      console.log("\nDigite o número da etiqueta para cadastrar o produto: ")
      const novo = readlineSync.questionFloat()
      console.log(`\nProduto ${novo} atualizado com sucesso!`)
      break

    case 5:
      console.log("\nExclusão do produto!")
      console.log("\nDigite o número da etiqueta do produto que você quer excluir:")
      const exclusao = readlineSync.questionFloat()
      console.log(`\nProduto ${exclusao} removido com sucesso!`)
      break

    case 0:
      console.log("\nVocê clicou em sair! Até breve...")
      break

    default:
      console.log("\nOpção inválida. Digite novamente!")
  }

} while (opcao !== 0)
