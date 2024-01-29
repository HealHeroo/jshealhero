import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

let datainjson;

const postOrder = () => {
  const target_url = "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/pesanan";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";

  datainjson = {
    nama: getValue("nama"),
    alamat: getValue("alamat"),
    nomorhp: getValue("nomorhp"),
    namaobat: getValue("namaobat"),
    quantity: getValue("quantity"),
    harga: getValue("harga"),
    totalharga: getValue("totalharga"),
    status: "Berhasil, orderan diproses ya kak",
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
      // window.location.reload();
      const queryString = Object.entries(datainjson)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&");
      window.location.href = `keranjang.html?${queryString}`;
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Insert Failed",
      text: result.message,
    });
  }
};

window.postOrder = postOrder;
