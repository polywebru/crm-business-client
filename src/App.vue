<template>
  <div class="buisbes">
    <component :is="layout"></component>
  </div>
</template>

<script>
import BusinesLayout from "@/views/BusinesProfile.vue";
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
    BusinesLayout,
  },
};
</script>
<style lang="scss" scoped></style>
