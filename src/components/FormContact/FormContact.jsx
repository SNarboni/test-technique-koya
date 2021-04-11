import React from "react";
import { useForm, Controller } from "react-hook-form";

import PhoneInput from "react-phone-input-2";

import "./FormContact.css";
import "react-phone-input-2/lib/style.css";
import "react-phone-input-2/lib/bootstrap.css";

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};

const FormContact = ({ check }) => {


  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitted, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data, isSubmitted) => {
    await wait(1000);
    console.log(data);

    // requete POST vers le server

    // verification si le formulaire a bien été envoyé
    check(isSubmitted); // envoie l'information a Form.jsx
  };

  return (
    <div className="contact-form">
      {/* -----------------------------------FORM---------------------------- */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* -----------------------------------FIRSTNAME---------------------------- */}

        <div className="form-group">
          <h4 htmlFor="name">Nom</h4>
          <input
            className="form-control item"
            type="text"
            name="name"
            id="name"
            {...register("name")}
          />
        </div>

        {/* -----------------------------------FIRSTNAME---------------------------- */}

        <div className="form-group">
          <h4 htmlFor="firstName">Prénom</h4>
          <input
            className="form-control item"
            type="text"
            name="firstName"
            id="firstName"
            {...register("firstName")}
          />
        </div>

        {/* -----------------------------------EMAIL---------------------------- */}

        <div className="form-group">
          <h4 htmlFor="email">Email</h4>

          <input
            className="form-control item"
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: "Merci d'entrer votre adresse mail",
            })}
          />
          {/* message d'erreur si mal complété */}
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        {/* -----------------------------------MESSAGE---------------------------- */}

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
          {/* message d'erreur si mal complété */}
          {errors.message && (
            <p className="error-message">{errors.message.message}</p>
          )}
        </div>

        {/* -----------------------------------PHONE---------------------------- */}

        <div className="form-group">
          <h4 htmlFor="phoneNumber">Téléphone</h4>

          <Controller
            // utilisation des Controllers React-hook-form

            control={control}
            name="phoneNumber"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              // utilisation du packet npm React-Phone-Input-2  https://www.npmjs.com/package/react-phone-input-2

              <PhoneInput
                buttonStyle={{ borderColor: "#085e6d", borderStyle: "solid" }}
                inputStyle={{
                  width: "100%",
                  borderColor: "#085e6d",
                  borderStyle: "solid",
                }}
                country={"fr"}
                regions={"europe"}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
          />
        </div>

        {/* -----------------------------------SELECT---------------------------- */}

        <div className="form-group">
          <h4 htmlFor="contactType">Type de contact</h4>
          <select
            className="form-control select"
            name="contactType"
            id="contactType"
            {...register("contact", {
              required: "Veuillez choisir un destinataire",
            })}
          >
            <option value="" selected disabled hidden>
              type de contact
            </option>
            <option value="koya@gmail.com">Koya</option>
            <option value="mentor@gmail.com">Mentor</option>
            <option value="public@gmail.com">Public</option>
          </select>
          {/* message d'erreur si mal complété */}
          {errors.contact && (
            <p className="error-message">{errors.contact.message}</p>
          )}
        </div>

        {/* -----------------------------------CHECKBOX---------------------------- */}

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="conditions"
            {...register("conditions", {
              required: "Merci d'accepter les conditions",
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Accepter les conditions d'utilisation
          </label>
          {/* message d'erreur si mal complété */}
          {errors.conditions && (
            <p className="error-message mt-2">{errors.conditions.message}</p>
          )}
        </div>

        {/* -------------------------------------BUTTON---------------------------- */}

        <div className="form-group">
          <button
            className="btn btn-block my-button"
            type="submit"
            // condition pour activer ou non le button "Envoyé"
            disabled={!isValid || isSubmitting}
            // activation du button si tous les champs requis ont été remplis
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
