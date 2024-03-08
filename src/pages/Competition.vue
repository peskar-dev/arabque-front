<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <section class="main__competition competition">
        <div class="container">
          <div class="competition__inner">
            <h2 class="competition__title">Условия Конкурса</h2>
            <div class="competition__text">
              <p>
                1. Создай видео с нашим восточным принцем и собой в главной роли и поделись им с друзьями на страничке VK.
                Обязательно поставь хэштег #CabaretNoir Arabique
              </p>
              <p>2. Убедись, что ты подписана на аккаунт Vivienne Sabo в VK</p>
              <p>
                3. Каждую неделю в течение месяца мы будем выбирать четырех победителей с помощью рандомайзера! Ты сможешь
                получить годовой запас туши Cabaret Noir Arabique, чтобы покорять одним лишь взглядом!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<style></style>
