<template>
  <q-page class="contacts-page">
    <section class="contacts-content">
      <p class="eyebrow">Мы на связи</p>
      <h1>Контакты</h1>
      <p class="intro">
        Свяжитесь с нами удобным способом. Замените текст-заглушки на актуальные данные компании.
      </p>

      <div class="contact-grid">
        <q-card v-for="contact in contacts" :key="contact.title" class="contact-card">
          <q-card-section>
            <q-icon :name="contact.icon" color="primary" size="32px" aria-hidden="true" />
            <h2>{{ contact.title }}</h2>
            <p>{{ contact.value }}</p>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'ContactsPage',
  data() {
    return {
      contacts: [
        { title: 'Телефон', value: 'Укажите номер телефона', icon: 'phone' },
        { title: 'Электронная почта', value: 'Укажите адрес электронной почты', icon: 'email' },
        { title: 'Адрес', value: 'Укажите адрес', icon: 'location_on' },
        { title: 'График работы', value: 'Укажите дни и часы работы', icon: 'schedule' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.contacts-page {
  min-height: calc(100vh - 50px);
  padding: 48px 32px;
}

.contacts-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  margin: 0;
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

.intro {
  margin: 0 auto 32px;
  color: #616161;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 20px;
  text-align: left;
}

.contact-card h2 {
  margin: 12px 0 8px;
  font-size: 1.125rem;
  font-weight: 600;
}

.contact-card p {
  margin: 0;
  color: #616161;
}

@media (max-width: 599px) {
  .contacts-page {
    padding: 32px 16px;
  }
}
</style>
