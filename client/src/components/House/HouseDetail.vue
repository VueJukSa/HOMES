<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show variant="secondary">
          아파트 이름 : {{ house.아파트 }} <br />
          일련번호 : {{ house.일련번호 }}<br />
          법정동 : {{ house.법정동 }}<br />
          층수 : {{ house.층 }}<br />
          거래금액 :
          {{ (parseInt(house.거래금액.replace(",", "")) * 10000) | price }}원
        </b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HouseDetail",
  computed: {
    ...mapState(["house"]),
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>
