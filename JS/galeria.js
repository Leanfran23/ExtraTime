document.addEventListener('DOMContentLoaded', ()=> {
  const imgLightbox = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(imgLightbox, {
      intDuration: 900,
      outDuration: 1500
  });
});