<template>
  <div class="buisbes">
    <h1 class="buisbes__titel">Заказы</h1>
    <div class="buisbes--view">
      <button @click="isGrid = !isGrid">
        <img v-if="!isGrid" src="@/assets/img/grid.svg" alt="В две колонки" />
        <img v-else src="@/assets/img/lines.svg" alt="В одну колонку" />
      </button>
    </div>
    <component-dom :isGrid="isGrid" />
  </div>
</template>

<script>
import ComponentDom from "@/components/component.vue";
export default {
  name: "App",
  data() {
    return {
      isGrid: false,
    };
  },
  components: {
    ComponentDom,
  },
};
</script>
<style lang="scss" scoped>
.buisbes {
  background: #f5f5f5;
  padding: 22px 50px 0;
  margin: 100px 80px 0px;
  @media (max-width: 1200px) {
    margin: 60px 27px 0;
    padding: 14px 36px 0;
  }
  @media (max-width: 768px) {
    margin: 60px 20px 0;
    padding: 22px 19px 0;
  }
  @media (max-width: 480px) {
    margin: 17px 17px 0;
    padding: 18px 23px 0;
  }
  &__titel {
    font-weight: 600;
    font-size: 30px;
    line-height: 41px;
    margin-bottom: 30px;
    @media (max-width: 1100px) {
      font-size: 20px !important;
      line-height: 27px !important;
    }
    @media (max-width: 768px) {
      font-size: 16px !important;
      line-height: 22px !important;
    }
  }
  &--view {
    margin-bottom: 10px;
    @media (max-width: 940px) {
      display: none;
    }
  }
}
</style>
