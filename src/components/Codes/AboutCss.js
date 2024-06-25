const aboutCss = `/* About.scss */

@import "colors";

#about {
  .about-container {
    background-color: $primary-color;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    position: relative;
  }

  .section-title {
    text-align: center;
    font-size: 56px;
    font-weight: 400;
    margin: 50px 0 20px 0;
    color: $third-color;
    position: relative;
    border-bottom: 3px groove $light-color;
    border-radius: 8px;
  }

  .intro-text {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 90px;
    max-width: 800px;
    color: $light-color;
  }

  .about-content {
    max-width: 1440px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .left-column {
    flex: 1;
    text-align: center;
  }

  .my-photo {
    width: 100%;
    max-width: 300px;
    border-radius: 16px;
    box-shadow: 5px 5px 8px 5px rgba(0, 0, 0, 0.5);
  }

  .right-column {
    flex: 2;
    padding-left: 20px;

    ul {
      list-style-type: circle;
      font-weight: 300;
      text-indent: 20px;
      font-size: 1.4rem;

      li {
        color: $light-color;
        margin-bottom: 30px;
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
    z-index: 1;
  }
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  #about .about-container {
    padding: 10px;
  }

  #about .section-title {
    font-size: 36px; 
  }

  #about .intro-text {
    font-size: 1.1rem; 
    margin-bottom: 40px;
  }

  #about .about-content {
    flex-direction: column;
    text-align: center;
    gap: 20px;

    .left-column,
    .right-column {
      width: 100%;
      padding: 0 10px;
    }

    .right-column {
      padding-left: 0;

      ul {
        text-indent: 0;
        font-size: 1rem;
        margin-bottom: 60px;
        li {
          margin-bottom: 20px;
        }
      }
    }

    .my-photo {
      max-width: 200px;      
      margin: 0 auto;
    }
  }
}
`

export default aboutCss
