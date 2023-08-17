const subButt = document.getElementById("subButt");
subButt.addEventListener("click", calculateCC);

function calculateCC() {
  const lunch = document.getElementById("lunch");
  const brunch = document.getElementById("brunch");
  const totalCC = document.getElementById("total-cc").value;
  const AMCC = document.getElementById("AM-cc").value;
  const barCC = document.getElementById("bar-cc").value;
  const doorDash = document.getElementById("door-dash").value;
  const numbServers = document.getElementById("numb-server").value;
  const busserCheck = document.getElementById("busser");
  const barCheck = document.getElementById("bartender");
  const hostCheck = document.getElementById("hostess");

  let busserCC = 0;
  let bartenderCC = 0;
  let hostessCC = 0;
  let busRate = 0.12;
  let hostRate = 0.1;

  let PMCC = totalCC - AMCC - barCC - doorDash;

  if (lunch.checked) {
    if (numbServers === 2) {
      if (busserCheck.checked && hostCheck.checked) {
        hostRate = 0.15;
        busRate = 0.15;
      } else {
        hostRate = 0.2;
        busRate = 0.2;
      }
    } else if (numbServers > 2) {
      hostRate = 0.15;
      busRate = 0.15;
    }
  }

  if (brunch.checked) {
    if (numbServers === 4 || numbServers === 5) {
      if (busserCheck.checked && hostCheck.checked) {
        hostRate = 0.1;
        busRate = 0.1;
      } else {
        hostRate = 0.12;
        busRate = 0.12;
      }
    } else if (numbServers >= 6) {
      hostRate = 0.08;
      busRate = 0.08;
    }
  }

  if (busserCheck.checked) {
    console.log("bus");
    busserCC = PMCC * busRate + barCC * busRate;
  }

  if (barCheck.checked) {
    bartenderCC = PMCC * 0.1;
    console.log("bar");
  }

  if (hostCheck.checked) {
    hostessCC = PMCC * hostRate + barCC * hostRate;

    console.log("host");
  }

  let serverCC = (PMCC - busserCC - bartenderCC - hostessCC) / numbServers;

  const results = document.querySelector(".results");
  results.textContent = `Server CC Tips = $${serverCC} \r\n Busser CC Tips = $${busserCC} \r\n Bartender CC Tips = $${bartenderCC} \r\n Hostess CC Tips = $${hostessCC}`;
}
