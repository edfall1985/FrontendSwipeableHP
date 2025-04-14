document.addEventListener("DOMContentLoaded", async () => {
  const gallery = document.getElementById("gallery");
  const API_URL = "https://swipe-api.digtri.com/api/gallery";

  try {
    const res = await fetch(API_URL);
    const data = await res.json();

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
      keyboard: { enabled: true },
    });

  } catch (err) {
    gallery.innerHTML = "<p style='color:red'>Gagal memuat konten. Cek koneksi API.</p>";
    console.error("Fetch Error:", err);
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("like-btn")) {
      alert("Liked!");
    } else if (e.target.classList.contains("share-btn")) {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
      alert("Share link copied!");
    }
  });
});
