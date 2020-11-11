<template>
  <div>
    <b-card :title="cardName">
      <b-card-text>
        Im a child component, this text does not change
      </b-card-text>
      <b-card-text>
        {{cardData.info}}
      </b-card-text>
      <a href="#" class="card-link">{{cardData.link1}}</a>
      <b-link href="#" class="card-link">{{cardData.link2}}</b-link>
    </b-card>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PropsChild extends Vue {
  @Prop() private cardName!: string;
  @Prop() private cardData!: {name: string; info: string; link1: string; link2: string}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
