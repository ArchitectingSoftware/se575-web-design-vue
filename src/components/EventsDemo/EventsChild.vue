<template>
  <div>
    <b-card :title="cardName">
      <b-card-text>
        Im a child component, this text does not change
      </b-card-text>
      <b-card-text>
        {{cardData.info}}
      </b-card-text>
      <a href="#" class="card-link" @click="notifyParentSummary">Summary Event</a>
      <b-link href="#" class="card-link" @click="notifyParentDetail">Detail Event</b-link>
    </b-card>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import {CardType} from './CardTypes';

@Component
export default class EventsChild extends Vue {
  @Prop() private cardName!: string;
  @Prop() private cardData!:  CardType;

  @Emit('my-card-summary-notification')
  notifyParentSummary(){
    console.log('summary')
    return 'Hello from child - ' + this.cardData.name;
  }

  @Emit('my-card-detail-notification')
  notifyParentDetail(){
    console.log('detail')
    return this.cardData;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
