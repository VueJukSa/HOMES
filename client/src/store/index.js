import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
import memberStore from "@/store/modules/memberStore.js";

export default new Vuex.Store({
  state: {
    sidos: [{ value: null, text: "시" }],
    guguns: [{ value: null, text: "구" }],
    dongs: [{ value: null, text: "동" }],
    houseCodes: [{ value: null, text: "집종류" }],
    totalHouses: [],
    // 매매
    housesBuy: [],
    // 전세
    housesYear: [],
    // 월세
    housesMonth: [],

    totalHousesforTable: [],
    // 테이블용 간단 버전
    housesfortableBuy: [],
    // 테이블용 간단 버전
    housesfortableYear: [],
    // 테이블용 간단 버전
    housesfortableMonth: [],

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
      state.guguns = [{ value: null, text: "구" }];
    },
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "시" }];
    },
    CLEAR_DONG_LIST(state) {
      state.dongs = [{ value: null, text: "동" }];
    },
    CLEAR_HOUSE_CODE_LIST(state) {
      state.houseCodes = [{ value: null, text: "집종류" }];
    },
    CLEAR_HOUSE(state) {
      state.house = null;
    },

    SET_HOUSE_DETAIL_LIST_BUY(state, houses) {
      state.housesBuy = houses;
      state.totalHouses.push(houses);
    },
    SET_HOUSE_DETAIL_LIST_YEAR(state, houses) {
      state.housesYear = houses;
      state.totalHouses.push(houses);
    },
    SET_HOUSE_DETAIL_LIST_MONTH(state, houses) {
      state.housesMonth = houses;
      state.totalHouses.push(houses);
    },

    SET_HOUSE_SIMPLE_LIST_BUY(state, houses) {
      state.housesfortableBuy = houses;
      state.totalHousesforTable.concat(houses);
    },
    SET_HOUSE_SIMPLE_LIST_YEAR(state, houses) {
      state.housesfortableYear = houses;
      state.totalHousesforTable.concat(houses);
    },
    SET_HOUSE_SIMPLE_LIST_MONTH(state, houses) {
      state.housesfortableMonth = houses;
      state.totalHousesforTable.concat(houses);
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

    getHouseBuy({ commit }, searchInfo) {
      const params = {
        dong: searchInfo[0],
        houseCode: searchInfo[1],
        contract: searchInfo[2],
      };
      http
        .get(`/map/houselist/apt`, { params })
        .then((response) => {
          //2. 비동기 진행 후 해당 데이터를 뮤테이션에게 넘김
          let simple = [];
          let detail = [];
          response.data.forEach((apt) => {
            simple.push({
              아파트이름: apt.단지명,
              도로명: apt.도로명,
              계약: "매매",
            });

            detail.push({
              시군구: apt.시군구,
              아파트이름: apt.단지명,
              도로명: apt.도로명,
              거래금액: apt.거래금액,
              층: apt.층,
              건축년도: apt.건축년도,
              전용면적: apt.전용면적,
            });
          });
          commit("SET_HOUSE_SIMPLE_LIST_BUY", simple);
          commit("SET_HOUSE_DETAIL_LIST_BUY", detail);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getHouseYear({ commit }, searchInfo) {
      const params = {
        dong: searchInfo[0],
        houseCode: searchInfo[1],
        contract: searchInfo[2],
      };
      http
        .get(`/map/houselist/apt`, { params })
        .then((response) => {
          //2. 비동기 진행 후 해당 데이터를 뮤테이션에게 넘김
          let simple = [];
          let detail = [];
          response.data.forEach((apt) => {
            simple.push({
              아파트이름: apt.단지명,
              도로명: apt.도로명,
              계약: "전세",
            });

            detail.push({
              시군구: apt.시군구,
              아파트이름: apt.단지명,
              도로명: apt.도로명,
              층: apt.층,
              건축년도: apt.건축년도,
              전용면적: apt.전용면적,
              보증금: apt.보증금,
            });
          });
          commit("SET_HOUSE_SIMPLE_LIST_YEAR", simple);
          commit("SET_HOUSE_DETAIL_LIST_YEAR", detail);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getHouseMonth({ commit }, searchInfo) {
      const params = {
        dong: searchInfo[0],
        houseCode: searchInfo[1],
        contract: searchInfo[2],
      };
      http
        .get(`/map/houselist/apt`, { params })
        .then((response) => {
          let simple = [];
          let detail = [];
          response.data.forEach((apt) => {
            simple.push({
              아파트이름: apt.단지명,
              도로명: apt.도로명,
              계약: "월세",
            });

            detail.push({
              시군구: apt.시군구,
              아파트이름: apt.단지명,
              도로명: apt.도로명,
              층: apt.층,
              건축년도: apt.건축년도,
              전용면적: apt.전용면적,
              보증금: apt.보증금,
              월세: apt.월세,
            });
          });
          commit("SET_HOUSE_SIMPLE_LIST_MONTH", simple);
          commit("SET_HOUSE_DETAIL_LIST_MONTH", detail);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    datailHouse({ commit }, house) {
      // 나중에는 일련번호로 집에대한 정보 가져와야한다
      commit("SET_DETAIL_HOUSE", house);
    },
    // login({ commit }, userid) {
    //   commit("SET_USERID", userid);
    // },
  },
  modules: {
    memberStore,
  },
  // plugins: [createPersistedState()],
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});
// export default store;
