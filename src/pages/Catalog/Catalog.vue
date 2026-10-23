<template>
  <q-page class="page-content">
    <section class="product-grid" aria-label="Товары каталога">
      <q-card v-for="product in products" :key="product.Id" class="product-card">
        <div class="product-image" aria-hidden="true">
          <img v-if="product.Photo" :src="product.Photo" :alt="product.Name">
          <q-icon v-else name="image" size="40px" />
        </div>

        <q-card-section class="product-details">
          <div class="product-name">{{ product.Name }}</div>

          <div class="product-prices">
            <div class="product-price">
              <span class="price-label">Цена за ед.: </span>
              <span>{{ product.RetailPrice }}</span>
            </div>

            <div class="product-price">
              <span class="price-label">Оптовая цена: </span>
              <span>{{ product.WholesalePrice }}</span>
            </div>
          </div>
        </q-card-section>

        <q-card-actions class="product-actions">
          <q-btn
            label="Подробнее"
            color="primary"
            outline
            class="full-width"
            @click="openProduct(product.Id)"
          />
        </q-card-actions>
      </q-card>
    </section>
  </q-page>
</template>

<script>
import list from './list.json';

export default {
  name: 'Catalog',
  data() {
    return {
      products: list
    }
  },
  methods: {
    openProduct(id) {
      this.$router.push(`/catalog/${id}`)
    }
  }
}
</script>

<style scoped lang="scss">
.page-content {
  min-height: calc(100vh - 50px);
  padding: 32px;
}

h1 {
  margin: 8px 0 24px;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 20px;
}

.product-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.product-image {
  display: grid;
  min-height: 180px;
  place-items: center;
  background: #f5f5f5;
  color: #9e9e9e;
}

.product-details {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
}

.product-name {
  font-size: 1rem;
  font-weight: 600;
}

.product-description {
  color: #616161;
}

.product-price {
  margin-top: 4px;
  font-size: 1rem;
  font-weight: 700;
}

.product-prices {
  margin-top: auto;
}

.price-label {
  color: #757575;
}

.product-actions {
  margin-top: auto;
  padding: 0 16px 16px;
}

@media (max-width: 599px) {
  .page-content {
    padding: 24px 16px;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
