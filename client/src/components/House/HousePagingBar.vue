<template>
  <footer-border-variant class="py-1">
    <b-pagination
      v-model="currentPage"
      pills
      :total-rows="rows"
      size="sm"
      align="center"
    ></b-pagination>
  </footer-border-variant>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "HousePagingBar",
  data() {
    return {
      rows: 100,
      currentPage: 1,
    };
  },
};
</script>

<style></style>
