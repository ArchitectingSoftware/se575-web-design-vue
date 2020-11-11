<template>
  <div>
    <div class="row">
      <b-container>
        <b-card class="col-12" bg-variant="dark" text-variant="white">
          <b-card-text> Im in the parent, and am going to create a few child cards </b-card-text>
        </b-card>
      </b-container>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-6 mb-2" v-for="(card, index) in cardDataList" :key="index">
        <props-child
          :card-name="'Child:' + card.name"
          :card-data="card"
        ></props-child>
      </div>
    </div>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PropsChild from "./PropsChild.vue";

@Component({ components: { "props-child": PropsChild } })
export default class PropsParent extends Vue {
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
