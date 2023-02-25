function calcMilitaryTax(salary, bruttoSalary, percentTaxMilitary) {
    return (salary / bruttoSalary * percentTaxMilitary).toFixed(2);
  }

  function calcIndividualTax(salary, bruttoSalary, percentTaxIndividuals) {
    return (salary/bruttoSalary*percentTaxIndividuals).toFixed(2);
  }
