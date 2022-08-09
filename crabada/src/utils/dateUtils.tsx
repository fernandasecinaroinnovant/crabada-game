export const subtractMonthsToDate = (
  monthsToSubtract: number,
  date: Date
): Date => {
  date.setMonth(date.getMonth() - monthsToSubtract);
  return date;
};

export const addDaysToDate = (daysToAdd: number, date: Date) => {
  date.setDate(date.getDate() + daysToAdd);
  return date;
};
