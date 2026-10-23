<template>
  <q-page class="page-content">
    <section>
      <p class="eyebrow">Здесь можно сделать визитку</p>
      <h1 class="text-uppercase">Hanuri</h1>
      <p class="info ">
        Какая-нибудь информация о компании: 
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
        Integer tincidunt. Cras dapibus. 
        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. 
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. 
        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. 
        Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
        Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. 
        Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. 
      </p>
      <q-btn color="primary" label="Перейти к каталогу" unelevated @click="goToCatalog"/>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    goToCatalog() {
      this.$router.push('/catalog');
    }
  }
}
</script>

<style scoped lang="scss">
.page-content {
  display: grid;
  min-height: calc(100vh - 50px);
  place-items: top center;
  padding: 32px;
  text-align: center;
}

.eyebrow {
  color: var(--q-primary);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
}

h1 {
  margin: 8px 0;
  font-size: 2.5rem;
  font-weight: 700;
}

.info {
  margin: 0 auto 24px;
  color: #616161;
  max-width: 80%;
}
</style>
