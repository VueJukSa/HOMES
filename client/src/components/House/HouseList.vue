<template>
  <b-container class="bv-example-row mt-3 ml-2">
    <div class="overflow-auto">
      <b-table
        v-if="rows != 0"
        id="my-table"
        :items="housesfortable"
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="test"
        responsive="sm"
      ></b-table>
      <b-pagination
        id="b-pagination"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        size="sm"
        align="center"
      ></b-pagination>
    </div>
  </b-container>

  <!-- <b-container v-else class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show>주택 목록이 없습니다.</b-alert></b-col>
    </b-row>
  </b-container> -->
</template>

<script>
import HouseListRow from "@/components/House/HouseListRow.vue";
import { mapState } from "vuex";

export default {
  name: "HouseList",
  components: {
    HouseListRow,
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      isColor: false,
    };
  },
  computed: {
    ...mapState(["houses", "housesfortable"]),
    rows() {
      return this.houses.length;
    },
  },
  methods: {
    test() {
      console.log("클릭");
    },
  },
};
</script>

<style>
table th,
td {
  padding: 5px 10px !important;
}
</style>
