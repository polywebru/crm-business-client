<template>
  <div class="contact-info">
    <div class="contact-text-fields">
      <div class="field">
        <label for="phone">Описание</label>
        <v-textarea
          outlined
          v-model="getBusinesInfo.description"
          class="text-area"
        ></v-textarea>
      </div>
      <button
        class="settings__changes"
        type="submit"
        @click.prevent="changeBusines"
      >
        <span> Изменить</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getBusinesInfo"]),
  },
  methods: {
    changeBusines() {
      this.$emit("changeBusines", "contact-info");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.v {
  &-input__control {
    max-height: none !important;
  }
}
.settings {
  &__changes {
    border: 2px solid $blue;
    padding: 8px 45px;
    outline: transparent;
    border-radius: 5px;
    display: flex;
    align-items: center;
    max-width: 188px;
    width: 100%;
    margin: 0 auto 0;
    justify-content: center;
    position: relative;
    height: 39px !important;
    &.changing {
      background-color: $blue;
    }
    span {
      color: var(--text-color);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      background-color: $blue;
      span {
        color: white !important;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
