const app = require("../app.js");

app.put("/update/:dst", async (req, res) => {
  const dst = req.params.dst;
  const novaEmpresa = 10;

  try {
    await knex("cdr")
      .where("dst", dst)
      .andWhereNull("empresa")
      .update({ empresa: novaEmpresa });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar registros" });
  }
});

module.exports = app;
