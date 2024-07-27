const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submit");
const khodam = [
  { name: "Serigala Sumatera", rarity: 1 },
  { name: "Tuyul Crypto", rarity: 1 },
  { name: "Jenglonte", rarity: 1 },
  { name: "Buto Hitam", rarity: 1 },
  { name: "Jawir Lv 69", rarity: 1 },
  { name: "Kuyang User Fanny", rarity: 1 },
  { name: "Banteng Merah", rarity: 1 },
  { name: "Bocil Dirot", rarity: 1 },
  { name: "Genderuwo Gaming", rarity: 1 },
  { name: "Mega Chan", rarity: 1 },
  { name: "Windah Hitam", rarity: 1 },
  { name: "Jong Koooook", rarity: 1 },
  { name: "Kontolodon", rarity: 1 },
  { name: "Wibu Tokrev", rarity: 1 },
  { name: "Willie Salim", rarity: 1 },
  { name: "Macan Terbang", rarity: 1 },
  { name: "Bwa Bwa Bwa", rarity: 1 },
  { name: "Crazy Killer", rarity: 1 },

  { name: "Ambatron", rarity: 2 },
  { name: "Kucing Tanpa Biji", rarity: 2 },
  { name: "Alomani Hitam", rarity: 2 },
  { name: "Genderuwo Pedo", rarity: 2 },
  { name: "Alok Hamil", rarity: 2 },
  { name: "Salamander Samarinda", rarity: 2 },
  { name: "Member SUKI", rarity: 2 },
  { name: "Skibidi Toilet", rarity: 2 },
  { name: "Maling Sempak", rarity: 2 },
  { name: "Admin SUKI", rarity: 2 },

  { name: "Laba-laba Sunda", rarity: 3 },
  { name: "Penunggu Kapal Karam Pontianak", rarity: 3 },
  { name: "Kodok Zuma", rarity: 3 },
  { name: "Yo Ndak Tau Kok Tanya Saya", rarity: 3 },
  { name: "Raja Pedo", rarity: 3 },
  { name: "Zeus Gacor", rarity: 3 },
  { name: "Kuntilanak Tobrut", rarity: 3 },

  { name: "Tengkorak Bawa Biola", rarity: 4 },
  { name: "Loli Beranak 4", rarity: 4 },
  { name: "Stalin Tobrut", rarity: 4 },
  { name: "Hitler Loli", rarity: 4 },

  { name: "Sugiono", rarity: 5 },
];
const star1 = `<span class="onestar">★ (45%)</span>`,
  star2 = `<span class="twostar">★★ (25%)</span>`,
  star3 = `<span class="threestar">★★★ (17.5%)</span>`,
  star4 = `<span class="fourstar">★★★★ (10%)</span>`,
  star5 = `<span class="fivestar">★★★★★ (2.5%)</span>`;
const starCount = (rarity) => {
  switch (rarity) {
    case 1:
      return star1;
    case 2:
      return star2;
    case 3:
      return star3;
    case 4:
      return star4;
    case 5:
      return star5;
  }
};
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
    output.innerHTML = `Khodam ${input.value} adalah ${
      khodam[value].name
    } <span class="container-star">${starCount(khodam[value].rarity)}</span>`;
  } else {
    output.innerHTML = `Khodam ${input.value} adalah ${
      khodam[localStorage.getItem(`khodam${input.value}`)].name
    } <span class="container-star">${starCount(
      khodam[localStorage.getItem(`khodam${input.value}`)].rarity
    )}</span>`;
  }
});

