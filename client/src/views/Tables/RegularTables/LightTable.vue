<template>
  <b-card no-body>
    <b-card-header class="border-0">
      <h3 class="mb-0">게시판</h3>
    </b-card-header>
    <b-row class="mb-1 mr-3">
      <b-col class="text-right">
        <b-button variant="outline-primary" @click="moveWrite()"
          >글쓰기</b-button
        >
      </b-col>
    </b-row>
    <el-table
      id="my-table"
      class="table-responsive table"
      header-row-class-name="thead-light"
      :data="articles"
      @row-click="rowClicked($event)"
    >
      <el-table-column label="글번호" min-width="100px" prop="name">
        <template v-slot="{ row }">
          <b-media no-body class="align-items-center">
            <b-media-body>
              <span class="font-weight-600 name mb-0 text-sm">{{
                row.articleno
              }}</span>
            </b-media-body>
          </b-media>
        </template>
      </el-table-column>

      <el-table-column label="이름" min-width="300px" prop="name">
        <template v-slot="{ row }">
          <b-media no-body class="align-items-center">
            <b-media-body>
              <span class="font-weight-600 name mb-0 text-sm">{{
                row.subject
              }}</span>
            </b-media-body>
          </b-media>
        </template>
      </el-table-column>

      <el-table-column label="글쓴이" min-width="150px" prop="regtime">
        <template v-slot="{ row }">
          <b-media no-body class="align-items-center">
            <b-media-body>
              <span class="font-weight-600 name mb-0 text-sm">{{
                row.userid
              }}</span>
            </b-media-body>
          </b-media>
        </template>
      </el-table-column>

      <el-table-column label="작성시간" min-width="150px" prop="regtime">
        <template v-slot="{ row }">
          <b-media no-body class="align-items-center">
            <b-media-body>
              <span class="font-weight-600 name mb-0 text-sm">{{
                row.regtime
              }}</span>
            </b-media-body>
          </b-media>
        </template>
      </el-table-column>

      <el-table-column label="조회수" min-width="100px" prop="regtime">
        <template v-slot="{ row }">
          <b-media no-body class="align-items-center">
            <b-media-body>
              <span class="font-weight-600 name mb-0 text-sm">{{
                row.hit
              }}</span>
            </b-media-body>
          </b-media>
        </template>
      </el-table-column>
    </el-table>

    <b-card-footer class="py-4 d-flex justify-content-end">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </b-card-footer>
  </b-card>
</template>
<script>
import projects from "./../projects";
import { Table, TableColumn } from "element-ui";
import { listArticle, getTotalCount } from "@/api/board.js";
import BoardListRow from "@/views/Tables/RegularTables/child/BoardListRow";
export default {
  name: "light-table",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    BoardListRow,
  },
  data() {
    return { projects, articles: [], currentPage: 1, perPage: 5, total: 0 };
  },
  created() {
    let param = {
      pg: this.currentPage,
      spp: this.perPage,
      key: null,
      word: null,
    };
    listArticle(
      param,
      (response) => {
        this.articles = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
    getTotalCount(
      param,
      (response) => {
        this.total = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
  watch: {
    currentPage: "getArticle",
  },
  computed: {
    rows() {
      return this.total;
    },
  },
  methods: {
    moveWrite() {
      this.$router.push({ name: "BoardWrite" });
    },
    getArticle() {
      let param = {
        pg: this.currentPage,
        spp: this.perPage,
        key: null,
        word: null,
      };
      listArticle(
        param,
        (response) => {
          console.log(response);
          this.articles = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
    },
    rowClicked(event) {
      this.$router.push({
        name: "BoardView",
        params: { articleno: event.articleno },
      });
    },
  },
};
</script>
