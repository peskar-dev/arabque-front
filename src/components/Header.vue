<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container__header">
      <div class="header__inner">
        <a class="header__logo" href="/">
          <img src="/img/logo.png" alt="Лого" />
        </a>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <RouterLink to="/" class="header__nav-link"> Главная </RouterLink>
            </li>
            <li class="header__nav-item">
              <RouterLink to="/uploading_photo" class="header__nav-link"> Создать видео </RouterLink>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-link" href="#instr"> Инструкция по созданию </a>
            </li>
            <li class="header__nav-item">
              <RouterLink to="/competition" class="header__nav-link"> Условия конкурса </RouterLink>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-link" href="https://www.instagram.com/viviennesabo?igsh=MWN0d3RlZzBqcGpiZQ==">
                Социальные сети
              </a>
            </li>
          </ul>
        </nav>
        <a class="burger-icon" href="#" onclick="event.preventDefault()">
          <span></span>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import '~/assets/css/style.css';
</style>
