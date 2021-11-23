<template>
  <b-card no-body>
    <b-container class="bv-example-row mt-3">
      <board-write-form type="modify" />
    </b-container>
  </b-card>
</template>

<script>
import BoardWriteForm from "./child/BoardWriteForm.vue";

export default {
  name: "BoardUpdate",
  components: {
    BoardWriteForm,
  },
};
</script>

<style></style>
