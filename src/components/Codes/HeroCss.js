const heroCss = `/* Hero.scss */

@import "colors";

header {
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  max-width: 100%;
  background-color: $primary-color;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  vertical-align: auto;

  .nav ul {
    display: flex;
    list-style-type: none;
    justify-content: space-between;

    li {
      margin-right: 20px;
    }

    a {
      color: $light-color;
      text-decoration: none;
      transition: color 0.35s ease;

      &:hover {
        color: $secondary-color;
      }
    }
  }
}

.logo {
  font-size: 32px;
  font-weight: 600;
  color: $secondary-color;
  cursor: pointer;
}`

export default heroCss
