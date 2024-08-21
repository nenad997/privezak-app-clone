import { useState, FormEvent, ChangeEvent } from "react";

import classes from "./ContactForm.module.css";
import Input, { TextArea } from "../ui/Input";

const ContactForm = () => {
  const defaultInputs = {
    ime: "",
    prezime: "",
    email: "",
    telefon: "",
    poruka: "",
  };

  const [inputs, setInputs] = useState(defaultInputs);

  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(inputs);
  };

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputs((currentInputs) => ({
      ...currentInputs,
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
            />
          </div>
        </div>
        <div className={classes.text__area}>
          <TextArea
            label="Poruka *"
            config={{
              id: "poruka",
              name: "poruka",
              onChange: changeInputHandler,
              value: inputs.poruka,
            }}
          />
        </div>
        <button className={classes.button} type="submit">
          Pošalji
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
