import React, { useState } from "react";
import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "0 0",
      padding: "20px",
      backgroundColor: "black",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    formRow: {
      marginBottom: "5px",
    },
    formInput: {
      width: "100%",
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    errorMessage: {
      color: "red",
      fontSize: "12px",
    },
    submitBtn: {
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        'service_xmnhaxd',
        'template_f9tjhmi',
        templateParams,
        'gz4lWS4WmJMoAaR8Q'
      );

      // Display success alert
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className="ContactForm">
      <div className="container" style={styles.container}>
        <div className="row">
          <div className="col-12 text-center text-black">
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}

                <div className="row formRow" style={styles.formRow}>
                  <div className="col-6">
                    <h1 className="text-white flex justify-start py-1 font-bold">
                      Your Name
                    </h1>

                    <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="form-control formInput"
                      style={styles.formInput}
                      placeholder="Enter Your Name"
                    ></input>
                    {errors.name && (
                      <span style={styles.errorMessage}>
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="col-6 mt-3">
                    <h1 className="text-white flex justify-start py-1 font-bold">
                      Your Email
                    </h1>

                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="form-control formInput"
                      style={styles.formInput}
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <span style={styles.errorMessage}>
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}

                <div className="row formRow" style={styles.formRow}>
                  <div className="col">
                    <h1 className="text-white flex justify-start py-1 font-bold">
                      Subject
                    </h1>

                    <input
                      type="text"
                      name="subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please enter a subject",
                        },
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                      className="form-control formInput"
                      style={styles.formInput}
                      placeholder="Subject"
                    ></input>
                    {errors.subject && (
                      <span style={styles.errorMessage}>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}

                <div className="row formRow" style={styles.formRow}>
                  <div className="col">
                    <h1 className="text-white flex justify-start py-1 font-bold">
                      Message
                    </h1>

                    <textarea
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput"
                      style={styles.formInput}
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <span style={styles.errorMessage}>
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>

                <button
                  className="submit-btn bg-gradient-to-br from-[#183c2a] via-[#11823b] to-[#48bf53] hover:bg-white w-full"
                  type="submit"
                  style={styles.submitBtn}
                >
                  Submit
                </button>
                {alertInfo.display && (
                  <div
                    className={`alert alert-${alertInfo.type} alert-dismissible mt-5 flex justify-center`}
                    role="alert"
                  >
                    {alertInfo.message}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      onClick={() =>
                        setAlertInfo({ display: false, message: "", type: "" })
                      } // Clear the alert when close button is clicked
                    ></button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-2 flex justify-center`}
          role="alert"
        >
          {alertInfo.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() =>
              setAlertInfo({ display: false, message: "", type: "" })
            }
          ></button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
