<template>
  <footer>
    <p>
      Wdrożone przez
      <a href="https://github.com/Lumm1t" target="_blank"
        >Aleksander Szołowicz</a
      >
      i
      <a href="https://github.com/MentolMen" target="_blank"
        >Stanisław Fijołek</a
      >
    </p>
    <p>Wersja {{ require('../package.json').version }}</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-bottom: 20px;

  p {
    margin: 3px;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;

    a {
      color: rgba(0, 0, 0, 0.4);
      font-weight: bold;
      text-decoration: none;
    }

    a:hover {
      color: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
