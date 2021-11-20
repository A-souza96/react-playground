import { Container } from "./styled";

const Hero = () => {
  return (
    <Container>
      <div className="hero-content">
        <h1>
          WELCOME TO
          <br />
          <bold>
            CODE<span>LEGION</span>
          </bold>
          <p>Hero your gonna learn and improve writing code!</p>
          <button>SUBSCRIBE TODAY</button>
        </h1>
      </div>

      <div className="hero-content ">
        <img
          src="https://www.ionos.co.uk/digitalguide/fileadmin/DigitalGuide/Teaser/code-editoren-t.jpg"
          alt=""
        />
      </div>
    </Container>
  );
};

export default Hero;
