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
        @change="dongList"
      ></b-form-select>
    </b-col>
    <!-- 동 선택 -->
    <b-col cols="3">
      <b-form-select
        size="sm"
        class="mt-2 ml-2"
        v-model="dongCode"
        :options="dongs"
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
        @change="searchHouse"
      ></b-form-select>
    </b-col>
    <b-col>
      <b-form-group v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="house-sell-tipe-checkbox-group"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="flavour-1"
          size="sm"
          @change="searchHouse"
        ></b-form-checkbox-group>
      </b-form-group>
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
      dongCode: null,
      houseCode: null,
      selected: [], // Must be an array reference!
      options: [
        { text: "매매", value: "s" },
        { text: "전/월세", value: "m" },
      ],
    };
  },
  // 보통 state에서 데이터를 가져올 때 사용한다
  computed: {
    // map 사용 시
    ...mapState(["sidos", "guguns", "dongs", "houseCodes"]),
  },
  methods: {
    ...mapActions([
      "getSido",
      "getGugun",
      "getDong",
      "getHouseCode",
      "getHouseList",
    ]),
    ...mapMutations([
      "CLEAR_GUGUN_LIST",
      "CLEAR_SIDO_LIST",
      "CLEAR_DONG_LIST",
      "CLEAR_HOUSE_CODE_LIST",
    ]),
    sidoList() {
      this.CLEAR_SIDO_LIST();
      this.getSido();
      console.log();
    },
    gugunList() {
      this.gugunCode = null;
      if (this.sidoCode) {
        this.CLEAR_GUGUN_LIST();
        this.getGugun(this.sidoCode);
      }
    },
    dongList() {
      this.dongCode = null;
      if (this.gugunCode) {
        this.CLEAR_DONG_LIST();
        this.getDong(this.gugunCode);
      }
    },
    houseCodeList() {
      this.CLEAR_HOUSE_CODE_LIST();
      this.houseCode = null;
      if (this.gugunCode && this.sidoCode && this.dongCode) {
        this.getHouseCode();
      }
    },
    searchHouse() {
      if (this.sidoCode && this.gugunCode && this.dongCode) {
        this.getHouseList([this.dongCode, this.houseCode]);
        // 아파트검색
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
