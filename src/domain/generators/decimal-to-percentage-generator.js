export async function decimalToPercentage(decimal) {
  if (decimal === 0) {
    return "0";
  }
  if (decimal === 1) {
    return "100";
  }

  const stringDecimal = decimal.toString();
  const rawPercentage = stringDecimal.substring(2);
  const percentage = rawPercentage.startsWith("0") ? "0" : rawPercentage;

  return percentage;
}
