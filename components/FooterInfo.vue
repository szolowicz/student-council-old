<template>
  <footer>
    <p>
      Wdrożone przez
      <a href="https://github.com/Lumm1t" target="_blank" rel="noopener">
        Aleksander Szołowicz
      </a>
      i
      <a href="https://github.com/MentolMen" target="_blank" rel="noopener">
        Stanisław Fijołek
      </a>
    </p>

    <a
      href="https://zsm1.bydgoszcz.pl/strony/wcag/"
      target="_blank"
      rel="noopener"
    >
      Deklaracja dostępności
    </a>

    <p
      class="contract"
      @click="
        $colorMode.preference =
          $colorMode.preference === 'light' ? 'dark' : 'light'
      "
    >
      Tryb nocny
    </p>

    <p>Wersja {{ require('../package.json').version }}</p>
  </footer>
</template>

<style lang="scss" scoped>
@import './assets/scss/variables';

footer {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-top: 50px;
  padding-bottom: 20px;
  background-color: var(--backgroundColor-primary);
  box-shadow: 0 0 20px 20px var(--backgroundColor-primary);

  p {
    margin: 3px;
    color: rgba(var(--textColor), 0.8);
    text-align: center;
  }

  .contract {
    font-weight: bold;
    color: var(--textColor);
    transition-duration: 0.5s;
    cursor: pointer;

    &:hover {
      color: $secondColor;
    }
  }
}
</style>
