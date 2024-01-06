const urlParams = new URLSearchParams(window.location.search);
const penggunaId = urlParams.get("penggunaId");

export const urlPUT =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/pengguna?id=" +
  penggunaId;

export const AmbilResponse = (result) => {
  if (result.status) {
    console.log(result); // menampilkan response API pada console
    Swal.fire({
      icon: "success",
      title: "Data berhasil diubah",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "datapengguna.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "error",
      text: result.message,
    });
  }
};