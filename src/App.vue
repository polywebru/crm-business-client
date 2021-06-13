<template>
  <div class="buisbes" data-app="true">
    <router-view></router-view>
  </div>
</template>

<script>
// import BusinesLayout from "@/views/BusinesProfile.vue";
// import BusinesSetingsLayout from "@/views/BusinesSetings.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || "auth"}-layout`;
    },
  },
  components: {
    // BusinesLayout,
    // BusinesSetingsLayout,
  },
};
</script>
<style lang="scss" scoped></style>
