<template>
  <div class="popup">
    <v-dialog v-model="dialog" width="1000">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="btn card--btn" v-bind="attrs" v-on="on">
          Подробнее
        </v-btn>
      </template>
      <v-card class="popup--wrapper">
        <v-card-title class="popup--title">
          <span class="popup--title--span">{{ cardInfo.nameOrder }}</span>
          <span>
            Статус:
            <span :style="color">{{ cardInfo.status }}</span></span
          >
        </v-card-title>
        <v-card-text class="popup--info">
          <v-card-text class="popup--info--text"
            ><span>Менеджер:</span> <span>Дата создания:</span
            ><span>Дата завершения:</span><span>Стоимость:</span></v-card-text
          >
          <v-card-text class="popup--info--value"
            ><span>{{ cardInfo.manager }}</span>
            <span>{{ cardInfo.generated }}</span
            ><span>{{ cardInfo.generatedEnd }}</span
            ><span>{{ cardInfo.price }} руб.</span></v-card-text
          >
        </v-card-text>
        <v-card-text>
          <v-card-title class="popup--description--title"
            >Описание:</v-card-title
          >
          <v-card-text class="popup--description--subtitel">{{
            cardInfo.descriptions
          }}</v-card-text>
        </v-card-text>
        <v-btn text @click="dialog = false" class="btn popup--btn">
          Назад
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    cardInfo: Object,
    color: String,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss">
.popup {
  color: #000 !important;
  &--wrapper {
    padding: 30px 50px 30px;
  }
  &--title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
    &--span {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
    }
  }
  &--info {
    max-width: 200px;
    display: flex;
    margin-bottom: 37px;
    &--text,
    &--value {
      display: flex;
      flex-direction: column;
      height: 90px;
      justify-content: space-between;
    }
    &--text {
      span {
        font-size: 14px;
        line-height: 19px;
        width: 140px;
      }
    }
  }
  &--description {
    &--title {
      font-weight: 600 !important;
      font-size: 14px !important;
      line-height: 19px !important;
      margin-bottom: 13px;
    }
    &--subtitle {
      font-size: 14px !important;
      line-height: 19px !important;
    }
  }
  &--btn {
    width: 104px !important;
    margin: 39px auto 0;
    display: flex !important;
    justify-content: center !important;
  }
}
</style>
