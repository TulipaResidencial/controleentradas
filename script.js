document.getElementById('formVisitante').addEventListener('submit', function (e) {
  e.preventDefault();

  const dados = {
    nome: this.nome.value,
    cpf: this.cpf.value,
    placa: this.placa.value,
    modelo: this.modelo.value,
    casa: this.casa.value
  };

  fetch("SUA_URL_DO_APPS_SCRIPT", {
    method: "POST",
    body: JSON.stringify(dados),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.text())
    .then(msg => {
      document.getElementById("mensagem").innerText = msg;
      this.reset();
    })
    .catch(err => {
      document.getElementById("mensagem").innerText = "Erro ao registrar visitante.";
    });
});
