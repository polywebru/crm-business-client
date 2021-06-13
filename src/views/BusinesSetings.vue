<template>
  <div class="settings">
    <aside class="settings__sidebar">
      <h1 class="settings__title">Настройки заказа</h1>
      <v-list class="settings__links">
        <v-list-item
          class="settings__links-item"
          v-for="(link, index) in links"
          :key="index"
        >
          <router-link
            class="link"
            exact
            exact-active-class="link--active"
            :to="link.path"
            >{{ link.title }}</router-link
          >
        </v-list-item>
      </v-list>
    </aside>
    <main class="settings__main">
      <h2 class="settings__main-title">{{ routeTitle }}</h2>
      <v-form class="settings__form">
        <router-view v-on:changeBusines="changeBusines"></router-view>
      </v-form>
    </main>
    <v-alert
      class="settings__changed"
      type="success"
      :class="{ show: settingsChanged }"
    >
      <div>Данные успешно изменены</div>
    </v-alert>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      settingsChanged: false,
      links: [
        { path: "/busines-setings/main-info", title: "Основная информация" },
        {
          path: "/busines-setings/contact-info",
          title: "Описание",
        },
      ],
    };
  },
  computed: {
    routeTitle() {
      return this.links.find((link) => link.path === this.$route.path).title;
    },
    ...mapState({
      IS_LOADING: (state) => state.busines.isLoading,
    }),
  },
  methods: {
    async changeBusines(route) {
      try {
        await this.changeBusinesInfo(route);
        this.settingsChanged = true;
        setTimeout(() => {
          this.settingsChanged = false;
        }, 1200);
      } catch (error) {
        if (error === 401) {
          localStorage.clear();
          await this.$router.push({ name: "Login" });
        } else if (error >= 500) {
          this.setErrorAlert({ isShow: true });
          setTimeout(() => {
            this.setErrorAlert({ isShow: false });
          }, 1200);
        }
      }
    },
    ...mapActions(["changeBusinesInfo"]),
  },
};
</script>

<style></style>
