<template>
  <b-card no-body id="memo">
    <b-container class="bv-example-row mt-3">
      <b-row>
        <b-media no-body class="align-items-center ml-3 mb-2 media">
          <span class="avatar avatar-sm rounded-circle">
            <img alt="Image placeholder" src="img/theme/team-4.jpg" />
          </span>
          <b-media-body class="ml-2 d-none d-lg-block">
            <span class="mb-0 text-sm font-weight-bold">{{
              userInfo.username
            }}</span>
          </b-media-body>
        </b-media>
      </b-row>
      <b-row class="mb-1">
        <b-col style="text-align: left">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="content-group" label-for="content">
              <b-form-textarea
                id="content"
                v-model="article.content"
                placeholder=""
                rows="4"
                max-rows="15"
              ></b-form-textarea>
            </b-form-group>

            <b-button
              type="submit"
              variant="primary"
              class="m-1 btn float-right"
              v-if="this.type === 'register'"
              >등록</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
import http from "@/util/http-common";
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "BoardWriteForm",
  data() {
    return {
      article: {
        subject: "",
        content: "",
      },
      isUserid: false,
    };
  },
  props: {
    type: { type: String },
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  created() {
    if (this.type === "modify") {
      http.get(`/board/${this.$route.params.articleno}`).then(({ data }) => {
        this.article = data;
      });
      this.isUserid = true;
    }
    console.log(this.userid);
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      let err = true;
      let msg = "";

      !this.article.content &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.content.focus());

      if (!err) alert(msg);
      else
        this.type === "register"
          ? this.registArticleAnswer()
          : this.modifyArticle();
    },
    onReset(event) {
      event.preventDefault();
      // this.article.articleno = 0;
      // this.article.subject = "";
      this.article.content = "";
      // this.$router.push({ name: "BoardList" });
    },
    registArticleAnswer() {
      console.log(this.article.articleno);
      http
        .post(`/board/answer`, {
          userid: this.userInfo.userid,
          content: this.article.content,
          articleno: this.$route.params.articleno,
        })
        .then(({ data }) => {
          let msg = "댓글 등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "댓글 등록이 완료되었습니다.";
          }
          console.log(msg);
          this.moveList();
        });
    },
    modifyArticle() {
      http
        .put(`/board`, {
          articleno: this.$route.params.articleno,
          userid: this.userInfo.userid,
          subject: this.article.subject,
          content: this.article.content,
        })
        .then(({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);
          // 현재 route를 /list로 변경.
          this.$router.push({ name: "BoardList" });
        });
    },
    moveList() {
      this.$router.push({ name: "BoardList" });
    },
  },
};
</script>

<style>
#memo {
  width: 100rem;
}
</style>
