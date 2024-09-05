import { ValidationConfig, ValidationError } from "./types";

export function generateTitle(pathname: string): void {
  let title: string;

  switch (pathname) {
    case "/": {
      title = "Početna";
      break;
    }
    case "/o-nama": {
      title = "O nama";
      break;
    }
    case "/kontakt": {
      title = "Kontakt";
      break;
    }
    case "/politika-privatnosti": {
      title = "Politika privatnosti";
      break;
    }
    case "/uslovi-koriscenja": {
      title = "Uslovi korišćenja";
      break;
    }
    case "/dostava": {
      title = "Dostava";
      break;
    }
    default: {
      title = "Invalid URL";
      break;
    }
  }

  document.title = `Privezak | ${title}`;
}

export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const validateInput = (enteredField: string): boolean => {
  return enteredField.length >= 3;
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10,15}$/;
  return phoneRegex.test(phone);
};

export function filterError(
  validationConfig: ValidationConfig
): ValidationError {
  return validationConfig.errors?.filter(
    (err) => err.path === validationConfig.path
  )[0];
}
