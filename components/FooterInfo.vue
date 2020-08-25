<template>
  <footer>
    <p>
      Wdrożone przez
      <a href="https://github.com/Lumm1t" target="_blank" rel="noopener"
        >Aleksander Szołowicz</a
      >
      i
      <a href="https://github.com/MentolMen" target="_blank" rel="noopener"
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
  margin: 80px 0 0 0;
  padding-bottom: 20px;
  background-color: whitesmoke;
  box-shadow: 0 0 20px 20px whitesmoke;

  p {
    margin: 3px;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
  }
}
</style>
