window.onload = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    calc(); // Call your calculation function
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
    basic = basic + basic * 0.03;
  }

  basic = Math.round(basic / 100) * 100;

  document.getElementById("basicId").innerHTML = basic;

  const da = basic * 0.46;
  document.getElementById("daId").innerHTML = da;

  const hra = basic * 0.09;
  document.getElementById("hraId").innerHTML = hra;

  document.getElementById("taId").innerHTML = ta;

  const daOnTa = ta * 0.46;
  document.getElementById("daOnTaId").innerHTML = daOnTa;

  const gross = basic + da + hra + ta + daOnTa;
  document.getElementById("grossId").innerHTML = gross;

  const nps = (basic + da) * 0.1;
  document.getElementById("npsId").innerHTML = nps.toFixed(0);

  const net = gross - nps;
  document.getElementById("netId").innerHTML = net.toFixed(0);

  document.getElementById("salaryComponents").style.display = "block";
}
