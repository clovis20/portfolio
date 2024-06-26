const projectsCss = `/* Projects.scss */

@import "colors";

#projects {
  background-color: $darkprimary-color;
  padding: 20px;
  height: 100%;
  padding-bottom: 80px;
  position: relative;

  .projects-container {
    text-align: center;
    margin-bottom: 40px;

    .section-title {
      font-size: 56px;
      font-weight: 400;
      color: $third-color;
      margin: 50px 0 20px 0;
      display: inline-block;
      border-bottom: 3px groove $light-color;
      border-radius: 8px;
    }
  }

  .projects-content {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    color: $fourth-color;

    .project {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
      border-radius: 10px;
      border: 1px solid $fourth-color;
      text-align: center;

      .project-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 10px;
      }

      .project-image {
        img {
          width: 90%;
          border-radius: 8px;
        }
      }

      .project-link {
        margin-top: 10px;
        button {
          padding: 10px 20px;
          background-color: $secondary-color;
          color: $light-color;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s;

          &:hover {
            background-color: $fourth-color;
            color: $primary-color;
          }
        }
      }
    }
  }

  .p-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $primary-color;
    color: $light-color;
    font-size: 18px;
    font-weight: 300;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 80%;
    max-width: 600px;
    box-shadow: 0 0 11px 11px rgba(0, 0, 0, 0.5);
    z-index: 20;

    .project-tools {
      font-size: 1rem;
      font-style: italic;
      margin-bottom: 16px;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: $light-color;
      cursor: pointer;
    }

    h3 {
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 15px;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .p-popup-links {
      display: flex;
      justify-content: space-around;

      a {
        padding: 10px 20px;
        background-color: $secondary-color;
        color: $light-color;
        border-radius: 8px;
        text-decoration: none;
        font-size: 1rem;
        transition: background-color 0.3s;

        &:hover {
          background-color: $fourth-color;
          color: $primary-color;
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
    z-index: 9;
  }
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  .projects-content {
    grid-template-columns: 1fr; 
    padding: 0 10px;
  }
  #projects {
    .projects-container {
      .section-title {
        font-size: 36px; 
      }
    }
  }
}`

export default projectsCss
