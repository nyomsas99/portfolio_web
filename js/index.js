const chk = document.getElementById("chk");
const title = document.querySelector(".title");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  title.classList.toggle("jumdark");
});
