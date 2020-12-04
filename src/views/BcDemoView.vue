<template>
  <div>
    <b-container>
      <bc-parent></bc-parent>
    </b-container>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BcParent from '@/components/BlockChainSim/BcParent.vue'

@Component({
  components: {"bc-parent":BcParent}
})
export default class BcDemoView extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
