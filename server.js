app.post('/deletarCliente', (req, res) => {
    const { nome } = req.body;

const sql = "DELETE FROM usuarios WHERE nome = ?";

    db.query(sql, [nome], (err, result) => {
        if (err) throw err;
        if (result.affectecRows > 0) {
            res.send('Usuário ${nome} deletado com sucesso!');
        } else {
            res.send('Nenhum usuário encontrado com o nome ${nome}.');
        }

        })});

        app.listen(3009, () => {
        console.log("Servidor rodando em http://localhost:3009");
        });