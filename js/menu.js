// Lukker Viden-dropdownen, når man klikker udenfor eller trykker Escape
document.addEventListener("click", (e) => {
  document.querySelectorAll(".har-undermenu details[open]").forEach((d) => {
    if (!d.contains(e.target)) d.removeAttribute("open");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  document.querySelectorAll(".har-undermenu details[open]").forEach((d) => {
    d.removeAttribute("open");
    d.querySelector("summary").focus();
  });
});
