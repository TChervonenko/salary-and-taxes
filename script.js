  function calcMilitaryTax(salary, bruttoSalary, percentTaxMilitary) {
    return salary / bruttoSalary * percentTaxMilitary;
  }

  function calcIndividualTax(salary, bruttoSalary, percentTaxIndividuals) {
    return salary/bruttoSalary*percentTaxIndividuals;
  }


function taxesCalculations () {
    let result = document.querySelector('.result');
    let salary = document.getElementById('salary').value;
    const bruttoSalary = 0.805;
    const percentTaxMilitary = 0.015;
    const percentTaxIndividuals = 0.18;
    let taxMilitary = calcMilitaryTax(salary, bruttoSalary, percentTaxMilitary);
    let taxIndividuals = calcIndividualTax(salary, bruttoSalary, percentTaxIndividuals);

    result.innerHTML = `
    <p>Ваша зарплата за рік:${salary}</p>
    <p>Ви сплатили воєнний збір:${taxMilitary}</p>
    <p>Ви сплатили податок з доходів фізичних осіб:${taxIndividuals}</p>`;
}