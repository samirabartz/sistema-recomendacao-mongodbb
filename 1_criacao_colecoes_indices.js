use ecommerce_recomendacao;

// Coleção products
db.createCollection("products");

db.products.createIndex({ categoria: 1, preco: -1 });
db.products.createIndex({ tags: 1 });
db.products.createIndex({ nome: "text", descricao: "text" });
db.products.createIndex({ avaliacao_media: -1 });

// Coleção users
db.createCollection("users");

db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ "preferencias.categorias_favoritas": 1 });
db.users.createIndex({ "recomendacoes.produto_id": 1 });

// Coleção purchases
db.createCollection("purchases");

db.purchases.createIndex({ utilizador_id: 1, data_compra: -1 });
db.purchases.createIndex({ "itens.produto_id": 1 });
db.purchases.createIndex({ status: 1 });
