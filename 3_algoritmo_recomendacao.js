function gerarRecomendacoes(userId) {

  const produtosComprados = db.purchases.aggregate([
    { $match: { utilizador_id: userId, status: "entregue" } },
    { $unwind: "$itens" },
    {
      $group: {
        _id: null,
        produtos: { $addToSet: "$itens.produto_id" }
      }
    }
  ]).toArray();

  const listaProdutosComprados =
    produtosComprados.length > 0
      ? produtosComprados[0].produtos
      : [];

  const recomendacoes = db.purchases.aggregate([
    {
      $match: {
        utilizador_id: { $ne: userId },
        "itens.produto_id": { $in: listaProdutosComprados }
      }
    },
    { $unwind: "$itens" },
    {
      $match: {
        "itens.produto_id": { $nin: listaProdutosComprados }
      }
    },
    {
      $group: {
        _id: "$itens.produto_id",
        frequencia: { $sum: 1 },
        utilizadores_distintos: {
          $addToSet: "$utilizador_id"
        }
      }
    },
    {
      $addFields: {
        num_utilizadores: {
          $size: "$utilizadores_distintos"
        }
      }
    },
    {
      $sort: {
        num_utilizadores: -1,
        frequencia: -1
      }
    },
    { $limit: 10 },
    {
      $project: {
        produto_id: "$_id",
        score: {
          $divide: [
            { $add: ["$frequencia", "$num_utilizadores"] },
            2
          ]
        },
        motivo:
          "utilizadores com perfil similar também compraram",
        _id: 0
      }
    }
  ]).toArray();

  db.users.updateOne(
    { _id: userId },
    {
      $set: {
        recomendacoes: recomendacoes.map(r => ({
          ...r,
          data_geracao: new Date()
        }))
      }
    }
  );

  return recomendacoes;
}

gerarRecomendacoes("user_001");
