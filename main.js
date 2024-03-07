window.onload = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    calc(); // Call calculation function
  });

  // Get the current year and update the footer
  const currentYear = new Date().getFullYear();
  const yearSpan = document.getElementById("copyrightYear");
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }
};

function calc() {
  const values = document.getElementById("payband").value.split(",");
  const numberOfYears = document.getElementById("numberOfYearsId").value;

  const startingBasic = parseInt(values[0]);
  const ta = parseInt(values[1]);

  let basic = startingBasic;

  for (let i = 0; i < numberOfYears; i++) {
    basicTemp = basic + basic * 0.03;
    basicTemp = Math.round(basicTemp / 100) * 100;
    if (basicTemp > 250000) {
      break;
    }
    basic = basicTemp;
  }


  document.getElementById("basicId").innerHTML = basic;

  const da = basic * 0.50;
  document.getElementById("daId").innerHTML = da;

  const hra = basic * 0.09;
  document.getElementById("hraId").innerHTML = hra;

  document.getElementById("taId").innerHTML = ta;

  const daOnTa = ta * 0.46;
  document.getElementById("daOnTaId").innerHTML = daOnTa;
  
  const ma = 300;
  document.getElementById("maId").innerHTML = ma;

  const gross = basic + da + hra + ta + daOnTa + ma;
  document.getElementById("grossId").innerHTML = gross;

  const nps = (basic + da) * 0.1;
  document.getElementById("npsId").innerHTML = nps.toFixed(0);

  const net = gross - nps;
  document.getElementById("netId").innerHTML = net.toFixed(0);

  document.getElementById("salaryComponents").style.display = "block";
}
