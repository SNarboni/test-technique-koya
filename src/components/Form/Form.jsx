import { useState } from "react";
import FormContact from "../FormContact/FormContact";
import FormSucces from "../FormSucces/FormSucces";
import "./Form.css";

const Form = () => {
  const [formValid, setFormValid] = useState(false);

  const changeView = () => {
    setFormValid(!formValid);
  };

  if (formValid) {
    return (
      <>
        <FormSucces check={changeView}></FormSucces>
      </>
    );
  } else {
    return (
      <>
        <FormContact check={changeView}></FormContact>
      </>
    );
  }
};

export default Form;
