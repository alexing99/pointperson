const subButt = document.getElementById("subButt");
subButt.addEventListener("click", calculateCC);

function calculateCC() {
  const totalCC = document.getElementById("total-cc").value;
  const AMCC = document.getElementById("AM-cc").value;
  const barCC = document.getElementById("bar-cc").value;
  const numbServers = document.getElementById("numb-server").value;
  const busserCheck = document.getElementById("busser");
  const barCheck = document.getElementById("bartender");
  const hostCheck = document.getElementById("hostess");

  console.log("yo", busserCheck, typeof busserCheck);

  let busserCC = 0;
  let bartenderCC = 0;
  let hostessCC = 0;

  let PMCC = totalCC - AMCC - barCC;

  if (busserCheck.checked) {
    console.log("bus");
    busserCC = PMCC * 0.12;
  }

  if (barCheck.checked) {
    bartenderCC = PMCC * 0.1;
    console.log("bar");
  }

  if (hostCheck.checked) {
    hostessCC = PMCC * 0.1;
    console.log("host");
  }

  let serverCC = (PMCC - busserCC - bartenderCC - hostessCC) / numbServers;

  const results = document.querySelector(".results");
  results.textContent = `Server CC Tips = $${serverCC}`;
}
