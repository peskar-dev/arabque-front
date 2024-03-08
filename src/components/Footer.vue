<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <ul class="footer__list">
          <li class="footer__item">
            <a class="footer__link" href="https://www.instagram.com/viviennesabo?igsh=MWN0d3RlZzBqcGpiZQ=="> Социальные сети </a>
          </li>
          <li class="footer__item">
            <RouterLink to="/contest" class="footer__link"> Условия конкурса </RouterLink>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="/contest"> Политика конфиденциальности </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import '~/assets/css/style.css';
</style>
