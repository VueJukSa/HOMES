<template>
  <b-container class="bv-example-row mt-3">
    <b-row class="mb-1">
      <board-answer-write-form type="register" />
    </b-row>
  </b-container>
</template>

<script>
// import moment from "moment";
// import http from "@/util/http-common";
import BoardAnswerWriteForm from "./child/BoardAnswerWriteForm.vue";

export default {
  data() {
    return {};
  },
  computed: {
    message() {
      if (this.article.content)
        return this.article.content.split("\n").join("<br>");
      return "";
    },
  },
  created() {},
  methods: {},
  components: {
    BoardAnswerWriteForm,
  },
};
</script>

<style></style>
