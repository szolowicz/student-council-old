<template>
  <div>
    <TitleBox>Kontakt</TitleBox>

    <div id="contact_container" class="fullpadding">
      <div class="smallbox slideable">
        <div class="data">
          <p class="title">E-mail</p>
          <br />
          <p class="subtitle">Samorząd uczniowski</p>
          <a href="mailto:samorzaduczniowskizsm1@gmail.com"
            >samorzaduczniowskizsm1(at)gmail.com</a
          >
          <br /><br />
          <p class="subtitle">Administratorzy strony</p>
          <span>Aleksander Szołowicz</span>
          <br />
          <a href="mailto:aleksanderszolowicz@gmail.com"
            >aleksanderszolowicz(at)gmail.com</a
          >
          <br /><br />
          <span>Stanisław Fijołek</span>
          <br />
          <a href="mailto:nerkaputina@gmail.com">nerkaputina(at)gmail.com</a>
        </div>

        <div class="map">
          <p class="title">Odwiedź nas</p>
          <br />
          ul. Świętej Trójcy 37
          <br />
          85-224 Bydgoszcz
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable */

#contact_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.smallbox {
  margin: 20px;
  width: 100%;
  min-width: 220px;
  max-width: 350px;
  min-height: 460px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .title {
    margin: 0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    color: rgba(0, 0, 0, 0.7);
  }

  .subtitle {
    margin: 5px 0 5px 0;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.8);
  }

  & > div {
    margin: 20px;
  }
}
</style>
