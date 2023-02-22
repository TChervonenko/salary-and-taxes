function taxesCalculations () {
    let result = document.querySelector('.result');
    let salary = document.getElementById('salary').value;
    const bruttoSalary = 0.805;
    const percentTaxMilitary = 0.015;
    const percentTaxIndividuals = 0.18;
    let taxMilitary = salary/bruttoSalary*percentTaxMilitary;
    let taxIndividuals = salary/bruttoSalary*percentTaxIndividuals;

    result.innerHTML = `
    <p>Ваша зарплата за рік:${salary}</p>
    <p>Ви сплатили воєнний збір:${taxMilitary}</p>
    <p>Ви сплатили податок з доходів фізичних осіб:${taxIndividuals}</p>`;
}