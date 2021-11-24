<template>
  <b-container class="bv-example-row mt-3 ml-2">
    <div class="overflow-auto" v-if="rows != 0">
      <b-table
        id="my-table"
        :items="totalHousesforTable"
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="updateHit($event)"
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
    <div v-else class="bv-example-row mt-3">
      <b-row>
        <b-col><b-alert show variant="white"></b-alert></b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import HouseListRow from "@/components/House/HouseListRow.vue";
import { mapState } from "vuex";
import { upHouseHit } from "@/api/house.js";

export default {
  name: "HouseList",
  components: {
    HouseListRow,
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      isColor: false,
    };
  },
  computed: {
    ...mapState([
      "houseCodes",
      "housesBuy",
      "housesYear",
      "housesMonth",
      "housesfortableBuy",
      "housesfortableYear",
      "housesfortableMonth",
      "totalHouses",
      "totalHousesforTable",
    ]),
    rows() {
      return this.totalHousesforTable.length;
    },
  },
  methods: {
    updateHit(event) {
      let param = {
        id: event.ID,
      };
      upHouseHit(
        param,
        (response) => {
          console.log("집 조회수 ++");
        },
        (error) => {
          console.log(error);
        }
      );
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
