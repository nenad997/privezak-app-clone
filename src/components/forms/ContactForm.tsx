import { useState, FormEvent, ChangeEvent, memo } from "react";

import classes from "./ContactForm.module.css";
import Input, { TextArea } from "../ui/Input";
import Button from "../ui/Button";
import { ContactFormInputs, ValidationError } from "../../util/types";
import {
  validateEmail,
  validateInput,
  validatePhone,
} from "../../util/helpers";

const DEFAULT_INPUTS: ContactFormInputs = {
  ime: "",
  prezime: "",
  email: "",
  telefon: "",
  poruka: "",
};

const ContactForm = memo(() => {
  const [inputs, setInputs] = useState<ContactFormInputs>(DEFAULT_INPUTS);
  const [errors, setErrors] = useState<null | undefined | ValidationError[]>();

  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isImeValid = validateInput(inputs.ime);
    const isPrezimeValid = validateInput(inputs.prezime);
    const isEmailValid = validateEmail(inputs.email);
    const isTelefonValid = validatePhone(inputs.telefon);
    const isPorukaValid = validateInput(inputs.poruka);

    const validationErrors: ValidationError[] = [];

    if (!isImeValid) {
      validationErrors.push({
        path: "ime",
      });
    }

    if (!isPrezimeValid) {
      validationErrors.push({
        path: "prezime",
      });
    }

    if (!isEmailValid) {
      validationErrors.push({
        path: "email",
      });
    }

    if (!isTelefonValid) {
      validationErrors.push({
        path: "telefon",
      });
    }

    if (!isPorukaValid) {
      validationErrors.push({
        path: "poruka",
      });
    }

    if (validationErrors.length > 0) {
      setErrors(
        validationErrors.map((err) => ({
          path: err.path,
          message: "Neispravan unos!",
        }))
      );
      return;
    }

    console.log(inputs);
    setErrors(null);
    setInputs(DEFAULT_INPUTS);
  };

  const changeInputHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setInputs((curInputs) => ({
      ...curInputs,
      [name]: value,
    }));
  };

  return (
    <div className={classes.contact__form}>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <Input
              label="Ime *"
              config={{
                type: "text",
                id: "ime",
                name: "ime",
                onChange: changeInputHandler,
                value: inputs.ime,
              }}
              validationConfig={{
                errors: errors!,
                path: "ime",
              }}
            />
          </div>
          <div className={classes.control}>
            <Input
              label="Prezime *"
              config={{
                type: "text",
                id: "prezime",
                name: "prezime",
                onChange: changeInputHandler,
                value: inputs.prezime,
              }}
              validationConfig={{
                errors: errors!,
                path: "prezime",
              }}
            />
          </div>
        </div>
        <div className={classes.controls}>
          <div className={classes.control}>
            <Input
              label="Email adresa *"
              config={{
                type: "email",
                id: "email",
                name: "email",
                onChange: changeInputHandler,
                value: inputs.email,
              }}
              validationConfig={{
                errors: errors!,
                path: "email",
              }}
            />
          </div>
          <div className={classes.control}>
            <Input
              label="Telefon *"
              config={{
                type: "text",
                id: "telefon",
                name: "telefon",
                onChange: changeInputHandler,
                value: inputs.telefon,
              }}
              validationConfig={{
                errors: errors!,
                path: "telefon",
              }}
            />
          </div>
        </div>
        <div className={classes.control}>
          <TextArea
            label="Poruka *"
            config={{
              id: "poruka",
              name: "poruka",
              onChange: changeInputHandler,
              value: inputs.poruka,
            }}
            validationConfig={{
              errors: errors!,
              path: "poruka",
            }}
          />
        </div>
        <Button
          config={{
            type: "submit",
          }}
        >
          Pošalji
        </Button>
      </form>
    </div>
  );
});

export default ContactForm;
