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
    </section>

    <section class="featured-products" aria-labelledby="featured-products-title">
      <h2 id="featured-products-title">Популярные товары</h2>
      <div
        ref="productCarousel"
        class="product-carousel"
        role="region"
        aria-label="Карусель товаров"
        tabindex="0"
        @wheel="scrollCarousel"
      >
        <q-card v-for="product in featuredProducts" :key="product.Id" class="product-card">
          <div class="product-image" aria-hidden="true">
            <img v-if="product.Photo" :src="product.Photo" :alt="product.Name">
            <q-icon v-else name="image" size="40px" />
          </div>
          <q-card-section class="product-details">
            <div class="product-name">{{ product.Name }}</div>
            <div class="product-prices">
              <div><span class="price-label">Цена за ед.: </span>{{ product.RetailPrice }}</div>
              <div><span class="price-label">Оптовая цена: </span>{{ product.WholesalePrice }}</div>
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

        <q-card class="catalog-card">
          <q-card-section>
            <q-icon name="storefront" size="48px" color="primary" />
            <div class="catalog-card-title">Больше товаров</div>
            <div>Посмотрите полный каталог продукции</div>
          </q-card-section>
          <q-card-actions>
            <q-btn
              label="Перейти в каталог"
              color="primary"
              unelevated
              class="full-width"
              @click="goToCatalog"
            />
          </q-card-actions>
        </q-card>
      </div>
    </section>
  </q-page>
</template>

<script>
import products from './Catalog/list.json';

export default {
  name: 'IndexPage',
  data() {
    return {
      products,
      pendingScrollDelta: 0,
      scrollFrame: null
    }
  },
  computed: {
    featuredProducts() {
      return this.products.slice(0, 8); // Возвращаем первые 8 товаров из списка
    }
  },
  methods: {
    goToCatalog() {
      this.$router.push('/catalog');
    },
    openProduct(id) {
      this.$router.push({
        path: `/catalog/${id}`,
        query: { from: this.$route.path }
      })
    },
    scrollCarousel(event) {
      const carousel = this.$refs.productCarousel
      if (event.ctrlKey) return

      const delta = event.deltaX !== 0 ? event.deltaX : event.deltaY
      const deltaMultiplier = event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? carousel.clientWidth
          : 1
      const scrollAmount = delta * deltaMultiplier
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth
      const currentScrollLeft = carousel.scrollLeft + this.pendingScrollDelta
      const nextScrollLeft = Math.max(0, Math.min(maxScrollLeft, currentScrollLeft + scrollAmount))

      if (nextScrollLeft === currentScrollLeft) return

      event.preventDefault()
      this.pendingScrollDelta = nextScrollLeft - carousel.scrollLeft
      if (this.scrollFrame !== null) return

      this.scrollFrame = requestAnimationFrame(() => {
        carousel.scrollLeft += this.pendingScrollDelta
        this.pendingScrollDelta = 0
        this.scrollFrame = null
      })
    }
  }
}
</script>

<style scoped lang="scss">
.page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  min-height: calc(100vh - 50px);
  padding: 32px;
  text-align: center;
}

section {
  width: 100%;
}

.page-content > section:first-child {
  max-width: 1000px;
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

.featured-products h2 {
  margin: 0 0 20px;
  font-size: 1.75rem;
  font-weight: 700;
}

.product-carousel {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 4px 4px 16px;
  overscroll-behavior-x: contain;
}

.product-card,
.catalog-card {
  display: flex;
  flex: 0 0 260px;
  flex-direction: column;
  overflow: hidden;
  scroll-snap-align: start;
  text-align: left;
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
  gap: 12px;
}

.product-name {
  font-weight: 600;
}

.product-prices {
  margin-top: auto;
  font-size: 0.875rem;
}

.price-label {
  color: #757575;
}

.product-actions {
  margin-top: auto;
  padding: 0 16px 16px;
}

.catalog-card {
  justify-content: center;
  background: #f5f5f5;
  text-align: center;
}

.catalog-card-title {
  margin: 16px 0 8px;
  font-size: 1.25rem;
  font-weight: 700;
}

.catalog-card .q-card__actions {
  padding: 0 16px 16px;
}

@media (max-width: 599px) {
  .page-content {
    gap: 32px;
    padding: 24px 16px;
  }

  .product-card,
  .catalog-card {
    flex-basis: min(260px, 85vw);
  }
}
</style>
