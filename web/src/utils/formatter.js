const formatter = new Intl.NumberFormat();

export const numberFormat = number => formatter.format(number);