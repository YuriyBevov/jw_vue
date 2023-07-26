<template>
  <main>
    <section class="lw-section objects">
        <div class="lw-section-header">
          <div class="lw-container lw-section-header-container">
            <div class="lw-section-header-side">
              <div class="lw-section-header-title">
                <span>Мои объекты</span>
                <badge value="1312"/>
              </div>
              <section-header-button title="Импорт"/>
              <section-header-button title="Новый комплекс" iconType="plus"/>
            </div>

            <div class="lw-section-header-side">
              <section-header-button title="Список" isActive colorLight iconType="listView"/>
              <section-header-button title="Плитка" colorLight iconType="cardView"/>
              <section-header-button title="Таблица" colorLight iconType="tableView"/>
            </div>

          </div>
        </div>
        <div class="lw-section-content">
          <div class="lw-container lw-section-header-container">
            <p>content</p>
          </div>
        </div>
    </section>

  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  header {
    outline: 1px solid red;
    padding: 15px 0;
  }
</style>
