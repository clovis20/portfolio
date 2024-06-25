const headerCss = `/* Header.scss */

@import "colors";

header {
  position: fixed;
  width: 100%;
  background-color: $primary-color;
  padding: 20px 0;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  z-index: 10;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav ul {
    display: flex;
    list-style-type: none;
    justify-content: flex-end;

    li {
      margin-right: 20px;
    }

    a {
      color: $light-color;
      transition: color 0.35s ease;

      &:hover {
        color: $secondary-color;
      }
    }
  }
}

.logo {
  font-size: 40px;
  font-weight: 600;
  color: $secondary-color;
  cursor: pointer;
}
`

export default headerCss
