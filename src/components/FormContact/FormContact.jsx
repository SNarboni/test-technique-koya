import { useState } from "react";
import { useForm } from "react-hook-form";
import "./FormContact.css";

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};

const FormContact = ({ check }) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = async (data) => {
    console.log(data);
    await wait(1000);
    check();
  };

  const [accepted, setAccepted] = useState(false);

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <h4 htmlFor="name">
            Nom
          </h4>
          <input
            className="form-control item"
            type="text"
            name="name"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="form-group">
          <h4 className="" htmlFor="firstName">
            Prénom
          </h4>
          <input
            className="form-control item"
            type="text"
            name="firstName"
            id="firstName"
            {...register("firstName")}
          />
        </div>
        <div className="form-group">
          <h4 className="" htmlFor="email">
            Email
          </h4>
          <input
            className="form-control item"
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: "Merci d'entrer votre adresse mail",
            })}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <h4 className="" htmlFor="phone">
            Téléphone
          </h4>
          <input
            className="form-control item"
            type="number"
            {...register("phoneNumber")}
          />
        </div>
        <div className="form-group ">
          <h4 htmlFor="message">Message</h4>

          <textarea
            className="form-control item"
            type="text"
            name="message"
            id="message"
            {...register("message", {
              required: "Vous devez entrer un message",
              minLength: {
                value: 5,
                message: "le message doit contenir au moins 5 caractères",
              },
            })}
          />
          {errors.message && <p className="error-message">{errors.message.message}</p>}
        </div>
        <h4 htmlFor="contactType">Type de contact</h4>
        <div className="form-group">
          <select
            className="form-control select"
            name="contactType"
            id="contactType"
            {...register("contact", {required: "Veuillez choisir un destinataire"})}
          >
            <option value="" selected disabled hidden>type de contact</option>
            <option value="koya@gmail.com">Koya</option>
            <option value="mentor@gmail.com">Mentor</option>
            <option value="public@gmail.com">Public</option>
          </select>
          {errors.contact && <p className="error-message">{errors.contact.message}</p>}
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            required={!accepted}
            onClick={() => setAccepted(!accepted)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Accepter les conditions d'utilisation
          </label>
        </div>
        <div className="form-group">
          <button
            className="btn btn-block my-button"
            type="submit"
            disabled={!accepted || isSubmitting}
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
