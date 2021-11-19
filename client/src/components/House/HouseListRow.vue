<template>
  <b-row
    class="m-1"
    @click="selectHouse"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-col cols="10" class="align-self-center">
      {{ house.danjiname }}
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HouseListRow",
  data() {
    return {
      isColor: false,
    };
  },
  props: {
    house: Object,
  },
  methods: {
    ...mapActions(["datailHouse"]),
    colorChange(flag) {
      this.isColor = flag;
    },
    selectHouse() {
      this.datailHouse(this.house);
    },
  },
  created() {
    console.log(this.house);
  },
};
</script>

<style scoped>
.apt {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>
