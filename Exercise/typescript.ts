export function decimalNumber(num:any) {
  return Math.round(num * 100) / 100;
}

export function setData(data: string, value: any) {
  localStorage.setItem(data, JSON.stringify(value));
}