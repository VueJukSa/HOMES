<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-info">
      <b-row>
        <b-col xl="4" md="6">
          <card class="card-stats" :show-footer-line="true">
            <b-row>
              <b-col>
                <p>&#128293; HOT 1</p>
                <slot>
                  <h5 class="card-title text-uppercase text-muted mb-0">
                    {{ houseTopLank[0].시군구 }} {{ houseTopLank[0].도로명 }}
                  </h5>
                  <span class="h2 font-weight-bold mb-0">{{
                    houseTopLank[0].단지명
                  }}</span>
                </slot>
              </b-col>
            </b-row>

            <p class="mt-3 mb-0 text-sm">
              <slot name="footer" v-if="houseTopLank[0].전월세구분 == '전세'">{{
                houseTopLank[0].전월세구분
              }}</slot>
              <slot name="footer"
                >보증금: {{ houseTopLank[0].보증금 }}(만원)
              </slot>
              <slot name="footer" v-if="houseTopLank[0].전월세구분 != '전세'"
                >/ 월세: {{ houseTopLank[0].월세 }}(만원)
              </slot>
            </p>
            <p style="font-size: 0.7em">
              <slot name="footer">
                전용면적: {{ houseTopLank[0].전용면적 }}(m²)
              </slot>
            </p>
          </card>
        </b-col>

        <b-col xl="4" md="6">
          <card class="card-stats" :show-footer-line="true">
            <b-row>
              <b-col>
                <p>&#128293; HOT 2</p>

                <slot>
                  <h5 class="card-title text-uppercase text-muted mb-0">
                    {{ houseTopLank[1].시군구 }} {{ houseTopLank[1].도로명 }}
                  </h5>
                  <span class="h2 font-weight-bold mb-0">{{
                    houseTopLank[1].단지명
                  }}</span>
                </slot>
              </b-col>
            </b-row>

            <p class="mt-3 mb-0 text-sm">
              <slot name="footer" v-if="houseTopLank[1].전월세구분 == '전세'">{{
                houseTopLank[1].전월세구분
              }}</slot>
              <slot name="footer"
                >보증금: {{ houseTopLank[1].보증금 }}(만원)
              </slot>
              <slot name="footer" v-if="houseTopLank[1].전월세구분 != '전세'"
                >/ 월세: {{ houseTopLank[1].월세 }}(만원)
              </slot>
            </p>
            <p style="font-size: 0.7em">
              <slot name="footer">
                전용면적: {{ houseTopLank[1].전용면적 }}(m²)
              </slot>
            </p>
          </card>
        </b-col>

        <b-col xl="4" md="6">
          <card class="card-stats" :show-footer-line="true">
            <b-row>
              <b-col>
                <p>&#128293; HOT 3</p>

                <slot>
                  <h5 class="card-title text-uppercase text-muted mb-0">
                    {{ houseTopLank[2].시군구 }} {{ houseTopLank[2].도로명 }}
                  </h5>
                  <span class="h2 font-weight-bold mb-0">{{
                    houseTopLank[2].단지명
                  }}</span>
                </slot>
              </b-col>
            </b-row>

            <p class="mt-3 mb-0 text-sm">
              <slot name="footer" v-if="houseTopLank[2].전월세구분 == '전세'">{{
                houseTopLank[2].전월세구분
              }}</slot>
              <slot name="footer"
                >보증금: {{ houseTopLank[2].보증금 }}(만원)
              </slot>
              <slot name="footer" v-if="houseTopLank[2].전월세구분 != '전세'"
                >/ 월세: {{ houseTopLank[2].월세 }}(만원)
              </slot>
            </p>
            <p style="font-size: 0.7em">
              <slot name="footer">
                전용면적: {{ houseTopLank[2].전용면적 }}(m²)
              </slot>
            </p>
          </card>
        </b-col>
      </b-row>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="8" class="mb-1 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h5 class="title h3 text-white mb-0" id="title">
                  집값 변동 추이 (단위 0.1%)
                </h5>
                <h6 class="text-light text-uppercase ls-1 mb-0">
                  서울,강남,강북
                </h6>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                  <b-nav-item
                    :active="bigLineChart.activeIndex === 0"
                    link-classes="py-2 px-3"
                    @click.prevent="initBigChart(0)"
                  >
                    <span class="d-none d-md-block">서울</span>
                    <span class="d-md-none">M</span>
                  </b-nav-item>

                  <b-nav-item
                    link-classes="py-2 px-3"
                    :active="bigLineChart.activeIndex === 1"
                    @click.prevent="initBigChart(1)"
                  >
                    <span class="d-none d-md-block">강남</span>
                    <span class="d-md-none">M</span>
                  </b-nav-item>

                  <b-nav-item
                    :active="bigLineChart.activeIndex === 2"
                    link-classes="py-2 px-3"
                    @click.prevent="initBigChart(2)"
                  >
                    <span class="d-none d-md-block">강북</span>
                    <span class="d-md-none">M</span>
                  </b-nav-item>
                </b-nav>
              </b-col>
            </b-row>

            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </card>
        </b-col>

        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <h3>
              <p>🔍 똑똑하게 집 구하기</p>
            </h3>
            <h6 class="text-light text-uppercase ls-3 mb-0" align="right">
              순서대로 따라가며 점검하기!
            </h6>
            <hr />
            <a href="https://blog.naver.com/land_admin/221172176139">
              <p>&nbsp;&nbsp; 1.&nbsp;&nbsp; 가용자금 확인 및 대출 계획</p></a
            >
            <a href="http://blog.naver.com/land_admin/221172968369">
              <p>&nbsp;&nbsp; 2.&nbsp;&nbsp; 집 종류 및 지역 선택</p></a
            >
            <a href="http://blog.naver.com/land_admin/221172975575">
              <p>&nbsp;&nbsp; 3. &nbsp;&nbsp;정보 수집, 시세 파악</p></a
            >
            <a href="http://blog.naver.com/land_admin/221173052981">
              <p>&nbsp;&nbsp; 4.&nbsp;&nbsp; 부동산 방문, 집 구경</p></a
            >
            <a href="http://blog.naver.com/land_admin/221176290264">
              <p>&nbsp;&nbsp; 5. &nbsp;&nbsp;계약 및 잔금 치르기</p></a
            >
            <a href="http://blog.naver.com/land_admin/221176300611">
              <p>&nbsp;&nbsp; 6. &nbsp;&nbsp;소유권 이전등기</p></a
            >
            <a href="http://blog.naver.com/land_admin/221176306347">
              <p>&nbsp;&nbsp; 7.&nbsp;&nbsp; 인테리어 공사</p></a
            >
            <a href="http://blog.naver.com/land_admin/221176998743">
              <p>&nbsp;&nbsp; 8.&nbsp;&nbsp; 이사</p></a
            >
            <a href="http://blog.naver.com/land_admin/221177010341">
              <p>&nbsp;&nbsp; 9. &nbsp;&nbsp;거주하면서</p></a
            >
            <a href="http://blog.naver.com/land_admin/221177033918">
              <p>&nbsp;&nbsp;10. &nbsp;&nbsp;매도하기</p></a
            >
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";

// Components
import BaseProgress from "@/components/BaseProgress";
import StatsCard from "@/components/Cards/StatsCard";

// Tables
import SocialTrafficTable from "./Dashboard/SocialTrafficTable";
import PageVisitsTable from "./Dashboard/PageVisitsTable";

import { getHouseTopLank } from "@/api/house.js";

export default {
  components: {
    LineChart,
    BarChart,
    BaseProgress,
    StatsCard,
    PageVisitsTable,
    SocialTrafficTable,
  },
  data() {
    return {
      houseTopLank: [],
      bigLineChart: {
        allData: [
          [4, 5, 4, 4, 4, 5, 6, 7, 7, 7],
          [5, 5, 4, 4, 4, 5, 6, 7, 8, 8],
          [3, 5, 4, 4, 4, 4, 6, 7, 6, 6],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              label: "Performance",
              data: [40, 50, 40, 40, 40, 50, 60, 70, 70, 70],
            },
          ],
          labels: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
          ],
        },

        extraOptions: chartConfigs.blueChartOptions,
      },

      // redBarChart: {
      //   chartData: {
      //     labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      //     datasets: [
      //       {
      //         label: "Sales",
      //         data: [25, 20, 30, 22, 17, 29],
      //       },
      //     ],
      //   },
      //   extraOptions: chartConfigs.blueChartOptions,
      // },
    };
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: "Performance",
            data: this.bigLineChart.allData[index],
          },
        ],
        labels: [
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
        ],
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
  },
  mounted() {
    this.initBigChart(0);
  },
  created() {
    getHouseTopLank(
      (response) => {
        console.log(response.data);
        this.houseTopLank = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>
<style>
.el-table .cell {
  padding-left: 0px;
  padding-right: 0px;
}

.bg-default {
  background-color: white !important;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #11cdef;
}

.nav-pills .nav-link {
  color: #11cdef;
}

#title {
  color: black !important;
}

a {
  color: black;
}
p {
  margin-bottom: 0.3rem;
}
</style>
