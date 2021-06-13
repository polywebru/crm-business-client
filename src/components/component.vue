<template>
  <div :class="{ 'competence-item--grid': isGrid }" class="item__wrapper">
    <card-text
      v-for="(info, index) in cardInfo"
      :key="index"
      :isGrid="isGrid"
      :cardInfo="info"
    ></card-text>
  </div>
</template>

<script>
import CardText from "./CardText.vue";

export default {
  data() {
    return {
      cardInfo: [
        {
          nameOrder: "Название 1",
          manager: "Степа",
          status: "В работе",
          generated: "12.32.2001",
          generatedEnd: "12.12.2001",
          price: 30000,
          descriptions:
            "Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.Тыры пы кошка.Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.",
        },
        {
          nameOrder: "Название 2",
          manager: "Максим",
          status: "Завершен",
          generated: "12.32.2002",
          generatedEnd: "12.12.2002",
          price: 35000,
          descriptions:
            "Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.Тыры пы кошка.Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.",
        },
        {
          nameOrder: "Название 3",
          manager: "Алексей",
          status: "Открыт",
          generated: "12.32.2003",
          generatedEnd: "12.12.2003",
          price: 20000,
          descriptions:
            "Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.Тыры пы кошка.Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.",
        },
      ],
    };
  },
  components: {
    CardText,
  },
  props: {
    isGrid: Boolean,
  },
};
</script>

<style lang="scss">
.competence-item--grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item__wrapper {
  position: relative;
}
// .item{
//   &__wrapper{
//     @media (max-width: 1280px) {
//       padding: 20px 44px 20px 20px;
//     }
//     @media (max-width: 768px) {
//       padding: 20px 0px 20px 20px;
//     }
//   };
//   &--titel{
//     font-family: "Open Sans";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 18px;
//     line-height: 25px;
//   };
//   &__main--info__wraper{
//     margin-right: 17px;
//     height: 85px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   };
//   &__main--value__wrapper{
//     margin-right: 100px;
//     height: 85px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }
//   &__description{
//     span{
//       font-weight: 600;
//       font-size: 14px;
//       line-height: 19px;
//     }
//     &--text{
//       margin-top: 6px;
//       font-size: 14px;
//       line-height: 19px;
//     }
//   }
// }
// .flex__wraper{
//   margin-top: 21px;
//   display: flex;
//   font-size: 14px;
//   line-height: 19px;
//   &--grid{
//     width: 380px;
//     transition: all 0.3s;
//     flex-direction: column;
//   }
// }
// .v-btn{
//   margin-top: 21px;
//   width: 104px;
//   letter-spacing: none;
//   height: 26px;
//   font-size: 12px !important;
//   line-height: 16px !important;
//   &__content{

//   }
// }
// .btn{
//   font-size: 12px !important;
//   line-height: 16px !important;
// }
// @media (max-width:1280px) {
// .item{
//   &__main--info__wraper{
//     margin-right: 6px;
//   }
//   &__main--value__wrapper{
//     margin-right: 55px;
//   }
//   &__description{
//     font-size: 12px;
//     line-height: 16px;
//     &--text{
//       margin-top: 4px;
//     }
//   }
// }
// }
</style>
