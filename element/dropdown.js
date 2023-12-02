// Fungsi untuk menampilkan/menyembunyikan dropdown profil
const toggleProfileDropdown = () => {
    const dropdown = document.getElementById("profile-dropdown");
    dropdown.classList.toggle("opacity-100");
    dropdown.classList.toggle("hidden");
  };
  
  // Fungsi untuk menampilkan/menyembunyikan dropdown notifikasi
  const toggleNotifikasiDropdown = () => {
    const notifDropdown = document.getElementById("notif-dropdown");
    notifDropdown.classList.toggle("opacity-100");
    notifDropdown.classList.toggle("hidden");
  };
  
  // Menggunakan event listener untuk mendengarkan klik pada elemen dengan ID "profile-btn"
  const profileBtn = document.getElementById("profile-btn");
  profileBtn.addEventListener("click", toggleProfileDropdown);
  
  // Menggunakan event listener untuk mendengarkan klik pada elemen dengan ID "notif-btn"
  const notifBtn = document.getElementById("notif-btn");
  notifBtn.addEventListener("click", toggleNotifikasiDropdown);