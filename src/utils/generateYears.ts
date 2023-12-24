const generateYears = (): number[] => {
  const startYear = 1950;
  const endYear = new Date().getFullYear();
  const years: number[] = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return years;
};
export default generateYears;
