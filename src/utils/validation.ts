import CryptoJS from 'crypto-js';
import { SECRET_KEY } from 'src/config';
import { getCookie } from 'cookies-next';

export const PATTERNS = {
  PASSWORD: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,24}$/,
  MPIN: /^(?!(.)\1{3})(?!19|20)\d{4}$/,
  MOBILE: /^[6789]\d{9}$/,
  DTH: /^[0-9]{5,}$/,
  NAME: /^([a-z]|[A-Z]|\s){2,}$/,
  PERSON_NAME: /^[a-zA-Z]+[a-zA-z\s]$/,
  FIRST_LAST_NAME: /^[a-zA-Z]+ [a-zA-Z]+$/,
  TEXT_MIN_3: /^[a-zA-Z\s]{3,}$/,
  LENGTH_MIN_10: /^.{10,}$/,
  TEXT: /^[a-zA-Z0-9\s]{1,}$/,
  ALLPHABETS: /^[a-zA-Z\s]{1,}$/,
  BANK_NAME: /^[a-zA-Z\s-]{9,}$/,
  STATE_NAME: /^[a-zA-Z\s-]{3,}$/,
  OPERATOR: /^[a-zA-Z\s-]{3,}$/,
  IFSC: /^[A-Za-z]{4}[0-9a-zA-Z]{7}$/,
  AMT_10_25k:
    /^([1-9]{1}[0-9]{1}|[1-9]{1}[0-9]{2,3}|[1]{1}[0-9]{1}[0-9]{0,3}|[2]{1}[0-4]{1}[0-9]{0,3}|25000)$/,
  AMT_10_10k: /^([1-9]{1}[0-9]{1}|[1-9]{1}[0-9]{2,3}|10000)$/,
  AMT_02_25k:
    /^([2-9]{1}|[1-9]{1}[0-9]{1}|[1-9]{1}[0-9]{2,3}|[1]{1}[0-9]{1}[0-9]{0,3}|[2]{1}[0-4]{1}[0-9]{0,3}|25000)$/,
  EMAIL: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
  PAN: /^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/,
  AADHAAR: /^[0-9]{12}$/,
  TEXT_MIN_16: /^[0-9]{16}$/,
  // UPI: /^([\w.-]*[@][\w]*)$/,
  UPI: /^[\w.\-_]{3,}@[a-zA-Z]{3,}$/,
  ALPHA_NUMERICS: /^[A-Za-z0-9]+$/,
  NUMERICS: /^[0-9]+$/,
  CA_NUMBER: /^[A-Za-z0-9]{6,}$/,
  ACCOUNT_NUMBER: /^(([A-Za-z]|[0-9]){5,16})$/,
  PIN: /^[1-9]{1}\d{2}\s?\d{3}$/,
  GSTIN: /^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1}$/,
  ONLY_NUMBERS: /^\d+$/,

};

export const isValid = async (regEx: any, data: any) => {
  if (regEx && data) {
    return regEx.test(data);
  }
  return false;
};

export const isValidData = async (dataArray: any) => {
  const validRes: any = { isValid: true, error: [] };
  for (const obj of dataArray) {
    const flag: any = isValid(obj.regEx, obj.value);
    if (obj.isRequired && !flag) {
      validRes.isValid = false;
      validRes.error.push(obj.error);
    }
  }
  return validRes;
};

export const validateInput = (value: any, regEx: any) => regEx.test(value);

export const encryptData = (param: any) => {
  if (param) {
    const data = CryptoJS.AES.encrypt(JSON.stringify(param), SECRET_KEY)?.toString();
    return data ? data : false;
  } else {
    return false;
  }
};

export const decryptData = (param: any) => {
  const encrypted: any = getCookie(param);

  if (encrypted) {
    try {
      const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY)?.toString(CryptoJS.enc.Utf8);

      if (decrypted) {
        return JSON.parse(decrypted);
      } else {
        console.error('Decryption failed. Decrypted value is empty.');
        return false;
      }
    } catch (error) {
      console.error('Decryption failed. Error:', error.message);
      return false;
    }
  } else {
    console.error('No encrypted data found in the cookie.');
    return false;
  }
};
