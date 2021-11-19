import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    dongs: [{ value: null, text: "선택하세요" }],
    houseCodes: [{ value: null, text: "선택하세요" }],
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
    GET_DONG_LIST(state, dongs) {
      dongs.forEach((dong) => {
        state.dongs.push({
          value: dong.dongCode,
          text: dong.dongName,
        });
      });
    },
    GET_HOUSE_CODE_LIST(state, houseCodes) {
      houseCodes.forEach((houseCode) => {
        state.houseCodes.push({
          value: houseCode.id,
          text: houseCode.name,
        });
      });
    },

    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_DONG_LIST(state) {
      state.dongs = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_HOUSE_CODE_LIST(state) {
      state.houseCodes = [{ value: null, text: "선택하세요" }];
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
    getDong({ commit }, gugunCode) {
      const params = { gugun: gugunCode };
      http
        .get(`/map/dong`, { params })
        .then((response) => {
          //2. 비동기 진행 후 해당 데이터를 뮤테이션에게 넘김
          commit("GET_DONG_LIST", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getHouseCode({ commit }) {
      const params = {};
      http
        .get(`/map/housecode`, { params })
        .then((response) => {
          //2. 비동기 진행 후 해당 데이터를 뮤테이션에게 넘김
          commit("GET_HOUSE_CODE_LIST", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getHouseList({ commit }, searchInfo) {
      console.log(searchInfo[0], searchInfo[1]);
      const params = {
        dong: searchInfo[0],
        houseCode: searchInfo[1],
      };
      http
        .get(`/map/houselist`, { params })
        .then((response) => {
          console.log(response);
          //2. 비동기 진행 후 해당 데이터를 뮤테이션에게 넘김
          // commit("GET_HOUSE_CODE_LIST", response.data);
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
