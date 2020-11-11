<template>
  <div>
    <b-container>
      <events-parent></events-parent>
    </b-container>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import EventsParent from '@/components/EventsDemo/EventsParent.vue'

@Component({
  components: {"events-parent":EventsParent}
})
export default class EventsView extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
