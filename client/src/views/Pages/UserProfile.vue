<template>
  <div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-success opacity-8"></span>
        <!-- Header container -->
        <b-container fluid class="d-flex align-items-center">
          <b-row >
            <b-col lg="7" md="10">
              <h1 class="display-2 text-white">{{ userInfo.username }}({{ userInfo.userid }}) 안녕하세요</h1>
              <p class="text-white mt-0 mb-5">{{ userInfo.username }}({{ userInfo.userid }})님의 정보를 수정할 수 있습니다.</p>
              <a href="#!" class="btn btn-info">수정 완료</a>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="4" class="order-xl-2 mb-5">
          <user-card></user-card>
        </b-col>
        <b-col xl="8" class="order-xl-1">
          <edit-profile-form></edit-profile-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue';
  import UserCard from './UserProfile/UserCard.vue';

import { mapState, mapMutations } from "vuex";

const memberStore = "memberStore";

  export default {
    components: {
      EditProfileForm,
      UserCard
    },
    computed:{
    ...mapState(memberStore, ["isLogin", "userInfo"]),
    },
   methods: {
    ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
    },
  };
</script>
<style>
</style>
