export const utilities = [
  {
    title: "faToEnDigits",
    description: "Convert Persian digits to English digits",
    language: "typescript",
    code: `
export const faToEnDigits = (input: string) =>
  input.replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1728));
    `,
  },
  {
    title: "enToFaDigits",
    description: "Convert English digits to Persian digits",
    language: "typescript",
    code: `
export const enToFaDigits = (input: string) =>
  input.replace(/[0-9]/g, (d) => String.fromCharCode(d.charCodeAt(0) + 1728));
    `,
  },
  {
    title: "truncateText",
    description: "Truncate long text and append '...'",
    language: "typescript",
    code: `
export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
    `,
  },
  {
    title: "formatPhoneNumber",
    description: "Format Iranian phone numbers as +98 XXX XXX XXXX",
    language: "typescript",
    code: `
export function formatPhoneNumber(phone: string): string {
  if (!phone) return '';
  return phone.replace(/^\+98(\\d{3})(\\d{3})(\\d{4})$/, '+98 $1 $2 $3');
}
    `,
  },
  {
    title: "convertEnglishNumbersToPersian",
    description: "Convert English digits to Persian digits",
    language: "typescript",
    code: `
export function convertEnglishNumbersToPersian(input: string): string {
  const enNums = ['0','1','2','3','4','5','6','7','8','9'];
  const faNums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  let output = '';
  for (const ch of input) {
    const index = enNums.indexOf(ch);
    output += index >= 0 ? faNums[index] : ch;
  }
  return output;
}
    `,
  },
  {
    title: "toStandardNumber",
    description: "Convert Persian/Arabic digits to standard English numbers",
    language: "typescript",
    code: `
export const toStandardNumber = (number: any): string =>
  \`\${number}\`.replace(/[\\u0660-\\u0669]/g, c => c.charCodeAt(0) - 0x0660)
               .replace(/[\\u06f0-\\u06f9]/g, c => c.charCodeAt(0) - 0x06f0);
    `,
  },
  {
    title: "hasValue",
    description: "Check if a value exists and is not empty",
    language: "typescript",
    code: `
export const hasValue = (value: any): boolean => !!value?.toString().trim()?.length;
    `,
  },
  {
    title: "truncate",
    description: "Truncate a string to a certain length and add '...'",
    language: "typescript",
    code: `
export const truncate = (value: string, limit: number): string =>
  value?.length > limit ? value?.substring(0, limit - 3) + "..." : value;
    `,
  },
  {
    title: "makeFormData",
    description: "Convert object payload to FormData for file uploads",
    language: "typescript",
    code: `
export const makeFormData = (payload: object) => {
  const body = new FormData();
  Object.entries(payload).forEach(([key,value]) => {
    if(!value) return null;
    if(key === "file") {
      let uri = payload.file?.[0]?.uri;
      if(uri) body.append("file",{ uri, name:"image.jpg", type:"image/jpg" });
    } else body.append(key,value);
  });
  return body;
};
    `,
  },
  {
    title: "formatPrice",
    description: "Format number as price with commas",
    language: "typescript",
    code: `
export const formatPrice = (number: number | string): string => {
  let localNumber = typeof number === "number" ? number.toString() : number;
  return localNumber.replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,");
};
    `,
  },
  {
    title: "replaceWithStar",
    description: "Replace part of a string with asterisks",
    language: "typescript",
    code: `
export const replaceWithStar = (str: string, from: number, replaceLength: number) => {
  const stars = "*".repeat(replaceLength);
  return str.substring(0,from) + stars + str.substring(from+replaceLength);
};
    `,
  },
  {
    title: "pattern",
    description: "Common regex patterns for validation",
    language: "typescript",
    code: `
export const pattern = {
  email: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
  specialChar: /^(?=.*[!@#$%^&*]).*$/,
  digit: /^(?=.*[0-9]).*$/,
  upperCase: /^(?=.*[A-Z]).*$/,
  lowerCase: /^(?=.*[a-z]).*$/,
  nationalCode: /^(?!(\\d)\\1{9})\\d{10}$/,
  carTag: /^[0-9]{2}[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی][0-9]{3}[0-9]{2}$/
};
    `,
  },
];
