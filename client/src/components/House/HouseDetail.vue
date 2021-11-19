<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col v-if="house != null">
        <b-alert show variant="secondary">
          아파트 이름 : {{ house.danjiname }} <br />
          평수 : {{ house.area }}<br />
          법정동 : {{ house.sigungu }}<br />
          층수 : {{ house.floor }}<br />
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
