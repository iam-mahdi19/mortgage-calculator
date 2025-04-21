let calculate = document.getElementById('calculate');
let repayment = document.getElementById('repayment');
let interestOnly = document.getElementById('interest-only');
let checking = document.getElementById('checking');

calculate.addEventListener('click', calculateMortgage);
repayment.addEventListener('mousedown', disableButton2);
interestOnly.addEventListener('mousedown', disableButton1);

function disableButton2(e) {
	e.preventDefault();
	interestOnly.checked = false;
}

function disableButton1(e) {
	e.preventDefault();
	repayment.checked = false;
}

function calculateMortgage(e) {
	e.preventDefault();

	let mortgageAmount = document.getElementById('mortgage-amount').value;
	let mortgageTerm = document.getElementById('mortgage-term').value;
	let interestRate = document.getElementById('interest-rate').value;
  let monthly = document.getElementById('monthly');
  let total = document.getElementById('total');
  let change = document.getElementById('change')

	let principal = Number(mortgageAmount);
	let n = Number(mortgageTerm) * 12;
	let r = Number(interestRate) / 100 / 12;

	monthlyRepayment = ((principal * r) / (1 - (1 + r) ** -n)).toFixed(2);
	totalRepayment = monthlyRepayment * n;
	totalInterest = totalRepayment - principal;

	if (repayment.checked) {
    monthly.textContent = `$ ${monthlyRepayment}`
    change.textContent = `Total you'll repay the term.`
    total.textContent = `$ ${totalRepayment}`
	} else if (interestOnly.checked) {
    monthly.textContent = `$ ${monthlyRepayment}`
    change.textContent = `Your total interest by the end of the term.`
    total.textContent = `$ ${totalInterest}`
	}
}
