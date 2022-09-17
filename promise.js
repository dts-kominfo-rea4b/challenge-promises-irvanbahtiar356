const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  return new Promise((resolve) => {
    const hasilEmosi =
      theaterIXX.filter((emosi1) => emosi1.hasil === emosi).length +
      theaterVGC.filter((emosi2) => emosi2.hasil === emosi).length;

    return resolve(hasilEmosi);
  });
};

module.exports = {
  promiseOutput,
};
