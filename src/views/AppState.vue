<template>
  <div>
    <b-container>
      <p> AppStateView </p>
    </b-container>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AppStateView extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
