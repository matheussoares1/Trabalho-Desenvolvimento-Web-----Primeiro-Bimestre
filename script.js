const principalInput = document.getElementById("principal");
const interestRateInput = document.getElementById("interest-rate");
const termInput = document.getElementById("term");
const interestTypeSelect = document.getElementById("interest-type");
const interestOutput = document.getElementById("interest");
const calculateBtn = document.getElementById("calculate-btn");
const clearBtn = document.getElementById("clear-btn");

calculateBtn.addEventListener("click", calculateInterest);
clearBtn.addEventListener("click", clearInputs);

function calculateInterest() {
  const principal = Number(principalInput.value);
  const interestRate = Number(interestRateInput.value) / 100;
  const term = Number(termInput.value);
  const interestType = interestTypeSelect.value;

  let interest;

  if (interestType === "simple") {
    interest = principal * interestRate * term;
  } else {
    interest = principal * (1 + interestRate) ** term - principal;
  }

  interestOutput.value = interest.toFixed(2);
}

function clearInputs() {
  principalInput.value = "";
  interestRateInput.value = "";
  termInput.value = "";
  interestTypeSelect.selectedIndex = 0;
  interestOutput.value = "";
}

const modeToggle = document.createElement("button");
modeToggle.innerHTML = "<i class='fas fa-sun'></i>";
modeToggle.classList.add("mode-toggle");
document.body.appendChild(modeToggle);

modeToggle.addEventListener("click", toggleMode);

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    if (modeToggle.innerHTML === "<i class='fas fa-sun'></i>") {
    modeToggle.innerHTML = "<i class='fas fa-moon'></i>";
    } else {
    modeToggle.innerHTML = "<i class='fas fa-sun'></i>";
    }
    }