db.products.insertMany([
  {
    _id: "prod_001",
    nome: "Ténis Running X200",
    descricao: "Ténis para corrida com amortecimento avançado",
    preco: 89.99,
    categoria: "Calçado Desportivo",
    tags: ["corrida", "desporto", "conforto"],
    stock: 340,
    avaliacao_media: 4.7,
    especificacoes: {
      tamanhos: ["38", "39", "40", "41", "42", "43"],
      cores: ["preto", "branco", "azul"]
    }
  },
  {
    _id: "prod_002",
    nome: "Camisola Técnica Dry-Fit",
    descricao: "Camisola de treino com tecnologia de absorção de humidade",
    preco: 34.99,
    categoria: "Vestuário",
    tags: ["treino", "desporto", "respirável"],
    stock: 520,
    avaliacao_media: 4.5,
    especificacoes: {
      tamanhos: ["XS", "S", "M", "L", "XL"],
      cores: ["cinzento", "preto", "azul-marinho"]
    }
  }
]);

db.users.insertMany([
  {
    _id: "user_001",
    nome: "Maria Silva",
    email: "maria.silva@email.com",
    data_registo: "2023-06-01",
    preferencias: {
      categorias_favoritas: ["Calçado Desportivo", "Vestuário"],
      faixa_preco_max: 150
    },
    carrinho: [],
    recomendacoes: []
  },
  {
    _id: "user_002",
    nome: "João Costa",
    email: "joao.costa@email.com",
    data_registo: "2023-09-15",
    preferencias: {
      categorias_favoritas: ["Eletrónicos", "Calçado Desportivo"],
      faixa_preco_max: 200
    },
    carrinho: [],
    recomendacoes: []
  }
]);

db.purchases.insertMany([
  {
    _id: "order_001",
    utilizador_id: "user_001",
    data_compra: new Date("2024-02-20"),
    status: "entregue",
    itens: [
      {
        produto_id: "prod_001",
        nome_produto: "Ténis Running X200",
        quantidade: 1,
        preco_unitario: 89.99
      }
    ],
    total: 89.99
  },
  {
    _id: "order_002",
    utilizador_id: "user_002",
    data_compra: new Date("2024-03-05"),
    status: "entregue",
    itens: [
      {
        produto_id: "prod_001",
        nome_produto: "Ténis Running X200",
        quantidade: 1,
        preco_unitario: 89.99
      },
      {
        produto_id: "prod_002",
        nome_produto: "Camisola Técnica Dry-Fit",
        quantidade: 2,
        preco_unitario: 34.99
      }
    ],
    total: 159.97
  }
]);
