import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const deleteObat = async (IDHAPUS) => {
  const obatId = IDHAPUS;
  const authorizationToken = getCookie("Authorization");

  const isConfirmed = await Swal.fire({
    title: "Apakah Anda yakin ingin menghapus obat ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, Hapus!",
    cancelButtonText: "Batal",
  });

  if (isConfirmed) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", authorizationToken);

    const target_url =
      "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero?id=" +
      obatId;

    try {
      const response = await fetch(target_url, {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      });

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Data berhasil dihapus",
          showConfirmButton: false,
          timer: 1500,
        });
        location.reload();
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

window.deleteObat = deleteObat;