<template>
  <b-card no-body>
    <b-container class="bv-example-row mt-3">
      <board-write-form type="register" />
    </b-container>
  </b-card>
</template>

<script>
import BoardWriteForm from "./child/BoardWriteForm.vue";

export default {
  name: "BoardWrite",
  components: {
    BoardWriteForm,
  },
};
</script>

<style></style>
