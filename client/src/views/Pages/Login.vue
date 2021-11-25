<template>
  <div>
    <!-- Header -->
    <div class="header bg-info py-7 py-lg-8 pt-lg-9">
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>SIGN IN</small>
              </div>
              <validation-observer
                v-slot="{ handleSubmit }"
                ref="formValidator"
              >
                <b-form role="form" @submit.prevent="handleSubmit">
                  <base-input
                    alternative
                    class="mb-3"
                    name="userid"
                    id="userid"
                    :rules="{ required: true }"
                    prepend-icon="ni ni-email-83"
                    placeholder="ID"
                    v-model="user.userid"
                    @keyup.enter="confirm"
                  >
                  </base-input>

                  <base-input
                    alternative
                    class="mb-3"
                    id="userpwd"
                    :rules="{ required: true }"
                    prepend-icon="ni ni-lock-circle-open"
                    type="password"
                    placeholder="Password"
                    v-model="user.userpwd"
                    @keyup.enter="confirm"
                  >
                  </base-input>

                  <!-- <b-form-checkbox v-model="model.rememberMe">Remember me</b-form-checkbox> -->
                  <div class="text-center">
                    <base-button
                      type="primary"
                      native-type="submit"
                      class="my-4"
                      @click="confirm"
                      >LOG IN</base-button
                    >
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6" class="text-right">
              <router-link to="/register" class="text-light" @click="movePage"
                ><small>Create new account</small></router-link
              >
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
const memberStore = "memberStore";

export default {
  name: "login",
  data() {
    return {
      user: {
        userid: null,
        userpwd: null,
      },
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError"]),
  },
  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    async confirm() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      if (this.isLogin) {
        await this.getUserInfo(token);
        this.$router.push({ name: "dashboard" });
      }
    },
    movePage() {
      this.$router.push({ name: "SignUp" });
    },
  },
};

// export default {
//   data() {
//     return {
//       user: {
//         userid: '',
//         userpwd: '',
//         // rememberMe: false
//       }
//     };
//   },
//   methods: {
//     onSubmit() {
//       // this will be called only after form is valid. You can do api call here to login
//     }
//   }
// };
</script>
<style>
.btn-primary:hover {
  color: #fff;
  background-color: #11cdef !important;
  border-color: #11cdef !important;
}

.btn-primary {
  color: #fff;
  background-color: #11cdef;
  border-color: #11cdef;
  -webkit-box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
}
</style>
