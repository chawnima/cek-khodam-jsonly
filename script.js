const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submit");
const khodam = [
  { name: "Serigala Sumatera", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Tuyul Crypto", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Jenglonte", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Buto Hitam", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Jawir Lv 69", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Kuyang User Fanny", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Banteng Merah", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Bocil Dirot", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Genderuwo Gaming", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Mega Chan", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Windah Hitam", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Jong Koooook", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Kontolodon", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Wibu Tokrev", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Willie Salim", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Macan Terbang", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Bwa Bwa Bwa", rarity: '<span class="onestar">★ (48%)</span>' },
  { name: "Crazy Killer", rarity: '<span class="onestar">★ (48%)</span>' },

  { name: "Ambatron", rarity: '<span class="twostar">★★ (25%)</span>' },
  { name: "Kucing Tanpa Biji", rarity: '<span class="twostar">★★ (25%)</span>' },
  { name: "Alomani Hitam", rarity: '<span class="twostar">★★ (25%)</span>' },
  { name: "Genderuwo Pedo", rarity: '<span class="twostar">★★ (25%)</span>' },
  { name: "Alok Hamil", rarity: '<span class="twostar">★★ (25%)</span>' },
  { name: "Salamander Samarinda", rarity: '<span class="twostar">★★ (25%)</span>' },
  { name: "Member SUKI", rarity: '<span class="twostar">★★ (25%)</span>' },
  { name: "Skibidi Toilet", rarity: '<span class="twostar">★★ (25%)</span>' },
  { name: "Maling Sempak", rarity: '<span class="twostar">★★ (25%)</span>' },
  { name: "Admin SUKI", rarity: '<span class="twostar">★★ (25%)</span>' },

  { name: "Laba-laba Sunda", rarity: '<span class="threestar">★★★ (17.5%)</span>' },
  {name: "Penunggu Kapal Karam Pontianak",rarity: '<span class="threestar">★★★ (17.5%)</span>'}, 
  { name: "Kodok Zuma", rarity: '<span class="threestar">★★★ (17.5%)</span>' },
  { name: "Yo Ndak Tau Kok Tanya Saya",rarity:'<span class="threestar">"★★★ (17.5%</span>'},
  { name: "Raja Pedo", rarity: '<span class="threestar">★★★ (17.5%)</span>' },
  { name: "Zeus Gacor", rarity: '<span class="threestar">★★★ (17.5%)</span>' },
  { name: "Kuntilanak Tobrut", rarity: '<span class="threestar">★★★ (17.5%)</span>' },

  {
    name: "Tengkorak Bawa Biola",rarity: '<span class="fourstar">★★★★ (10%)</span>' },
    { name: "Loli Beranak 4", rarity: '<span class="fourstar">★★★★ (10%)</span>' },
  { name: "Stalin Tobrut", rarity: '<span class="fourstar">★★★★ (10%)</span>' },
  { name: "Hitler Loli", rarity: '<span class="fourstar">★★★★ (10%)</span>' },

  { name: "Sugiono", rarity: `<span class="fivestar">★★★★★ (2.5%)` },
];
const filter = (text) => {
  return /[^a-zA-Z\s]/g.test(text);
};
submit.addEventListener("click", () => {
  if (input.value == "") {
    output.innerText = "Anjay nameless";
    return;
  } else if (input.value.length <= 2 || filter(input.value)) {
    output.innerText = "Kok gitu namanya";
    return;
  }
  if (!localStorage.getItem(`khodam${input.value}`)) {
    const value = Math.floor(Math.random() * khodam.length);
    localStorage.setItem(`khodam${input.value}`, value);
    output.innerHTML = `Khodam ${input.value} adalah ${khodam[value].name} <span class="container-star">${khodam[value].rarity}</span>`;
  } else {
    output.innerHTML = `Khodam ${input.value} adalah ${khodam[localStorage.getItem(`khodam${input.value}`)].name} <span class="container-star">${khodam[localStorage.getItem(`khodam${input.value}`)].rarity}</span>`;
  }
});
