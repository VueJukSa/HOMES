<template>
  <b-container class="bv-example-row mt-3 text-center">
    <b-col> <board-view></board-view></b-col>
    <b-col> <board-view-answer></board-view-answer></b-col>
    <b-col> <board-answer-form></board-answer-form> </b-col>
  </b-container>
</template>

<script>
import BoardView from "@/views/Tables/RegularTables/BoardView.vue";
import BoardViewAnswer from "@/views/Tables/RegularTables/BoardViewAnswer.vue";
import BoardAnswerForm from "@/views/Tables/RegularTables/child/BoardAnswerForm.vue";

export default {
  name: "BoardDetail",
  components: {
    BoardView,
    BoardViewAnswer,
    BoardAnswerForm,
  },
};
</script>

<style scoped>
.underline-hotpink {
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 70%,
    rgba(231, 27, 139, 0.3) 30%
  );
}
</style>
