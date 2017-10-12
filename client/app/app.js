// cria a instância do controller
let controller = new ProdutoController();

// associa o evento de submissão do formulário à chamada do método "adiciona"
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));