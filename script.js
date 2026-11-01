const quotes = [
  { text: "Jangan takut gagal, takutlah jika kamu tidak pernah mencoba sama sekali.", category: "Motivasi", author: "AL" },
  { text: "Setiap baris kode yang kamu tulis adalah satu langkah lebih dekat menuju impianmu.", category: "Coding", author: "AL" },
  { text: "Proses belajar butuh waktu, konsistensi adalah kuncinya.", category: "Belajar", author: "AL" },
  { text: "Website hebat dimulai dari satu file index.html yang sederhana.", category: "Developer", author: "AL" },
  { text: "Karier impianmu sedang menunggu hasil kerja kerasmu hari ini.", category: "Masa Depan", author: "AL" },
  { text: "Kesulitan dalam debugging hari ini adalah keahlianmu di esok hari.", category: "Coding", author: "AL" },
  { text: "Menjadi programmer bukan tentang seberapa cepat kamu mengetik, tapi seberapa pintar kamu memecahkan masalah.", category: "Mindset", author: "AL" },
  { text: "Kecil di awal, besar di hasil. Teruslah merangkai baris kode.", category: "Semangat", author: "AL" },
  { text: "Logika yang rumit selalu bisa diselesaikan dengan langkah kecil yang konsisten.", category: "Problem Solving", author: "AL" },
  { text: "Mahasiswa UIN yang siap menggebrak dunia teknologi dengan karya nyata.", category: "Personal", author: "AL" },
  { text: "Gagal itu wajar dalam koding, tinggal tambahkan 'console.log' lalu cari solusinya!", category: "Humor Coding", author: "AL" },
  { text: "Teknologi diciptakan untuk mengubah dunia, dan itu dimulai dari laptopmu sekarang.", category: "Inspirasi", author: "AL" },
  { text: "Jangan bandingkan prosesmu dengan hasil akhir orang lain. Semua master pernah jadi pemula.", category: "Fokus", author: "AL" },
  { text: "Satu *bug* teratasi adalah satu pelajaran berharga yang membuatmu semakin hebat.", category: "Growth", author: "AL" },
  { text: "Masa depan milik mereka yang tidak berhenti belajar setiap hari.", category: "Masa Depan", author: "AL" }
];  


const themes = [
  "linear-gradient(135deg, #0f172a, #1e1b4b)",
  "linear-gradient(135deg, #064e3b, #022c22)",
  "linear-gradient(135deg, #881337, #4c0519)",
  "linear-gradient(135deg, #581c87, #3b0764)",
  "linear-gradient(135deg, #6b7476, #a295ad)",
  "linear-gradient(135deg, #9f6ec5, #1b161f)"
];

let themeIndex = 0;

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  document.getElementById('quoteText').innerText = `"${selectedQuote.text}"`;
  document.getElementById('categoryBadge').innerText = selectedQuote.category;
  document.getElementById('quoteAuthor').innerText = `- ${selectedQuote.author}`;
}

function changeTheme() {
  themeIndex = (themeIndex + 1) % themes.length;
 document.getElementById('quoteCard').style.background = themes[themeIndex];
}

function copyQuote() {
  const quote = document.getElementById('quoteText').innerText;
  navigator.clipboard.writeText(quote);

  const copyBtn = document.getElementById('copyBtn');
  copyBtn.innerText = "✅ Tersalin!";
  setTimeout(() => {
    copyBtn.innerText = "📋 Salin";
  }, 2000);
}