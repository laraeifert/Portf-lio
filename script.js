const tabs = document.querySelectorAll(".tab-categoria");
const paineis = document.querySelectorAll(".projeto-categoria");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    // Remove o estado ativo de todas as abas
    tabs.forEach((item) => {
      item.classList.remove("ativo");
      item.setAttribute("aria-selected", "false");
    });

    // Esconde todos os painéis
    paineis.forEach((painel) => {
      painel.classList.remove("ativo");
    });

    // Ativa a aba clicada
    tab.classList.add("ativo");
    tab.setAttribute("aria-selected", "true");

    // Mostra o painel correspondente
    const categoria = tab.dataset.categoria;

    const painelAtivo = document.querySelector(
      `.projeto-categoria[data-categoria="${categoria}"]`
    );

    if (painelAtivo) {
      painelAtivo.classList.add("ativo");
    }
  });
});