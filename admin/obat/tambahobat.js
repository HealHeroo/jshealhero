import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const postTambahObat = () => {
  const target_url =
    "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const datainjson = {
    nama_obat: getValue("nama_obat"),
    jenis_obat: getValue("jenis_obat"),
    keterangan: getValue("keterangan"),
    harga: getValue("harga"),
  };
  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
  console.log(datainjson);
};

const responseData = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Insert Successful",
      text: result.message,
    }).then(() => {
      window.location.reload();
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Insert Failed",
      text: result.message,
    });
  }
};

window.postTambahObat = postTambahObat;


