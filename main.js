// keeps year auto-updated
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  const year = new Date().getFullYear();
  footer.innerHTML = `© ${year} Aruba Catholic Links • External links verified`;
});
