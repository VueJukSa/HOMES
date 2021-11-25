<template>
  <footer class="footer px-4">
    <b-row align-v="center" class="justify-content-lg-between">
      <b-col lg="6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{ year }}

          Creative SSAFY 6기 서울13반 한혜성 박종근
        </div>
      </b-col>
      <b-col lg="6">
        <b-nav align="center" class="nav-footer justify-content-lg-end">
          <b-nav-item
            href="https://github.com/VueJukSa/House-Web-Application"
            target="_blank"
          >
            Git
          </b-nav-item>
          <b-nav-item
            href="https://www.creative-tim.com/license"
            target="_blank"
          >
            License
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
