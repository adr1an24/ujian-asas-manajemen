const quizData = [
  {
    question: "1. Manajemen menurut Terry (1977) adalah...",
    choices: [
      "Proses mengatur keuangan perusahaan",
      "Proses khas yang terdiri dari planning, organizing, actuating, dan controlling",
      "Sistem pengawasan karyawan",
      "Teknik pemasaran produk"
    ],
    answer: 1
  },
  {
    question: "2. Sumber daya '6M' dalam organisasi menurut Terry meliputi...",
    choices: [
      "Man, Money, Materials, Machines, Methods, Market",
      "Man, Material, Management, Money, Method, Motivation",
      "Market, Money, Motivation, Machine, Man, Method",
      "Man, Machine, Material, Market, Management, Money"
    ],
    answer: 0
  },
  {
    question: "3. Manajemen sebagai proses berarti...",
    choices: [
      "Hanya fokus pada pengawasan",
      "Fungsi-fungsi saling terkait untuk mencapai tujuan organisasi",
      "Proses otomatis tanpa campur tangan manusia",
      "Sistem yang kaku dan tidak fleksibel"
    ],
    answer: 1
  },
  {
    question: "4. Manajer fungsional adalah...",
    choices: [
      "Mengelola seluruh organisasi",
      "Fokus pada satu bidang tertentu (contoh: Direktur Keuangan)",
      "Bertanggung jawab atas proyek sementara",
      "Hanya mengawasi staf lapangan"
    ],
    answer: 1
  },
  {
    question: "5. Teori manajemen membantu dalam hal berikut, kecuali...",
    choices: [
      "Memahami pengalaman nyata",
      "Menjelaskan fenomena organisasi",
      "Menggantikan praktik manajemen sepenuhnya",
      "Memperbaiki komunikasi di lingkungan kerja"
    ],
    answer: 2
  },
  {
    question: "6. Teori Klasik manajemen (1900-1930an) fokus pada...",
    choices: [
      "Kebutuhan psikologis karyawan",
      "Efisiensi dan produktivitas (contoh: Taylor)",
      "Inovasi teknologi",
      "Hubungan antarorganisasi"
    ],
    answer: 1
  },
  {
    question: "7. Tokoh yang menekankan perspektif humanistik dalam manajemen adalah...",
    choices: [
      "Frederick Taylor",
      "Mary Parker Follett",
      "Henry Ford",
      "Max Weber"
    ],
    answer: 1
  },
  {
    question: "8. Manajemen Kualitas Total (TQM) dipopulerkan oleh...",
    choices: [
      "Peter Drucker",
      "W. Edward Deming",
      "Michael Porter",
      "Philip Kotler"
    ],
    answer: 1
  },
  {
    question: "9. Ciri perencanaan yang baik menurut Soekarno K. (1985) adalah...",
    choices: [
      "Kaku dan tidak berubah",
      "Rasional, fleksibel, dan kontinu",
      "Berbasis intuisi",
      "Hanya fokus jangka pendek"
    ],
    answer: 1
  },
  {
    question: "10. Fungsi manajemen menurut Koontz & Weihrich adalah...",
    choices: [
      "Planning, Organizing, Commanding, Controlling",
      "Planning, Organizing, Staffing, Leading, Controlling",
      "Directing, Coordinating, Budgeting, Reporting",
      "Forecasting, Organizing, Motivating, Controlling"
    ],
    answer: 1
  },
  {
    question: "11. Fungsi 'Commanding' dalam manajemen dikemukakan oleh...",
    choices: [
      "Henry Fayol",
      "Mintzberg",
      "Terry",
      "Robbins"
    ],
    answer: 0
  },
  {
    question: "12. Pengawasan menurut Fayol mencakup aspek berikut, kecuali...",
    choices: [
      "Manajerial",
      "Komersial",
      "Teknis",
      "Sosial"
    ],
    answer: 3
  },
  {
    question: "13. Langkah pertama dalam perencanaan menurut Stoner adalah...",
    choices: [
      "Menentukan sasaran",
      "Analisis situasi",
      "Mengembangkan alternatif",
      "Mengevaluasi hasil"
    ],
    answer: 0
  },
  {
    question: "14. Strategi 'Camel Head in The Tent' dalam perencanaan merujuk pada...",
    choices: [
      "Penyampaian rencana secara bertahap",
      "Penggunaan otoritas penuh",
      "Alihkan perhatian dengan isu lain",
      "Delegasi tanggung jawab"
    ],
    answer: 0
  },
  {
    question: "15. Prinsip 'kesatuan komando' berarti...",
    choices: [
      "Bawahan hanya bertanggung jawab pada satu atasan",
      "Semua karyawan memiliki banyak atasan",
      "Organisasi harus terpusat",
      "Tidak perlu koordinasi"
    ],
    answer: 0
  },
  {
    question: "16. Lingkungan umum organisasi meliputi faktor berikut, kecuali...",
    choices: [
      "Teknologi",
      "Pemasok",
      "Nilai sosial",
      "Kondisi alam"
    ],
    answer: 1
  },
  {
    question: "17. Boundary spanners dalam pengamatan lingkungan adalah...",
    choices: [
      "Tim internal yang mengawasi keuangan",
      "Pihak yang memantau perubahan eksternal (contoh: sales)",
      "Manajer tingkat atas",
      "Consultan eksternal"
    ],
    answer: 1
  },
  {
    question: "18. Strategi adaptasi organisasi terhadap ketidakpastian lingkungan adalah...",
    choices: [
      "Merger/joint venture",
      "Menghindari perubahan",
      "Mengurangi diversifikasi",
      "Sentralisasi keputusan"
    ],
    answer: 0
  },
  {
    question: "19. Manajemen matriks cocok untuk organisasi dengan...",
    choices: [
      "Sumber daya melimpah",
      "Tenaga ahli terbatas",
      "Struktur hierarkis kaku",
      "Lingkungan stabil"
    ],
    answer: 1
  },
  {
    question: "20. Kolaborasi dalam organisasi menekankan pada...",
    choices: [
      "Hasil akhir semata",
      "Proses yang berkualitas",
      "Kompetisi internal",
      "Sentralisasi wewenang"
    ],
    answer: 1
  },
  {
    question: "21. Peran pemimpin sebagai 'coach & counselor' meliputi...",
    choices: [
      "Memberikan hukuman",
      "Mengembangkan talenta karyawan",
      "Mengontrol secara ketat",
      "Menghindari interaksi dengan bawahan"
    ],
    answer: 1
  },
  {
    question: "22. Teknik mendengarkan aktif (RISE) termasuk...",
    choices: [
      "Response, Interrupt, Support, Empathy",
      "Report, Instruct, Solve, Evaluate",
      "Read, Interpret, Speak, Execute",
      "Reward, Inspire, Support, Empower"
    ],
    answer: 0
  },
  {
    question: "23. Pengawasan 'feedforward' bertujuan untuk...",
    choices: [
      "Mengevaluasi hasil akhir",
      "Mencegah masalah sebelum terjadi",
      "Mengoreksi kesalahan saat terjadi",
      "Menghukum karyawan yang gagal"
    ],
    answer: 1
  },
  {
    question: "24. Tipe pengawasan 'Yes-No Control' digunakan untuk...",
    choices: [
      "Menentukan kelanjutan proyek",
      "Memberikan insentif",
      "Mengevaluasi kinerja tahunan",
      "Melatih karyawan baru"
    ],
    answer: 0
  },
  {
    question: "25. Syarat pengawasan efektif adalah...",
    choices: [
      "Kaku dan tidak fleksibel",
      "Sesuai dengan rencana dan budaya organisasi",
      "Hanya fokus pada hasil finansial",
      "Tidak perlu tindakan korektif"
    ],
    answer: 1
  },
  {
    question: "26. Manajemen perubahan generik menekankan...",
    choices: [
      "Perubahan sekali saja",
      "Deteksi dini dan adaptasi berkelanjutan",
      "Menghindari teknologi baru",
      "Mempertahankan status quo"
    ],
    answer: 1
  },
  {
    question: "27. Tipe perubahan 'kuantum' merujuk pada...",
    choices: [
      "Perluasan pasar kecil",
      "Masuk ke teknologi/pasar baru",
      "Merger dengan pesaing",
      "Perubahan struktur internal"
    ],
    answer: 1
  },
  {
    question: "28. Agen perubahan dalam organisasi adalah...",
    choices: [
      "Pihak yang menolak perubahan",
      "Individu yang memimpin inisiatif perubahan",
      "Karyawan level bawah",
      "Pemasok eksternal"
    ],
    answer: 1
  },
  {
    question: "29. Manajemen personalia generasi kedua muncul karena...",
    choices: [
      "Konflik majikan-buruh",
      "Teknologi otomatisasi",
      "Globalisasi",
      "Peraturan pemerintah"
    ],
    answer: 0
  },
  {
    question: "30. Brainware Management fokus pada...",
    choices: [
      "Pengelolaan mesin produksi",
      "Potensi otak dan kreativitas SDM",
      "Administrasi gaji",
      "Hubungan industrial"
    ],
    answer: 1
  },
  {
    question: "31. Manajer puncak bertanggung jawab atas...",
    choices: [
      "Pengawasan lapangan",
      "Menentukan kebijakan organisasi",
      "Koordinasi harian",
      "Pelatihan staf"
    ],
    answer: 1
  },
  {
    question: "32. Manajer menengah mencakup jabatan seperti...",
    choices: [
      "Direktur Utama",
      "Kepala Divisi",
      "Supervisor",
      "Staf administrasi"
    ],
    answer: 1
  },
  {
    question: "33. Peran manajer sebagai 'negotiator' termasuk dalam kategori...",
    choices: [
      "Interpersonal",
      "Informasional",
      "Pengambilan keputusan",
      "Teknis"
    ],
    answer: 2
  },
  {
    question: "34. Keterampilan 'konseptual' paling dibutuhkan oleh...",
    choices: [
      "Manajer tingkat bawah",
      "Manajer tingkat menengah",
      "Manajer tingkat puncak",
      "Staf operasional"
    ],
    answer: 2
  },
  {
    question: "35. Gaya kepemimpinan 'Owl' menggambarkan...",
    choices: [
      "Agresif dan otoriter",
      "Bijaksana dan analitis",
      "Pasif dan menghindar",
      "Spontan dan emosional"
    ],
    answer: 1
  },
  {
    question: "36. Pengorganisasian menurut Louis A. Allen adalah...",
    choices: [
      "Proses mengontrol keuangan",
      "Mengidentifikasi dan mengelompokkan pekerjaan",
      "Menetapkan tujuan pemasaran",
      "Melatih karyawan baru"
    ],
    answer: 1
  },
  {
    question: "37. Manfaat pengorganisasian adalah...",
    choices: [
      "Spesialisasi pekerjaan",
      "Sentralisasi kekuasaan",
      "Mengurangi komunikasi",
      "Menghindari perubahan"
    ],
    answer: 0
  },
  {
    question: "38. Struktur organisasi matriks memungkinkan karyawan memiliki...",
    choices: [
      "Satu atasan",
      "Dua atasan (fungsional & proyek)",
      "Tidak ada atasan",
      "Banyak atasan tanpa koordinasi"
    ],
    answer: 1
  },
  {
    question: "39. Integrasi dalam organisasi menurut Jones (2001) dicapai melalui...",
    choices: [
      "Kompetisi internal",
      "Kerja sama, koordinasi, komunikasi",
      "Sentralisasi keputusan",
      "Minimalkan interaksi"
    ],
    answer: 1
  },
  {
    question: "40. Struktur organisasi dengan formalitas tinggi berarti...",
    choices: [
      "Prosedur kaku dan dokumentasi ketat",
      "Fleksibel dan informal",
      "Tidak ada hierarki",
      "Bergantung pada inisiatif individu"
    ],
    answer: 0
  },
  {
    question: "41. Teori hierarki kebutuhan Maslow dimulai dari...",
    choices: [
      "Aktualisasi diri",
      "Kebutuhan fisik",
      "Keamanan",
      "Sosial"
    ],
    answer: 1
  },
  {
    question: "42. Teori X dan Y dikemukakan oleh...",
    choices: [
      "Herzberg",
      "McGregor",
      "Vroom",
      "McClelland"
    ],
    answer: 1
  },
  {
    question: "43. Komunikasi horizontal terjadi antara...",
    choices: [
      "Atasan dan bawahan",
      "Antar departemen",
      "Organisasi dengan pemasok",
      "Manajer dengan konsultan"
    ],
    answer: 1
  },
  {
    question: "44. 'Noise' dalam komunikasi dapat berupa...",
    choices: [
      "Pesan jelas",
      "Gangguan seperti suara atau stres",
      "Media yang tepat",
      "Feedback positif"
    ],
    answer: 1
  },
  {
    question: "45.

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(index, btn);
    choicesEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(selected, button) {
  const correct = quizData[currentQuestion].answer;
  const buttons = choicesEl.querySelectorAll("button");

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correct) {
      btn.style.backgroundColor = "#4CAF50"; // hijau untuk benar
      btn.style.color = "white";
    } else if (index === selected) {
      btn.style.backgroundColor = "#f44336"; // merah untuk salah
      btn.style.color = "white";
    }
  });

  if (selected === correct) score++;
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-box").style.display = "none";
  resultBox.style.display = "block";
  scoreEl.textContent = `Nilai Anda: ${score} dari ${quizData.length} soal`;
}

nextBtn.onclick = nextQuestion;
loadQuestion();
