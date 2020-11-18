<template>
  <div>
    <b-container>
      <web-state-parent></web-state-parent>
    </b-container>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import WebServiceParent from '@/components/WebState/WebServiceParent.vue'

@Component({
  components: {"web-state-parent": WebServiceParent}
})
export default class AppWebStateView extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
