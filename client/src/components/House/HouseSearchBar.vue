<template>
  <b-row class="mt-1 mb-1 pr-2 pl-1 text-center">
    <b-col cols="3">
      <!-- 시 선택 -->
      <b-form-select
        size="sm"
        class="mt-2 ml-2"
        v-model="sidoCode"
        :options="sidos"
        @change="gugunList"
      ></b-form-select>
    </b-col>
    <!-- 군구 선택 -->
    <b-col cols="3">
      <b-form-select
        size="sm"
        class="mt-2 ml-2"
        v-model="gugunCode"
        :options="guguns"
        @change="houseCodeList"
      ></b-form-select>
    </b-col>
    <!-- 집 종류 선택-->
    <b-col cols="3">
      <b-form-select
        size="sm"
        class="mt-2 ml-2"
        v-model="houseCode"
        :options="houseCodes"
        @change="searchApt"
      ></b-form-select>
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "HouseSearchBar",
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      houseCode: null,
    };
  },
  // 보통 state에서 데이터를 가져올 때 사용한다
  computed: {
    // map 사용 시
    ...mapState(["sidos", "guguns", "houseCodes"]),
  },
  methods: {
    ...mapActions(["getSido", "getGugun", "getHouseCode", "getHouseList"]),
    ...mapMutations([
      "CLEAR_GUGUN_LIST",
      "CLEAR_SIDO_LIST",
      "CLEAR_HOUSECODE_LIST",
    ]),
    sidoList() {
      this.CLEAR_SIDO_LIST();
      // mapActions를 통해 가져온 함수
      // this.$store.dispatch("getSido")와 같음
      this.getSido();
    },
    gugunList() {
      this.gugunCode = null;
      if (this.sidoCode) {
        this.CLEAR_GUGUN_LIST();
        this.getGugun(this.sidoCode);
      }
    },
    houseCodeList() {
      this.houseCode = null;
      if (this.gugunCode && this.sidoCode) {
        this.CLEAR_HOUSECODE_LIST();
        this.getHouseCode();
      }
    },
    searchApt() {
      if (this.houseCode && this.sidoCode && this.gugunCode) {
        this.getHouseList(this.houseCode);
      }
    },
  },
  created() {
    // Action을 호출.
    this.sidoList();
  },
};
</script>

<style></style>
