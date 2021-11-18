<template>
  <b-card>
    <b-container
      v-if="houses && houses.length != 0"
      class="bv-example-row mt-3"
    >
      <house-list-row
        v-for="(house, index) in houses"
        :key="index"
        :house="house"
      />
    </b-container>

    <b-card-footer class="py-1 d-flex justify-content-end">
      <base-pagination
        v-model="currentPage"
        :per-page="10"
        :total="50"
      ></base-pagination>
    </b-card-footer>
  </b-card>

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
    return {};
  },
  computed: {
    ...mapState(["houses"]),
  },
};
</script>

<style></style>
