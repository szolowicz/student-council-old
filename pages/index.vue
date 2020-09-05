<template>
  <div>
    <header class="hero">
      <div class="moving_gradient"></div>

      <div class="content">
        <img src="/logo.png" class="logo" alt="Logo samorządu szkolnego" />

        <h1>Samorząd uczniowski</h1>

        <p>
          Polepszanie umiejętności współpracy, sprawnej komunikacji i
          organizacji własnej pracy, poznawanie nowych rzeczy, nowe
          doświadczenia i wyzwania, możliwość poznania samego siebie od innej
          strony, poznanie innych kreatywnych ludzi.
        </p>

        <br />

        <p>
          To jest właśnie samorząd uczniowski – to my zapewniamy pomysły na
          działania, które polepszają nasze życie w szkole.
        </p>

        <a href="http://zsm1.bydgoszcz.pl/" class="go-back">Powrót</a>
      </div>

      <div class="scroll-down"></div>
    </header>

    <h1 class="section_topic" name="about-us">
      O nas
    </h1>

    <div id="services_container">
      <div class="service-card">
        <img src="/party-baloons.png" alt="Imprezy szkolne" class="icon" />

        <div class="name">Imprezy szkolne</div>

        <div class="desc">
          Samorząd zajmuje się organizacją imprez szkolnych takich jak dzień
          nauczyciela, dzień chłopaka lub walentynki.
        </div>
      </div>

      <div class="service-card">
        <img src="/heart-health.png" alt="Życie szkoły" class="icon" />

        <div class="name">Życie szkoły</div>

        <div class="desc">
          Zajmujemy się poprawianiem samopoczucia ucznia w szkole i dodawaniem
          udogodnień.
        </div>
      </div>

      <div class="service-card">
        <img src="/idea.png" alt="Innowacyjność" class="icon" />

        <div class="name">Innowacyjność</div>

        <div class="desc">
          Planujemy w tym roku wprowadzić wypożyczanie ładowarek do telefonu w
          sekretariacie, ułatwić przekazywanie informacji o konkursach i ważnych
          wydarzeniach szkolnych.
        </div>
      </div>
    </div>

    <FooterInfo />
  </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/variables';

.hero {
  background-image: url('/hero-image.png');
  background-size: 125%;
  background-position: left;
  animation: slide 40s ease infinite;
  transform: translate3d(0, 0, 0);
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;

  @media (max-width: 1150px) {
    background-size: cover;
  }
}

.content {
  max-width: 725px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 10%;
  margin-top: 10.5%;

  @media (max-width: 300px) {
    padding: 0 5px;
  }

  .go-back {
    z-index: 1;
    top: 5px;
    left: 5px;
    position: absolute;
    font-size: 20px;
    background: linear-gradient(currentColor, currentColor) bottom / 0 0.1em
      no-repeat;
    transition: 1s background-size;

    &:hover {
      color: darken($secondColor, 15);
      background-size: 100% 0.1em;
    }
  }

  .logo {
    position: relative;
    z-index: 1;
    display: block;
    margin: auto;
    margin-bottom: 20px;
    width: 128px;
    height: 128px;
  }
  h1 {
    position: relative;
    z-index: 1;
    font-size: 3.8rem;
    margin: 0 0 10px;
    line-height: 1;
    text-align: center;
    animation: pulse 2s;
  }
  p {
    position: relative;
    z-index: 1;
    font-size: 1.1rem;
    line-height: 1.4;
    text-align: justify;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 3.5rem;
    }
    p {
      text-align: center;
    }
    .logo {
      margin-bottom: 5px;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 2.1rem;
    }
    p {
      text-align: center;
    }
    .logo {
      margin-bottom: -15px;
    }
  }
}

.moving_gradient {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    -45deg,
    lighten($mainColor, 3),
    darken($secondColor, 3)
  );
  background-size: 400% 400%;
  animation: gradient 7s ease infinite;
  overflow: hidden;
  opacity: 0.8;
}

.scroll-down {
  height: 100vh;
  position: absolute;
  width: 100%;
  &::before {
    animation: bounce 1s ease infinite;
    bottom: 1.7rem;
    content: '⬇';
    font-size: 2rem;
    height: 4rem;
    left: 50%;
    letter-spacing: -1px;
    line-height: 4rem;
    margin-left: -3rem;
    opacity: 0.8;
    position: absolute;
    text-align: center;
    width: 6rem;
  }

  @media (max-width: 700px) {
    display: none;
  }
}

.section_topic {
  margin-top: 35px;
  font-weight: 700;
  font-size: 45px;
  color: $mainColor;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(288deg, $mainColor, $secondColor);
  background-clip: text;
  background-size: 100%;
  background-position: 50%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: tracking-in-contract 0.6s ease-in-out;
  animation: tracking-in-contract 0.6s ease-in-out;
}

#services_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  max-width: 1500px;
  margin: auto;
}

.service-card {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
  width: 300px;
  height: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  margin: 20px;
  border-radius: 5px;

  > .icon {
    margin-top: 40px;
    width: 100px;
    height: 100px;
    object-fit: contain;
    align-self: center;
  }

  > .name {
    margin-top: 20px;
    font-size: 20px;
    align-self: center;
    text-transform: uppercase;
    font-weight: 700;
  }

  > .desc {
    margin: 20px;
    text-align: center;
  }
}

@keyframes slide {
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes bounce {
  50% {
    transform: translateY(-30%);
  }
}
</style>
