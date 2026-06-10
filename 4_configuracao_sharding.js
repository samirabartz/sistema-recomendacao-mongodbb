sh.enableSharding("ecommerce_recomendacao");

sh.shardCollection(
  "ecommerce_recomendacao.purchases",
  {
    utilizador_id: "hashed"
  }
);

sh.shardCollection(
  "ecommerce_recomendacao.products",
  {
    categoria: 1,
    _id: 1
  }
);
