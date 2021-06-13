<template>
  <div class="main-info">
    <div class="main-text-fields">
      <div class="field">
        <label for="projectName">Название</label>
        <v-text-field
          outlined
          :value="getBusinesInfo.projectName"
          class="custom-input settings__input"
          @change="setBusinesInfo({ type: 'projectName', data: $event })"
          id="projectName"
        ></v-text-field>
      </div>
      <div class="field">
        <label for="status">Статус</label>
        <v-select
          outlined
          id="status"
          :value="getBusinesInfo.status"
          @change="changeGender"
          :items="['В работе', 'Открыт', 'Завершен']"
          class="custom-input settings__input"
        ></v-select>
      </div>
      <div class="field">
        <label for="manager">Менеджер</label>
        <v-text-field
          outlined
          :value="getBusinesInfo.manager"
          class="custom-input settings__input"
          @change="setBusinesInfo({ type: 'manager', data: $event })"
          id="manager"
        ></v-text-field>
      </div>
      <div class="field">
        <label for="last_name">Дата создания</label>
        <v-text-field
          outlined
          :value="dataStart"
          class="custom-input settings__input"
          @change="setBusinesInfo({ type: 'dataStart', data: $event })"
          id="last_name"
        ></v-text-field>
      </div>
      <div class="field">
        <label for="dataEnd">Дата завершения</label>
        <v-text-field
          outlined
          v-model="dataEnd"
          class="custom-input settings__input"
          @change="setBusinesInfo({ type: 'dataEnd', data: $event })"
          id="dataEnd"
        ></v-text-field>
      </div>
      <div class="field">
        <label for="price">Стоимость</label>
        <v-text-field
          outlined
          :value="getBusinesInfo.price"
          class="custom-input settings__input"
          @change="setBusinesInfo({ type: 'price', data: $event })"
          id="price"
        ></v-text-field>
      </div>
      <button
        class="settings__change"
        type="submit"
        @click.prevent="changeBusines"
      >
        <span> Изменить</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    getBusinesInfo: {
      projectName: { maxLength: maxLength(255), required },
      status: { maxLength: maxLength(255), required },
      manager: { maxLength: maxLength(255), required },
      price: { required },
    },
  },
  data() {
    return {
      dataEnd: null,
      dataStart: null,
    };
  },
  computed: {
    // invalidProjectName() {
    //   if (
    //     this.$v.getUserInfo.projectName.$dirty &&
    //     !this.$v.getUserInfo.projectName.required
    //   ) {
    //     return this.VALIDATION_ERRORS.required;
    //   } else if (
    //     this.$v.getUserInfo.projectName.$dirty &&
    //     !this.$v.getUserInfo.projectName.maxLength
    //   ) {
    //     return this.VALIDATION_ERRORS.maxLength;
    //   }
    //   return "";
    // },
    // invalidStatus() {
    //   if (
    //     this.$v.getUserInfo.last_name.$dirty &&
    //     !this.$v.getUserInfo.last_name.required
    //   ) {
    //     return this.VALIDATION_ERRORS.required;
    //   }
    //   return "";
    // },
    // invalidManager() {
    //   if (
    //     this.$v.getUserInfo.manager.$dirty &&
    //     !this.$v.getUserInfo.manager.maxLength
    //   ) {
    //     return this.VALIDATION_ERRORS.maxLength;
    //   } else if (
    //     this.$v.getUserInfo.manager.$dirty &&
    //     !this.$v.getUserInfo.manager.required
    //   ) {
    //     return this.VALIDATION_ERRORS.required;
    //   }
    //   return "";
    // },
    // invalidPrice() {
    //   if (
    //     this.$v.getUserInfo.price.$dirty &&
    //     !this.$v.getUserInfo.price.required
    //   ) {
    //     return this.VALIDATION_ERRORS.required;
    //   }
    //   return "";
    // },
    ...mapGetters(["getBusinesInfo"]),
  },
  methods: {
    changeBusines() {
      this.$emit("changeBusines", "contact-info");
    },
    changeGender(gender) {
      const changedGender =
        gender === "Мужской" ? "male" : gender === "Женский" ? "female" : "";
      this.setBusinesInfo({ type: "gender", data: changedGender });
    },
    ...mapMutations(["setBusinesInfo"]),
  },
  created() {
    this.dataStart = this.getBusinesInfo.dataStart;
    this.dataEnd = this.getBusinesInfo.dataEnd;
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";
.settings {
  .v-progress-linear {
    max-width: 70%;
    margin: 20px 0;
    @media (max-width: 970px) {
      max-width: 100% !important;
    }
  }
  input {
    color: var(--text-color) !important;
  }
  max-width: calc(839px + 300px);
  &__changed {
    background-color: rgb(10, 209, 10) !important;
    z-index: -100;
    opacity: 0;
    position: fixed;
    bottom: 0;
    right: 10px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &.show {
      z-index: 100;
      opacity: 1;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    @media (max-width: 970px) {
      right: unset;
      left: 50%;
      bottom: 35px;
      transform: translateX(-50%);
    }
    width: 280px;
    div {
      color: #fff !important;
      margin-left: 5px;
    }
  }
  &__menu {
    border-radius: 0 !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    &-opener {
      display: flex;
      justify-content: center;
      width: 100%;
      background-color: var(--link-sidebar-bg);
      padding: 11px 15px;
      .arrow {
        position: absolute;
        left: 90%;
        &__path {
          fill: var(--text-color);
        }
      }
    }
  }
  &__main-title {
    @media (max-width: 970px) {
      margin-bottom: 30px;
      margin-top: 20px;
    }
  }
  @media (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    margin-top: 10px !important;
  }
  label {
    color: var(--text-color);
    &.v-label {
      padding: 0 12px !important;
      top: 50% !important;
      transform: translateY(-50%) !important;
    }
  }

  h2,
  h1 {
    color: var(--text-color);
  }
  .v-input--is-focused {
    fieldset {
      border-color: $blue !important;
    }
  }

  fieldset {
    border-color: #aaa !important;
  }

  .invalid {
    fieldset {
      border-color: $borderInvalid !important;
    }
  }
  div:not(.v-messages__message),
  fieldset,
  input,
  span,
  i {
    color: var(--text-color) !important;
  }
  .delete-photo {
    span {
      color: #ff0000 !important;
    }
  }
  &__sidebar {
    background-color: var(--main-bg) !important;
    @media (max-width: 970px) {
      display: none;
    }
    &--mobile {
      display: none;
      position: relative;
      width: 100%;
      @media (max-width: 970px) {
        display: block;
      }
    }
  }
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 60px auto 0;
  padding: 0 20px 10px;
  background-color: var(--main-bg);
  &__photo-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: var(--text-color);
    @media (max-width: 970px) {
      display: none;
    }
  }
  &__form {
    height: 90%;
  }
  &__change {
    border: 2px solid $blue;
    padding: 8px 45px;
    outline: transparent;
    border-radius: 5px;
    display: flex;
    align-items: center;
    max-width: 188px;
    width: 100%;
    margin: 35px auto 0;
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
  &__input {
    max-height: 25px !important;
  }
  &__title {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: var(--text-color);
    padding-left: 30px;
    margin-bottom: 15px;
  }
  &__links {
    background-color: var(--main-bg) !important;
  }
  &__links-item {
    padding: 0 !important;
  }
  .link {
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 10px;
    color: var(--text-color);
    width: 100%;
    padding: 14px 75px 14px 30px;
    &:last-child {
      margin-bottom: 0;
    }
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      background-color: var(--link-sidebar-bg);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &--active {
      background-color: var(--link-sidebar-bg);
    }
  }
  &__main {
    width: 65%;
    @media (max-width: 970px) {
      width: 100%;
    }
    &-title {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      columns: var(--text-color);
    }
  }
}
.field {
  margin-top: 45px;
  &:first-child {
    margin-top: 5px;
  }
}
</style>
