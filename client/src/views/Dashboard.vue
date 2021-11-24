<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-info">
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

    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h5 class="h3 text-white mb-0">집값 변동 추이</h5>
                <h6 class="text-light text-uppercase ls-1 mb-1">
                  전국,수도권,서울,강남,강북
                </h6>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                  <b-nav-item
                    class="mr-2 mr-md-0"
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
                    <span class="d-md-none">W</span>
                  </b-nav-item>

                  <b-nav-item
                    class="mr-2 mr-md-0"
                    :active="bigLineChart.activeIndex === 2"
                    link-classes="py-2 px-3"
                    @click.prevent="initBigChart(2)"
                  >
                    <span class="d-none d-md-block">강북</span>
                    <span class="d-md-none">R</span>
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
            <!-- <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                <h5 class="h3 mb-0">Total orders</h5>
              </b-col>
            </b-row> -->

            <!-- <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart> -->
            <h1><i class="ni ni-check-bold"></i> 똑똑하게 집 구하기</h1>
            <hr />
            <a href="https://blog.naver.com/land_admin/221172176139">
              <h4>&nbsp;&nbsp; 1.&nbsp;&nbsp; 가용자금 확인 및 대출 계획</h4></a
            >
            <a href="http://blog.naver.com/land_admin/221172968369">
              <h4>&nbsp;&nbsp; 2.&nbsp;&nbsp; 집 종류 및 지역 선택</h4></a
            >
            <a href="http://blog.naver.com/land_admin/221172975575">
              <h4>&nbsp;&nbsp; 3. &nbsp;&nbsp;정보 수집, 시세 파악</h4></a
            >
            <a href="http://blog.naver.com/land_admin/221173052981">
              <h4>&nbsp;&nbsp; 4.&nbsp;&nbsp; 부동산 방문, 집 구경</h4></a
            >
            <a href="http://blog.naver.com/land_admin/221176290264">
              <h4>&nbsp;&nbsp; 5. &nbsp;&nbsp;계약 및 잔금 치르기</h4></a
            >
            <a href="http://blog.naver.com/land_admin/221176300611">
              <h4>&nbsp;&nbsp; 6. &nbsp;&nbsp;소유권 이전등기</h4></a
            >
            <a href="http://blog.naver.com/land_admin/221176306347">
              <h4>&nbsp;&nbsp; 7.&nbsp;&nbsp; 인테리어 공사</h4></a
            >
            <a href="http://blog.naver.com/land_admin/221176998743">
              <h4>&nbsp;&nbsp; 8.&nbsp;&nbsp; 이사</h4></a
            >
            <a href="http://blog.naver.com/land_admin/221177010341">
              <h4>&nbsp;&nbsp; 9. &nbsp;&nbsp;거주하면서</h4></a
            >
            <a href="http://blog.naver.com/land_admin/221177033918">
              <h4>&nbsp;&nbsp;10. &nbsp;&nbsp;매도하기</h4></a
            >
          </card>
        </b-col>
      </b-row>
      <!-- End charts-->

      <!--Tables-->
      <b-row class="mt-5">
        <b-col xl="8" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>
      </b-row>
      <!--End tables-->
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
      bigLineChart: {
        allData: [
          [0.4, 0.5, 0.4, 0.4, 0.4, 0.5, 0.6, 0.7, 0.7, 0.7],
          [0, 20, 5, 25, 10, 30, 15, 40, 40],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              label: "Performance",
              data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
            },
          ],
          labels: [
            "2022.01",
            "2022.02",
            "2022.03",
            "2022.04",
            "2022.05",
            "2022.06",
            "2022.07",
            "2022.08",
            "2022.09",
            "2022.10",
          ],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        chartData: {
          labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Sales",
              data: [25, 20, 30, 22, 17, 29],
            },
          ],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
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
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
  },
  mounted() {
    this.initBigChart(0);
  },
};
</script>
<style>
.el-table .cell {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
