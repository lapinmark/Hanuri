<template>
  <q-page class="page-content">
    <template v-if="product">
      <q-btn
        label="Назад в каталог"
        color="primary"
        flat
        icon="arrow_back"
        class="back-button"
        @click="$router.push('/catalog')"
      />

      <section class="product-card">
        <div class="product-image">
          <img v-if="product.Photo" :src="product.Photo" :alt="product.Name">
          <q-icon v-else name="image" size="64px" aria-hidden="true" />
        </div>

        <div class="product-details">
          <h1>{{ product.Name }}</h1>
          <p class="product-description">{{ product.Description }}</p>

          <div class="product-prices">
            <p>
              <span class="price-label">Цена за ед.:</span>
              <strong>{{ product.RetailPrice }}</strong>
            </p>
            <p>
              <span class="price-label">Оптовая цена:</span>
              <strong>{{ product.WholesalePrice }}</strong>
            </p>
          </div>
        </div>
      </section>
    </template>

    <section v-else class="not-found">
      <h1>Товар не найден</h1>
      <q-btn label="Вернуться в каталог" color="primary" @click="$router.push('/catalog')" />
    </section>
  </q-page>
</template>

<script>
import list from './list.json'

export default {
  name: 'ProductCardPage',
  computed: {
    product() {
      const id = Number(this.$route.params.id)
      return Number.isInteger(id) ? list.find((item) => item.Id === id) : undefined
    }
  }
}
</script>

<style scoped lang="scss">
.page-content {
  min-height: calc(100vh - 50px);
  padding: 32px;
}

.back-button {
  margin-bottom: 16px;
}

.product-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: 32px;
  max-width: 1100px;
  margin: 0 auto;
}

.product-image {
  display: grid;
  min-height: 360px;
  place-items: center;
  overflow: hidden;
  background: #f5f5f5;
  color: #9e9e9e;
}

.product-image img {
  width: 100%;
  height: 100%;
  max-height: 520px;
  object-fit: contain;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

.product-description {
  margin: 0;
  color: #616161;
  line-height: 1.6;
  white-space: pre-line;
}

.product-prices {
  margin-top: auto;
}

.product-prices p {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
}

.price-label {
  color: #757575;
}

.not-found {
  display: grid;
  justify-items: center;
  gap: 16px;
  padding-top: 48px;
  text-align: center;
}

@media (max-width: 599px) {
  .page-content {
    padding: 24px 16px;
  }

  .product-card {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .product-image {
    min-height: 240px;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>
