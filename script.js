const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submit");
const khodam = [
  "Laba-laba Sunda",
  "Kontolodon",
  "Serigala Sumatera",
  "Ambatron",
  "Alomani Hitam",
  "Jenglonte",
  "Kodok Zuma",
  "Genderuwo Pedo",
  "Tuyul Crypto",
  "Buto Hitam",
  "Alok Hamil",
  "Hitler Loli",
  "Stalin Tobrut",
  "Pemuja Ulti Nolan",
  "Jawir Lv 69",
  "Kuyang User Fanny",
  "Banteng Merah",
  "Pocong Pejabat",
  "Jenglot Jenius",
  "Jong Koooook",
  "Bocil Dirot",
  "Genderuwo Gaming",
  "Limbad Ngelawak",
  "Babi Ngepet Network",
  "Yo Ndak Tau Kok Tanya Saya",
  "Willie Salim",
  "Zeus Gacor",
  "Shikanoko",
  "Member SUKI",
  "Bintang Skibidi"
];
const filter=(text)=>{
  return /[^a-zA-Z]/g.test(text);
}
submit.addEventListener("click", () => {
  if(input.value == "") {
    output.innerText = "Tuman";
    return;
  }
  else if(input.value.length <= 2 || filter(input.value)) {
    output.innerText = "Yakali namanya gitu"
    return;
  }
  if (!localStorage.getItem(`khodam${input.value}`)) {
    const value = Math.floor(Math.random() * khodam.length);
    localStorage.setItem(`khodam${input.value}`, khodam[value]);
    output.innerText = `Khodam ${input.value} adalah ${khodam[value]}`;
  } else {
    output.innerText = `Khodam ${input.value} adalah ${localStorage.getItem(
      `khodam${input.value}`
    )}`;
  }
});
