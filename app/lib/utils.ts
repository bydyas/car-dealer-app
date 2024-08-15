export function generateVehicleModelYears(startYear: number = 2015) {
  const currentYear = new Date().getFullYear();
  const years = [];
  
  for (let year = startYear; year <= currentYear; year++) {
    years.push(year.toString());
  }
  
  return years;
}
