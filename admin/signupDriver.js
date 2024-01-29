import { getValue } from "https://jscroot.github.io/element/croot.js";

function postSignUpDriver(target_url, datajson, responseFunction) {
  var raw = JSON.stringify(datajson);

  var requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

const SignUpDriver = () => {
  const target_url =
    "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/singup_driver";

  const datainjson = {
    namalengkap: getValue("namalengkap"),
    jeniskelamin: getValue("jeniskelamin"),
    nomorhp: getValue("nomorhp"),
    alamat: getValue("alamat"),
    platmotor: getValue("platmotor"),
    akun: {
      email: getValue("email"),
      password: getValue("password"),
    },
  };
  console.log(datainjson);
  postSignUpDriver(target_url, datainjson, responseData);
};

const responseData = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Sign Up Successful",
      text: result.message,
    }).then(() => {
      window.location.href = "datadriver.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Sign Up Failed",
      text: result.message,
    });
  }
};

window.SignUpDriver = SignUpDriver;