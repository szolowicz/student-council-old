<template>
  <div>
    <section class="hero">
      <div class="content">
        <img src="https://img.icons8.com/dusk/100/000000/idea.png" />

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
      <div class="waves"></div>

      <div class="scroll-down"></div>
    </section>

    <h1 class="section_topic" name="about-us">
      O nas
    </h1>

    <div id="services_container">
      <div class="service-card">
        <img
          src="https://img.icons8.com/dusk/64/000000/party-baloons.png"
          class="logo"
        />
        <div class="name">Imprezy szkolne</div>
        <div class="desc">
          Samorząd zajmuje się organizacją imprez szkolnych takich jak dzień
          nauczyciela, dzień chłopaka lub walentynki.
        </div>
      </div>

      <div class="service-card">
        <img
          src="https://img.icons8.com/dusk/64/000000/heart-health.png"
          class="logo"
        />
        <div class="name">Życie szkoły</div>
        <div class="desc">
          Zajmujemy się poprawianiem samopoczucia ucznia w szkole i dodawaniem
          udogodnień.
        </div>
      </div>

      <div class="service-card">
        <img
          src="https://img.icons8.com/plasticine/100/000000/idea.png"
          class="logo"
        />
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

.go-back {
  z-index: 1;
  top: 5px;
  left: 5px;
  position: absolute;
  font-size: 20px;
}

.content {
  max-width: 725px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 10%;
}

@media (max-width: 300px) {
  .content {
    padding: 0 5px;
  }
}

.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  img {
    position: relative;
    z-index: 1;
    display: block;
    margin: auto;
    margin-bottom: 20px;
  }

  h1 {
    position: relative;
    z-index: 1;
    font-size: 4.2rem;
    margin: 0 0 10px;
    line-height: 1;
    text-align: center;
  }

  p {
    position: relative;
    z-index: 1;
    font-size: 1.1rem;
    line-height: 1.4;
    text-align: justify;
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 3.5rem;
    }

    p {
      text-align: center;
    }

    img {
      margin-bottom: 5px;
    }
  }
}

.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background-color: $mainColor;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 500ms;
}

.waves::before,
.waves::after {
  content: '';
  position: absolute;
  width: 300vw;
  height: 300vw;
  top: -65vw;
  left: 50%;
  transform: translate(-50%, -75%);
}

.waves::before {
  border-radius: 44%;
  background: rgba(245, 245, 245, 1);
  animation: waves 8s linear infinite;
}

.waves::after {
  border-radius: 44%;
  background: rgba(245, 245, 245, 0.5);
  animation: waves 15s linear infinite;
}

@keyframes waves {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}

.scroll-down {
  height: 100vh;
  position: absolute;
  width: 100%;
}

.scroll-down::before {
  animation: bounce 1s ease infinite;
  bottom: 2rem;
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

@keyframes bounce {
  50% {
    transform: translateY(-50%);
  }
}

.section_topic {
  margin-top: 15px;
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

.service-card.new::before {
  content: 'Nowe';
  position: absolute;
  width: 70px;
  height: 70px;
  text-align: center;
  vertical-align: middle;
  line-height: 70px;
  background-color: red;
  display: inline-block;
  z-index: 2;
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  border-radius: 50px;
  transform: rotate(-45deg) translate(0, -20px);
  background-image: linear-gradient(90deg, #ff512f, #dd2476);
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

  > .logo {
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

@media (max-width: 700px) {
  .waves,
  .scroll-down {
    display: none;
  }
}
</style>
