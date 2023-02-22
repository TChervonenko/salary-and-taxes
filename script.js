function taxesCalculations () {
    let result = document.querySelector('.result');
    let salary = document.getElementById('salary').value;
    let taxMilitary = salary/0.805*0.015;
    let taxIndividuals = salary/0.805*0.18;

    result.innerHTML = `
    <p>Ваша зарплата за рік:${salary}</p>
    <p>Ви сплатили воєнний збір:${taxMilitary}</p>
    <p>Ви сплатили податок з доходів фізичних осіб:${taxIndividuals}</p>`;
}