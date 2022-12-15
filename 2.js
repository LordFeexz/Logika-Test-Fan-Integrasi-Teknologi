const text = (str) => {
  let count = 0;

  for (let i = 0; i <= str.length; i++) {
    if (str[i] == " " || str[i] == undefined) count++;
    else if (/\W/.test(str[i]) && str[i] != "-") count--;
  }
  return count;
};

console.log(text("kemarin shopia per[gi ke mall"));
console.log(text("saat meng*ecat tembok, agung dib_antu oleh raihan"));
console.log(text("berapa u(mur minimal[ untuk !mengurus ktp"));
console.log(text("masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda"));

//saya menggunakan cara ini karena melihat pola nya yg mana di setiap kata,hanya ada 1 spesial karakter
