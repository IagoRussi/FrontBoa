// header
fetch("../html/componentes/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("meu-header").innerHTML = data;
  })
  .catch(error => {
    console.error("Erro ao carregar o header:", error);
  });

// principal
fetch("../html/componentes/principal.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("principal").innerHTML = data;
  })
  .catch(error => {
    console.error("Erro ao carregar o principal:", error);
  });

  // footer
fetch("../html/componentes/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footertela").innerHTML = data;
  })
  .catch(error => {
    console.error("Erro ao carregar a sidebar:", error);
  });
  
  fetch("../html/componentes/sidebar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("sidebar").innerHTML = data;
  })
  .catch(error => {
    console.error("Erro ao carregar a sidebar:", error);
  });