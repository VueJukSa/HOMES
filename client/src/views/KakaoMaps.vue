<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card
            title="Total traffic"
            type="gradient-red"
            sub-title="350,897"
            icon="ni ni-active-40"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Total traffic"
            type="gradient-orange"
            sub-title="2,356"
            icon="ni ni-chart-pie-35"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-success mr-2">12.18%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Sales"
            type="gradient-green"
            sub-title="924"
            icon="ni ni-money-coins"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-danger mr-2">5.72%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Performance"
            type="gradient-info"
            sub-title="49,65%"
            icon="ni ni-chart-bar-32"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-success mr-2">54.8%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--7">
      <b-row>
        <b-col cols="5">
          <b-card no-body class="border-0">
            <div style="height: 600px">
              <b-row>
                <b-col>
                  <house-search-bar />
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <house-list />
                </b-col>
              </b-row>
            </div>
          </b-card>
        </b-col>
        <b-col>
          <b-card no-body class="border-0">
            <div id="map-custom" class="map-canvas" style="height: 600px"></div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { API_KEY } from "./Maps/API_KEY";
import HouseSearchBar from "@/components/House/HouseSearchBar.vue";
import HouseList from "@/components/House/HouseList.vue";
import HouseDetail from "@/components/House/HouseDetail.vue";
import HousePagingBar from "@/components/House/HousePagingBar.vue";
import { mapState } from "vuex";

export default {
  name: "Maps",
  components: {
    HouseSearchBar,
    HouseList,
    HouseDetail,
    HousePagingBar,
  },
  data() {
    return {
      markerPositions1: [
        [33.452278, 126.567803],
        [33.452671, 126.574792],
        [33.451744, 126.572441],
      ],
      markerPositions2: [
        [37.499590490909185, 127.0263723554437],
        [37.499427948430814, 127.02794423197847],
        [37.498553760499505, 127.02882598822454],
        [37.497625593121384, 127.02935713582038],
        [37.49629291770947, 127.02587362608637],
        [37.49754540521486, 127.02546694890695],
        [37.49646391248451, 127.02675574250912],
      ],
      markers: [],
      infowindow: null,
    };
  },
  computed: {
    // map 사용 시
    ...mapState(["houses"]),
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e73239ca18a94bf1c6e423a005cf474e&libraries=services";
      document.head.appendChild(script);
    }
  },
  watch: {
    houses: "initMap",
  },
  methods: {
    initMap() {
      const container = document.getElementById("map-custom");
      let options = {
        center: new kakao.maps.LatLng(37.541, 126.986),
        level: 5,
      };
      const map = new kakao.maps.Map(container, options);
      let cx = 0;
      let cy = 0;
      let cnt = 0;

      console.log("호출");
      // 주소-좌표 변환 객체를 생성합니다
      const geocoder = new kakao.maps.services.Geocoder();
      // 주소로 좌표를 검색합니다

      this.houses.forEach((house) => {
        console.log(`${house.sigungu} ${house.roadname}`);
        geocoder.addressSearch(
          `${house.sigungu} ${house.roadname}`,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
              // 마커 이미지의 이미지 주소입니다
              var imageSrc =
                "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

              // 마커 이미지의 이미지 크기 입니다
              var imageSize = new kakao.maps.Size(24, 35);

              // 마커 이미지를 생성합니다
              var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
              console.log(result[0].y, result[0].x);
              cx += parseFloat(result[0].x);
              cy += parseFloat(result[0].y);
              cnt++;
              // 마커를 생성합니다
              var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(result[0].y, result[0].x), // 마커를 표시할 위치
                title: house.danjiname, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage, // 마커 이미지
              });
              if (cnt > 0) {
                console.log(cy / cnt, cx / cnt, cnt);
                map.setCenter(new kakao.maps.LatLng(cy / cnt, cx / cnt));
              }
            }
          }
        );
      });
    },

    // displayInfoWindow() {
    //   if (this.infowindow && this.infowindow.getMap()) {
    //     //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.
    //     this.map.setCenter(this.infowindow.getPosition());
    //     return;
    //   }

    //   var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    //     iwPosition = new kakao.maps.LatLng(33.450701, 126.570667), //인포윈도우 표시 위치입니다
    //     iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    //   this.infowindow = new kakao.maps.InfoWindow({
    //     map: this.map, // 인포윈도우가 표시될 지도
    //     position: iwPosition,
    //     content: iwContent,
    //     removable: iwRemoveable,
    //   });

    //   this.map.setCenter(iwPosition);
    // },
  },
};
</script>
