<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Открыть меню навигации"
          @click="drawerOpen = !drawerOpen"
        />
        <q-toolbar-title>
          <span class="logo" @click="goToHome">Hanuri</span>
          <span class="page-title">{{ $route.meta.title }}</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" side="left" overlay bordered>
      <q-list padding>
        <q-item class="nav-item" clickable v-ripple to="/" @click="drawerOpen = false">
          <q-item-section>Главная</q-item-section>
        </q-item>
        <q-item class="nav-item" clickable v-ripple to="/catalog" @click="drawerOpen = false">
          <q-item-section>Продукция</q-item-section>
        </q-item>
        <q-item class="nav-item" clickable v-ripple to="/contacts" @click="drawerOpen = false">
          <q-item-section>Контакты</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data: () => ({
    drawerOpen: false
  }),
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.logo {
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
}
.page-title {
  margin-left: 20px;
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.85;
  text-transform: none;
}
.nav-item {
  font-size: 1.125rem;
  font-weight: 600;
}
</style>
