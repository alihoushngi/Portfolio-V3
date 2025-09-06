export const faToEnDigits = (input: string) =>
  input.replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1728));
