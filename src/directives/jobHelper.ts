const calculateYear = (startDate: Date, endDate?: Date) => {
  const format = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}`;
  };

  const start = format(startDate);
  if (!endDate) {
    return `${start} - Present`;
  }
  const end = format(endDate);

  return `${start} - ${end}`;
};

const calculateWorkingTime = (startDate: Date, endDate?: Date) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth() + 1);

  const years = Math.floor(months / 12);

  if (years >= 1) {
    return `${years}+ year${years !== 1 ? "s" : ""}`;
  }

  return `${months} month${months !== 1 ? "s" : ""}`;
};

export { calculateYear, calculateWorkingTime };
