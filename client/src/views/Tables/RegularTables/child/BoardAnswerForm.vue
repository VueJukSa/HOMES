<template>
  <b-container class="bv-example-row mt-3">
    <b-row
      class="mb-1"
      v-for="(answer, index) in answers"
      :key="index"
      :answer="answer"
    >
      <b-col>
        <b-card
          :header-html="`</h3><div><h6> ${answer.userid} </div>
          <div>${answer.regtime}</h6></div>`"
          class="mb-2"
          border-variant="dark"
          no-body
        >
          <b-card-body class="text-left">
            <div>{{ answer.content }}</div>
          </b-card-body>
          <b-button
            @click="deleteAnswer(answer.answerno)"
            type="reset"
            variant="danger"
            class="m-1"
            >삭제</b-button
          >
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import moment from "moment";
import http from "@/util/http-common";

export default {
  data() {
    return {
      answers: {},
    };
  },
  computed: {
    message() {
      if (this.answers.content)
        return this.answer.content.split("\n").join("<br>");
      return "";
    },
  },
  created() {
    http
      .get(`/board/answer/${this.$route.params.articleno}`)
      .then(({ data }) => {
        console.log(data);
        this.answers = data;
      });
  },
  methods: {
    deleteAnswer(answerno) {
      // console.log(answerno);
      http.delete(`/board/answer/${answerno}`).then(({ data }) => {
        console.log(data);
        this.$router.push({ name: "BoardList" });
      });
    },
  },
};
</script>

<style></style>
