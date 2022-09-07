let mcInput = document.querySelector(".mcInput");
let pcsInput = document.querySelector(".pcsInput");
let pret1Kwh = document.querySelector(".pret1Kwh");
let calculeazaBtn = document.querySelector(".calculeaza");
let h2TotalKwh = document.querySelector(".totalKwh");
let h2TotalFaraTva = document.querySelector(".totalFaraTva");
let h2Tva = document.querySelector(".tva");
let h2TotalFactura = document.querySelector(".totalFactura");

let totalKwh = 0;
let totalLeiFaraTva = 0;
let totalLeiTVA19 = 0;
let totalFactura = 0;

const getTotalKwh = () => {
  let mc = mcInput.value;
  let pcs = pcsInput.value;
  totalKwh = (parseInt(mc) * parseFloat(pcs)).toFixed(2);
  h2TotalKwh.textContent = `Total Kwh: ${totalKwh} kwh`;
};

const getTotalPriceFaraTva = () => {
  let kwh = pret1Kwh.value;
  totalLeiFaraTva = (totalKwh * parseFloat(kwh)).toFixed(2);
  h2TotalFaraTva.textContent = `Total lei (fara TVA): ${totalLeiFaraTva} lei`;
};

const getValoareTva = () => {
  totalLeiTVA19 = ((19 / 100) * totalLeiFaraTva).toFixed(2);
  h2Tva.textContent = `Valoare TVA 19%: ${totalLeiTVA19} lei`;
};

const getTotalFactura = () => {
  totalFactura = (
    parseFloat(totalLeiFaraTva) + parseFloat(totalLeiTVA19)
  ).toFixed(2);
  h2TotalFactura.textContent = `Total Factura: ${totalFactura} lei`;
};

calculeazaBtn.addEventListener("click", () => {
  if (mcInput.value.includes(".")) {
    alert("Metrii cubi nu pot contine zecimale!");
    return;
  }
  if (mcInput.value === "" || pcsInput.value === "" || pret1Kwh.value === "") {
    alert("Completati toate campurile cu un numar!");
    return;
  }
  if (
    parseFloat(mcInput.value) <= 0 ||
    parseFloat(pcsInput.value) <= 0 ||
    parseFloat(pret1Kwh.value) <= 0
  ) {
    alert("Valorile trebuie sa fie pozitive!");
    return;
  }
  getTotalKwh();
  getTotalPriceFaraTva();
  getValoareTva();
  getTotalFactura();
});
