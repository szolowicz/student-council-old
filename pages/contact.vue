<template>
  <div>
    <TitleBox>Kontakt</TitleBox>

    <div class="contact">
      <div class="contact__box">
        <div>
          <p class="title">E-mail</p>
          <br />

          <p class="subtitle">Samorząd uczniowski</p>
          <Mailto mail="samorzaduczniowskizsm1@gmail.com" />

          <br /><br />
          <p class="subtitle">Administratorzy strony</p>

          <span>Aleksander Szołowicz</span>
          <br />
          <Mailto mail="aleksanderszolowicz@gmail.com" />

          <br /><br />
          <span>Stanisław Fijołek</span>
          <br />
          <Mailto mail="nerkaputina@gmail.com" />
        </div>

        <div>
          <p class="title">Odwiedź nas</p>

          <p class="map-info">
            Sala 15
            <br />
            Zespół Szkół Mechanicznych nr 1
            <br />
            ul. Świętej Trójcy 37
            <br />
            85-224 Bydgoszcz
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: 'Kontakt - %s',
  },
};
</script>

<style lang="scss" scoped>
/* stylelint-disable */

.contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__box {
    margin: 20px;
    width: 100%;
    min-width: 220px;
    max-width: 350px;
    min-height: 350px;
    background-color: var(--backgroundColor-primary);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    word-break: break-all;
    white-space: normal;

    .title {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 24px;
      color: rgba(var(--textColor), 0.7);
    }

    .subtitle {
      margin: 1px 0 5px 0;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 16px;
      color: rgba(var(--textColor), 0.8);
    }

    .map-info {
      margin-top: 15px;
    }

    & > div {
      margin: 20px;
    }

    @media (max-width: 300px) {
      .title {
        font-size: 22px;
      }

      .subtitle {
        font-size: 14px;
      }
    }
  }
}
</style>
