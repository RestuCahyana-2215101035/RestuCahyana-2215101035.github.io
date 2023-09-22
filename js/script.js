//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const inputText = document.getElementById("angka");
const tombol = document.getElementById("tombol");
let container = document.getElementById("container");

tombol.addEventListener("click", function () {
  const input = inputText.value;

  let n1 = 1,
    n2 = 1,
    nextTerm;

  for (let i = 0; i < input; i++) {
    container.innerText += n1 + ", ";
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
});

function hitungVolume() {
  // Ambil nilai panjang, lebar, dan tinggi dari input
  var panjang = parseFloat(document.getElementById("panjang").value);
  var lebar = parseFloat(document.getElementById("lebar").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value);

  // Validasi input
  if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi)) {
    alert("Masukkan nilai yang valid untuk panjang, lebar, dan tinggi.");
    return;
  }

  // Hitung volume
  var volume = panjang * lebar * tinggi;

  // Tampilkan hasil
  document.getElementById("hasil").innerHTML = "" + volume.toFixed(2) + "cm3";
}
