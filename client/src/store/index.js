import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    houses: [],
    house: null,
    userid: "",
  },
  mutations: {
    // 3. 뮤테이션은 해당 데이터를 받는다
    GET_SIDO_LIST(state, sidos) {
      sidos.forEach((sido) => {
        // 4. state에 있는 데이터를 직접 수정
        state.sidos.push({
          value: sido.sidoCode,
          text: sido.sidoName,
        });
      });
    },
    GET_GUGUN_LIST(state, guguns) {
      guguns.forEach((gugun) => {
        state.guguns.push({
          value: gugun.gugunCode,
          text: gugun.gugunName,
        });
      });
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "선택하세요" }];
    },
    SET_HOUSE_LIST(state, houses) {
      state.houses = houses;
    },
    SET_DETAIL_HOUSE(state, house) {
      state.house = house;
    },
    SET_USERID(state, userid) {
      state.userid = userid;
    },
  },
  // 비동기만 처리
  actions: {
    // 1. 액션 호출
    getSido({ commit }) {
      http
        .get(`/map/sido`)
        .then((response) => {
          //2. 비동기 진행 후 해당 데이터를 뮤테이션에게 넘김
          commit("GET_SIDO_LIST", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getGugun({ commit }, sidoCode) {
      const params = { sido: sidoCode };
      http
        .get(`/map/gugun`, { params })
        .then((response) => {
          //2. 비동기 진행 후 해당 데이터를 뮤테이션에게 넘김
          commit("GET_GUGUN_LIST", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getHouseList({ commit }, gugunCode) {
      // const KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
      const KEY = `fSoOVDMB7t8UixqTl6RO4oG86zqwigHcHDarqzeT4kSmNVf4ouJdt86NDF6sk6jXI9ax%2B7W0Q0RmA%2BJZnLIonA%3D%3D`;
      const URL = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev`;
      const params = {
        LAWD_CD: gugunCode,
        DEAL_YMD: "202110",
        serviceKey: decodeURIComponent(KEY),
      };
      http
        .get(URL, { params })
        .then((response) => {
          commit("SET_HOUSE_LIST", response.data.response.body.items.item);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    datailHouse({ commit }, house) {
      // 나중에는 일련번호로 집에대한 정보 가져와야한다
      commit("SET_DETAIL_HOUSE", house);
    },
    login({ commit }, userid) {
      commit("SET_USERID", userid);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
