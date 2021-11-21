<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="8">
        <h3 class="mb-0">정보 수정</h3>
      </b-col>
      <b-col cols="4" class="text-right">
        <a href="#!" class="btn btn-sm btn-primary">수정 </a>
      </b-col>
    </b-row>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">사용자 정보</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6"
            >user name
            <b-form-input
              type="text"
              label="Username"
              placeholder="username"
              v-model="username"
            >
            </b-form-input>
          </b-col>
          <b-col lg="6"
            >user email
            <b-form-input
              type="email"
              label="Email address"
              placeholder="email"
              v-model="email"
            >
            </b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6"
            >user id
            <b-form-input
              type="text"
              label="First Name"
              placeholder="userid"
              v-model="userid"
            >
            </b-form-input>
          </b-col>
        </b-row>
      </div>
      <!-- <hr class="my-4">

       Address
      <h6 class="heading-small text-muted mb-4">Contact information</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="12">
            <base-input
              type="text"
              label="Address"
              placeholder="Home Address"
              v-model="user.address"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="4">
            <base-input
              type="text"
              label="City"
              placeholder="City"
              v-model="user.city"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="text"
              label="Country"
              placeholder="Country"
              v-model="user.country"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              label="Postal Code"
              placeholder="ZIP Code"
              v-model="user.postalCode"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>  -->

      <hr class="my-4" />
      <!-- Description -->
      <h6 class="heading-small text-muted mb-4">About me</h6>
      <div class="pl-lg-4">
        <b-form-group
          label="About Me"
          label-class="form-control-label"
          class="mb-0"
          label-for="about-form-textaria"
        >
          <!--  <label class="form-control-label">About Me</label> -->
          <b-form-textarea
            rows="4"
            id="about-form-textaria"
            placeholder="A few words about you ..."
          ></b-form-textarea>
        </b-form-group>
      </div>
    </b-form>
  </card>
</template>
<script>
// export default {
//   methods: {
//     updateProfile() {
//       alert('Your data: ' + JSON.stringify(this.user));
//     }
//   },

// };
import { mapState, mapMutations } from "vuex";

const memberStore = "memberStore";

export default {
  name: "editProfileForm",
  components: {},
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
<style></style>
