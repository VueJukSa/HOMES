<template>
  <div>
    <b-row class="mt-1 mb-1 pr-2 text-center">
      <b-col class="select a">
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
      <b-col class="select">
        <b-form-select
          size="sm"
          class="mt-2 ml-2"
          v-model="gugunCode"
          :options="guguns"
          @change="dongList"
        ></b-form-select>
      </b-col>
      <!-- 동 선택 -->
      <b-col class="select">
        <b-form-select
          size="sm"
          class="mt-2 ml-2"
          v-model="dongCode"
          :options="dongs"
          @change="houseCodeList"
        ></b-form-select>
      </b-col>
      <!-- 집 종류 선택-->
      <b-col class="select">
        <b-form-select
          size="sm"
          class="mt-2 ml-2"
          v-model="houseCode"
          :options="houseCodes"
          @change="searchHouse"
        ></b-form-select>
      </b-col>
    </b-row>
    <b-row class="text-right">
      <b-col>
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            id="house-sell-tipe-checkbox-group"
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="flavour-1"
            size="sm"
            switches
            @change="searchHouse"
          ></b-form-checkbox-group>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
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
      selected: ["buy", "year", "month"], // Must be an array reference!
      options: [
        { text: "매매", value: "buy" },
        { text: "전세", value: "year" },
        { text: "월세", value: "month" },
      ],
    };
  },
  // 보통 state에서 데이터를 가져올 때 사용한다
  computed: {
    // map 사용 시
    ...mapState([
      "sidos",
      "guguns",
      "dongs",
      "houseCodes",
      "housesfortableBuy",
    ]),
  },
  methods: {
    ...mapActions([
      "getSido",
      "getGugun",
      "getDong",
      "getHouseCode",
      "getHouseBuy",
      "getHouseYear",
      "getHouseMonth",
    ]),
    ...mapMutations([
      "CLEAR_GUGUN_LIST",
      "CLEAR_SIDO_LIST",
      "CLEAR_DONG_LIST",
      "CLEAR_HOUSE_CODE_LIST",
      "CLEAR_HOUSE",
      "CLEAR_TOTAL_HOUSE_SIMPLE_LIST",
      "CLEAR_TOTAL_HOUSE_DETAIL_LIST",
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
      this.CLEAR_HOUSE();
      this.CLEAR_TOTAL_HOUSE_SIMPLE_LIST();
      this.CLEAR_TOTAL_HOUSE_DETAIL_LIST();
      this.selected.forEach((select) => {
        if (this.sidoCode && this.gugunCode && this.dongCode) {
          if (select === "buy") {
            this.getHouseBuy([this.dongCode, this.houseCode, select]);
          } else if (select === "year") {
            this.getHouseYear([this.dongCode, this.houseCode, select]);
          } else {
            this.getHouseMonth([this.dongCode, this.houseCode, select]);
          }
        }
      });
    },
  },
  created() {
    // Action을 호출.
    this.sidoList();
  },
};
</script>

<style>
.custom-select {
  width: 95%;
}
</style>
