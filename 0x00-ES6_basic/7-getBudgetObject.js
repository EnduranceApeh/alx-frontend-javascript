export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
