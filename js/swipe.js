document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  const data = [
    {
      judul: "Contoh Judul 1",
      kategori: "Inspirasi",
      gambar: "https://source.unsplash.com/720x1280/?nature"
    },
    {
      judul: "Contoh Judul 2",
      kategori: "Edukasi",
      gambar: "https://source.unsplash.com/720x1280/?education"
    },
    {
      judul: "Contoh Judul 3",
      kategori: "Teknologi",
      gambar: "https://source.unsplash.com/720x1280/?technology"
    }
  ];

  data.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = \`
      <img src="\${item.gambar}" alt="\${item.judul}">
      <div class="info">
        <h3>\${item.judul}</h3>
        <p>\${item.kategori}</p>
      </div>
      <div class="actions">
        <button class="like-btn">❤️</button>
        <button class="share-btn">🔗</button>
      </div>
    \`;
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
