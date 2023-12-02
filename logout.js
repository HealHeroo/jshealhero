const logout = () => {
    // Menampilkan Sweet Alert konfirmasi
    Swal.fire({
      icon: "question",
      title: "Confirmation",
      text: "Are you sure you want to log out?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("previousPageURL");
        // Menghapus token dari cookie
        document.cookie =
          "Authorization= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // Redirect ke halaman signin.html
        window.location.href = "../signin.html";
      }
    });
  };
  
  window.logout = logout;