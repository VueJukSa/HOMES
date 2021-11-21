<template>
  <b-card no-body class="card-profile" alt="Image placeholder" img-top>
    <b-row class="justify-content-center">
      <b-col lg="3" class="order-lg-2">
        <div class="card-profile-image">
          <a href="#">
            <b-img src="img/theme/team-4.jpg" rounded="circle" />
          </a>
        </div>
      </b-col>
    </b-row>

    <b-card-header class="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
      <div class="d-flex justify-content-between">
        <a class="btn btn-sm btn-default float-right" @click="editForm">수정</a>
      </div>
    </b-card-header>

    <b-card-body class="pt-0">
      <b-row>
        <b-col>
          <div class="card-profile-stats d-flex justify-content-center mt-md-5">
            <div>
              <span class="heading">10</span>
              <span class="description">게시글수</span>
            </div>
            <div>
              <span class="heading">89</span>
              <span class="description">댓글수</span>
            </div>
          </div>
        </b-col>
      </b-row>

      <div class="text-left">
        <div class="info pl-3">
          <h5 class="h3">
            아이디
            <span class="font-weight-light pl-2">{{ userInfo.userid }}</span>
          </h5>
        </div>
        <div class="info">
          <h5 class="h3 ml-6">
            닉네임
            <span class="font-weight-light pl-2">{{ userInfo.username }}</span>
          </h5>
        </div>

        <div class="info pl-3">
          <h5 class="h3">
            이메일
            <span class="font-weight-light pl-2">{{ userInfo.email }}</span>
          </h5>
        </div>
        <div class="info">
          <h5 class="h3 ml-6">
            가입날짜
            <span class="font-weight-light pl-2">{{
              userInfo.joindate | datafilter
            }}</span>
          </h5>
        </div>

        <div class="pl-3">
          <h5 class="h3">
            관심주거형태
            <span class="font-weight-light pl-2">asd</span>
          </h5>
        </div>
        <div class="pl-3">
          <h5 class="h3">
            관심지역
            <span class="font-weight-light"
              ><i class="ni education_hat pl-3"> </i> {{ this.gg }}</span
            >
          </h5>
        </div>

        <hr class="my-4" />
        <div pl-3>
          <p>
            {{ userInfo.explanation }}
          </p>
          <!-- <p v-else>소개를 입력하세요</p> -->
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
import { mapState } from "vuex";

const memberStore = "memberStore";
export default {
  data() {
    return {
      gg: ["강서구 내발산동", "강남구 논현동"],
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    editForm() {
      this.$router.push({ name: "BoardWrite" });
    },
  },
  filters: {
    datafilter: (value) => {
      return value.substr(0, 10);
    },
  },
};
</script>
<style>
.info {
  display: inline-block;
  width: 45%;
}
</style>
