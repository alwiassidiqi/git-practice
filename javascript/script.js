//FUNCTION PROTOTYPE

// function Mobil(brand, cc) {
//   this.brand = brand;
//   this.cc = cc;
// }

// Mobil.prototype.drive = function () {
//   return `Mobil ${this.brand} sedang melaju dengan mesin ${this.cc}cc`;
// };

// let honda = new Mobil("brio", 1300);

//CLASS

// class Mobil {
//   constructor(brand, cc) {
//     this.brand = brand;
//     this.cc = cc;
//   }

//   drive() {
//     return `Mobil ${this.brand} sedang melaju dengan cc ${this.cc}`;
//   }
// }

// let honda = new Mobil("brio", 1200);

//CLOSESURE

// function init() {
//   let nama = "alwi";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// function tambah() {
//   let nilai = 0;
//   return function () {
//     return nilai++;
//   };
// }

// let a = tambah();

// console.log(a());
// console.log(a());
// console.log(a());

// FILTER

// const angka = [-1, 8, 9, 1, 4, -5, -6, 3, 2, 9];
// const newAngka = angka.map(function (i) {
//   return i >= 3;
// });
// console.log(newAngka);
// //MAP
// const doubleAngka = angka.map((a) => a * 2);
// console.log(doubleAngka);
// //REDUCE
// const reduceAngka = angka.reduce((acc, cValue) => acc + cValue);
// console.log(reduceAngka);

// const videos = Array.from(document.querySelectorAll("[data-duration]"));

// let jsLanjutan = videos
//   .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

//   .map((item) => item.dataset.duration)
//   .map((waktu) => {
//     const parts = waktu.split(":").map((part) => parseFloat(part));
//     return parts[0] * 60 + parts[1];
//   })
//   .reduce((acc, cValue) => acc + cValue);

// const jam = Math.floor(jsLanjutan / 3600);
// jsLanjutan = jsLanjutan - jam * 3600;
// const menit = Math.floor(jsLanjutan / 60);
// const detik = jsLanjutan - menit * 60;

// const jmlVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
// const pJumlah = document.querySelector(".jumlah-video");
// pJumlah.textContent = `${jmlVideo} video`;

// const pDurasi = document.querySelector(".total-durasi");
// pDurasi.innerHTML = `${jam} jam ${menit} menit ${detik} detik`;

//TEMPLATE LITERAL

// const mhs = {
//   nama: "Alwi Assidiqi",
//   semester: 1,
//   mataKuliah: ["Pengantar Sistem Informasi", "Pengantar Matematika", "Kalkulus", "Pendidikan Kewarganegaraan", "Pendidikan Agama Islam"],
// };

// function cetakMatkul(mataKuliah) {
//   return `${mataKuliah.map((mk) => `${mk}`).join("\n")}`;
// }

// console.log(
//   `${mhs.nama}
//   Semester ${mhs.semester}
//   Mata Kuliah :
//   ${cetakMatkul(mhs.mataKuliah)}`
// );

//TAGGED TEMPLATE LITERAL

// const nama = "Muhammad Alwi";
// const umur = 25;
// const email = "alwiassidiqi@gmail.com";

// function highlight(strings, ...args) {
//   return strings.reduce((result, str, i) => `${result}${str}${args[i] || ""}`, "");
// }

// const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah ${email}.`;

// console.log(str);

//DESTRUCTURING

// const mhs = {
//   nama: "alwi",
//   jurusan: "sistem informasi",
//   umur: 25,
// };

// const { nama, jurusan, id = 999 } = mhs;

// console.log(nama);
// console.log(jurusan);
// console.log(id);

// const mhs1 = {
//   nama: "alwi",
//   prodi: "sistem informasi",
//   umur: 25,
//   email: "alwi@ut.ac.id",
//   nilai: {
//     tuton: 88,
//     tmk: 90,
//     uas: 90,
//   },
// };

// function printMhs({ nama, umur, prodi, nilai: { tuton, tmk, uas } }) {
//   return `Halo, nama saya ${nama}, saya ${umur} tahun, dan nilai UAS saya ${uas}.`;
// }

// console.log(printMhs(mhs1));

//FOR OF ARRGS

// function penjumlahan() {
//   let jumlah = 0;
//   for (n of arguments) {
//     jumlah += n;
//   }
//   return jumlah;
// }

// console.log(penjumlahan(1, 2, 3, 4, 5));

// // FOR IN

// const mhs = {
//   nama: "alwi",
//   prodi: "sistem informasi",
//   email: "alwi@ut.ac.id",
// };

// for (m in mhs) {
//   console.log(mhs[m]); // (m) -> parameter
// }

// SPREAD OPERATOR

// const nama = ["muhammad", "alwi", "assidiqi"];
// const nama2 = ["muhammad", "alwi", "assidiqi"];

// console.log([...nama, ...nama2]);

// //-----//
// const liNomor = document.querySelectorAll(".nomor");
// const nomorArray = [...liNomor].map((n) => n.textContent);

// console.log(nomorArray);

// // SYSNC CALLBACK

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukan Nama : ");
//   callback(nama);
// }

// tampilkanPesan((nama) => alert(`Halo ${nama}`));

// ASYSNC CALLBACK VALNILLA JS

// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// getDataMahasiswa(
//   "data/data.json",
//   (result) => {
//     const mhs = JSON.parse(result);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );

// //JQUERY

// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=spider",
//   //   success: (mhs) => {
//   //     mhs.forEach((m) => console.log(m.nama));
//   //   },
//   success: (movies) => console.log(movies),
// });

//FETCH RETURN PROMISE CONVERT TO JSON
fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=spider")
  .then((responese) => responese.json())
  .then((responese) => console.log(responese));

// PROMISE

let ditepati = true;
const janji = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Ditepati setelah beberapa waktu!");
    }, 2000);
  } else {
    setTimeout(() => {
      resolve("Tidak ditepati setelah beberapa waktu");
    }, 2000);
  }
});

janji
  .finally(() => console.log("selesai menunggu"))
  .then((responese) => console.log("OK! : " + responese))
  .catch((responese) => console.log("NOT OK! : " + responese));
