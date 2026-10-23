<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title >
          <span class="logo" @click="goToHome">Hanuri</span>
          <span class="page-title">{{ $route.meta.title }}</span>
        </q-toolbar-title>
        
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
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
</style>
