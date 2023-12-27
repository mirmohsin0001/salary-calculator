window.onload = () => {
  const button = document.getElementById("btn");

  button.addEventListener("click", calcSalary);
  document.getElementById("components").style.display = 'none';
  document.getElementById("message").style.display = 'none';
};

function calcSalary() {
  const level = parseInt(document.getElementById("level").value);

  const basicId = document.getElementById("basicId");
  const daId = document.getElementById("daId");
  const hraId = document.getElementById("hraId");
  const taId = document.getElementById("taId");
  const daOnTaId = document.getElementById("daOnTaId");
  const grossId = document.getElementById("grossId");
  const npsId = document.getElementById("npsId");
  const netId = document.getElementById("netId");

  var basicPay = 0;
  var ta = 0;

  switch (level) {
    case 1: {
      basicPay = 18000;
      ta = 900;
      break;
    }

    case 2: {
      basicPay = 19900;
      ta = 900;
      break;
    }

    case 3: {
      basicPay = 21700;
      ta = 1800;
      break;
    }

    case 4: {
      basicPay = 25500;
      ta = 1800;
      break;
    }

    case 5: {
      basicPay = 29200;
      ta = 1800;
      break;
    }

    case 6: {
      basicPay = 35400;
      ta = 1800;
      break;
    }

    case 7: {
      basicPay = 44900;
      ta = 1800;
      break;
    }

    case 8: {
      basicPay = 47600;
      ta = 1800;
      break;
    }

    case 9: {
      basicPay = 53100;
      ta = 3600;
      break;
    }

    case 10: {
      basicPay = 56100;
      ta = 3600;
      break;
    }

    case 11: {
      basicPay = 67700;
      ta = 3600;
      break;
    }

    case 12: {
      basicPay = 78800;
      ta = 3600;
      break;
    }

    case 13: {
      basicPay = 118500;
      ta = 3600;
      break;
    }

    case 14: {
      basicPay = 144200;
      ta = 3600;
      break;
    }

    case 15: {
      basicPay = 182200;
      ta = 3600;
      break;
    }

    case 16: {
      basicPay = 205400;
      ta = 3600;
      break;
    }

    case 17: {
      basicPay = 225000;
      ta = 3600;
      break;
    }

    case 18: {
      basicPay = 250000;
      ta = 3600;
      break;
    }

    default: {
      console.log("Case: default case");
      break;
    }
  }

  if (basicPay == 0) {
    

    document.getElementById("components").style.display = 'none';
    document.getElementById("message").style.display = 'block';
  } else {

    const da = basicPay * 0.44;
    const hra = basicPay * 0.09;
    const daOnTa = ta * 0.44;
    const gross = basicPay + da + hra + ta + daOnTa;
    const nps = (basicPay + da) * 0.1;
    const net = gross - nps;

    document.getElementById("components").style.display = 'block';
    document.getElementById("message").style.display = 'none';

    basicId.innerHTML = basicPay;
    daId.innerHTML = da;
    hraId.innerHTML = hra;
    taId.innerHTML = ta;
    daOnTaId.innerHTML = daOnTa;
    grossId.innerHTML = gross;
    npsId.innerHTML = nps.toFixed(0);
    netId.innerHTML = net.toFixed(0);

    console.log(basicPay, da, hra, ta, daOnTa, gross, nps, net);
  }
}
