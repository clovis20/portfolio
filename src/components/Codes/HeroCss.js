const heroCss = `/* Hero.scss */

@import "colors";

.hero {
  background-color: $darkprimary-color;
  color: $light-color;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .hero-content {
    margin: 0 auto;
    display: flex;
    align-items: center;

    .hero-text {
      flex: 1;
      margin: 0 auto;

      .text-content {
        h2 {
          font-weight: 400;
          font-size: 32px;
          color: $light-color;
          margin: 0;
        }

        h1 {
          font-size: 64px;
          color: $secondary-color;
          margin: 10px 0;
          overflow: hidden;
          white-space: nowrap;
          border-right: 0.15em solid $success-color;
          animation:
            typing 3s steps(40, end) forwards,
            blink-caret 0.75s step-end 3s forwards;
          transition: opacity 0.5s ease-in-out;
        }
      }

      p {
        font-size: 1.2rem;
        margin: 5px 0 0;
      }
    }

    .hero-image-container {
      flex: 1;
    }

    .hero-image {
      width: 100%;
      max-width: 600px;
    }

    .hero-icons {
      display: flex;
      margin-top: 8px;
      justify-content: center;
      gap: 15px;
    }

    .hover-notice {
      margin-top: 20px;
      font-style: italic;
      color: $light-color;
    }
  }
  .scroll-down {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      position: absolute;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 12px solid $light-color;
      animation: arrow-bounce 1s infinite;
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

  .seta-icon {
    width: 60px;
    margin-top: 10px;
    animation:
      bounce 2s infinite,
      pulse 2s infinite;
    filter: invert(1);
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: $success-color;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(
      1.2
    );
  }
}
`

export default heroCss
