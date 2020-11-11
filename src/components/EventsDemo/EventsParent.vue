<template>
  <div>
    <div class="row">
      <b-container>
        <b-card class="col-12" bg-variant="dark" text-variant="white">
          <b-card-text> 
            Im in the parent, and am going to create a few child cards. But 
            I know about how to deal with events 
          </b-card-text>
        </b-card>
      </b-container>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-6 mb-2" v-for="(card, index) in cardDataList" :key="index">
        <events-child
          :card-name="'Child:' + card.name"
          :card-data="card"
          @my-card-summary-notification="onSummaryNotify"
          @my-card-detail-notification="onDetailNotify"
        ></events-child>
      </div>
    </div>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import EventsChild from "./EventsChild.vue";
import {CardType} from './CardTypes';

@Component({ components: { "events-child": EventsChild } })
export default class EventsParent extends Vue {
  cardDataList = [
    {
      name: "First Card",
      info: "Card 1 Information",
      link1: "Link A1",
      link2: "Link A2",
    },
    {
      name: "Second Card",
      info: "Card 2 Information",
      link1: "Link B1",
      link2: "Link B2",
    },
    {
      name: "Third Card",
      info: "Card 3 Information",
      link1: "Link C1",
      link2: "Link C2",
    },
    {
      name: "Fourth Card",
      info: "Card 4 Information",
      link1: "Link D1",
      link2: "Link D2",
    },
    {
      name: "Fifth Card",
      info: "Card 5 Information",
      link1: "Link E1",
      link2: "Link E2",
    },
  ];

  onSummaryNotify(v: string){
    //cool bootstrap vue feature
    this.$bvToast.toast('Message: ' + v, {
      title: 'Basic Message From Child',
      autoHideDelay: 5000,
      appendToast: true
    })
  }

  onDetailNotify(c: CardType){
    //cool bootstrap vue feature
    const cText = JSON.stringify(c, null, 2)
    this.$bvToast.toast(cText, {
      title: 'Advanced Message From Child',
      autoHideDelay: 5000,
      appendToast: true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
