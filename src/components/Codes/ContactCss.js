const contactCss = `/* Contacts.scss */

// styles/contact.scss

@import "colors";

#contact {
  height: auto;
  max-width: 100%;
  margin: 0 auto;
  padding: 40px;
  background-color: $primary-color;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  color: $light-color;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center; 

  h2 {
    text-align: center;
    font-size: 56px;
    font-weight: 400;
    margin: 50px 0 20px 0;
    color: $third-color;
    position: relative;
    border-bottom: 3px groove $light-color;
    border-radius: 8px;
  }

  .contact-container {
    width: 100%;
    max-width: 1240px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-top: 40px;
    padding: 50px;
    border: 2px solid;
    border-radius: 20px;

    .contact-form {
      flex: 1; 
      text-align: left;

      label {
        font-size: 20px;
      }

      form {
        display: grid;
        gap: 20px;

        input,
        textarea,
        button {
          width: 70%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1rem;
        }

        textarea {
          resize: none;
        }

        button {
          background-color: $secondary-color;
          color: $light-color;
          cursor: pointer;
          transition: background-color 0.3s;
          border: none;
          width: 20%;
        }

        button:hover {
          background-color: $fourth-color;
          color: $primary-color;
        }
      }
    }

    .contact-info {
      flex: 1; 
      display: flex;
      flex-direction: column;
      align-items: center; 
      justify-content: flex-start; 
      gap: 20px;

      .info-item {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border: 1px solid;
        border-radius: 8px;
        padding: 20px 20px;

        h3 {
          font-size: 24px;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        img {
          width: 30px;
          margin-right: 10px;
        }

        p {
          font-size: 1.2rem;
        }
      }
    }
  }
  .code-icon-container {
    position: absolute; 
    bottom: 20px; 
    right: 20px; 
    color: $light-color; 
    font-size: 2em; 
    cursor: pointer; 
    z-index: 10; 
  }
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  #contact {
    padding: 20px; 
    .contact-container {
      padding: 10px;
      border-width: 1px; 
      border-radius: 12px; 

      .contact-info {
        .info-item {
          padding: 0px 0px; 
          flex-direction: column; 
          width: 80%; 
          margin: 0 auto; 
          text-align: center; 
        }
      }
    }
  }
  .contact-form {
    display: none;
  }
  #contact h2 {
    font-size: 36px;
  }
}`

export default contactCss
