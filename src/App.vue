<template>
  <v-app>
    <component :is="layout"></component>
  </v-app>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
export default {
  name: "App",
  components: {
    AuthLayout,
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || "auth"}-layout`;
    },
  },
};
</script>
