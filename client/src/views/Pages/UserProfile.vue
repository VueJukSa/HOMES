<template>
  <div>
    <div
      class="header pb-0 pt-0 pt-lg-7 d-flex align-items-center profile-header"
    ></div>
    <div>
      <span class="mask bg-gradient-success opacity-8"></span>
      <b-container fluid>
        <b-row align-h="center">
          <b-col xl="6" class="order-xl-2 mt-3 mb-6">
            <user-card></user-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "./UserProfile/EditProfileForm.vue";
import UserCard from "./UserProfile/UserCard.vue";

import { mapState, mapMutations } from "vuex";

const memberStore = "memberStore";

export default {
  components: {
    EditProfileForm,
    UserCard,
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
  },
  methods: {
    ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
  },
};
</script>
<style></style>
