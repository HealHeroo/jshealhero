const urlParams = new URLSearchParams(window.location.search);
const obatId = urlParams.get("obatId");

export const urlPUT =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero?id=" +
  obatId;

export const AmbilResponse = (result) => {
  if (result.status) {
    console.log(result); // menampilkan response API pada console
    Swal.fire({
      icon: "success",
      title: "Data berhasil diubah",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "obat.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "error",
      text: result.message,
    });
  }
};