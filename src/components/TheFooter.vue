<template>
  <footer class="footer mb-4">
    Copyright © 2023
    <a href="https://github.com/jarooda" class="link">Jalu Wibowo Aji</a>. All
    Rights Reserved
  </footer>
</template>

<style scoped lang="scss">
.footer {
  font-family: $normal;
  font-size: 14px;
  color: $color-text;
  text-align: center;
  .link {
    color: $color-primary;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: $color-text;
    }
  }
}
</style>
