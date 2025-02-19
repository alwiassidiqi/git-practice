function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000; // parameter
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan");
    }
  });
}
console.log(cobaPromise());

// RESOLVED PROMISE
// const coba = cobaPromise();
// coba.then((coba) => console.log(coba)).catch((coba) => console.log(coba));

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}

cobaAsync();
