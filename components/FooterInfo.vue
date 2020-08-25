<template>
  <footer>
    <p>
      Wdrożone przez
      <a target="_blank" href="https://github.com/Lumm1t"
        >Aleksander Szołowicz</a
      >
      i
      <a target="_blank" href="https://github.com/MentolMen"
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
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
  }
}
</style>
