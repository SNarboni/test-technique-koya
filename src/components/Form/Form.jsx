import { useState } from "react";
import FormContact from "../FormContact/FormContact";
import FormSucces from "../FormSucces/FormSucces";
import "./Form.css";

const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const check = (bool) => {
    // vérification si le formulaire a bien été envoyé
    setFormSubmitted(bool);

  };

  if (formSubmitted) {
    // si oui on affiche FormSucces
    return (
      <>
        <FormSucces check={check}></FormSucces>
      </>
    );
  } else {
    return (
    // si non on affiche FormContact
      <>
        <FormContact check={check}></FormContact>
      </>
    );
  }
};

export default Form;
