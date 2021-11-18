<template>
  <b-row class="mt-1 mb-1 pr-2 pl-1 text-center">
    <b-col>
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
    <b-col>
      <b-form-select
        size="sm"
        class="mt-2"
        v-model="gugunCode"
        :options="guguns"
        @change="searchApt"
      ></b-form-select>
    </b-col>
    <!-- 아파트 종류 선택 -->
    <b-col class="pl-0">
      <b-form-select
        size="sm"
        class="mt-2"
        v-model="gugunCode"
        :options="guguns"
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
    };
  },
  // 보통 state에서 데이터를 가져올 때 사용한다
  computed: {
    // map 사용 시
    ...mapState(["sidos", "guguns", "houses"]),
  },
  methods: {
    ...mapActions(["getSido", "getGugun", "getHouseList"]),
    ...mapMutations(["CLEAR_GUGUN_LIST", "CLEAR_SIDO_LIST"]),
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
    searchApt() {
      if (this.gugunCode) {
        this.getHouseList(this.gugunCode);
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
