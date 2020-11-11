<template>
  <div>
    <b-container>
      <props-parent></props-parent>
    </b-container>
  </div>
</template>
  

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PropsParent from '@/components/PropsDemo/PropsParent.vue'

@Component({
  components: {"props-parent":PropsParent}
})
export default class ParentChildView extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
