document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const host = window.location.origin;

  const data = [
    {
      judul: "Masa Depan Kecerdasan Buatan",
      kategori: "AI makin jenius. Tapi lo? Makin adaptif atau makin dikuasai?",
      gambar: `${host}/assets/3.jpeg`
    },
    {
      judul: "Konten Visual Estetik",
      kategori: "Edukasi Visual dan Imajinasi",
      gambar: `${host}/assets/4.jpeg`
    },
    {
      judul: "Teknologi dan Harapan",
      kategori: "Teknologi = Solusi atau Ilusi?",
      gambar: `${host}/assets/1.avif`
    }
  ];

  data.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <img src="${item.gambar}" alt="${item.judul}">
      <div class="info">
        <h3>${item.judul}</h3>
        <p>${item.kategori}</p>
      </div>
      <div class="actions">
        <button class="like-btn">❤️</button>
        <button class="share-btn">🔗</button>
      </div>
    `;
    gallery.appendChild(slide);
  });

  new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    keyboard: {
      enabled: true,
    },
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("like-btn")) {
      alert("Liked!");
    } else if (e.target.classList.contains("share-btn")) {
      alert("Share link copied!");
    }
  });
});
