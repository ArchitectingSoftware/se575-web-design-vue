<template>
  <div>
    <b-container>
      <simple-state-parent></simple-state-parent>
    </b-container>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SimpleStateParent from '@/components/SimpleState/SimpleStateParent.vue'

@Component({
  components: {"simple-state-parent": SimpleStateParent}
})
export default class AppSimpleStateView extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
