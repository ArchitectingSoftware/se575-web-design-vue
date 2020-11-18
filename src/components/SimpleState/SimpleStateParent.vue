<template>
  <div>
    <div class="row">
      <b-container>
        <b-card class="col-12" bg-variant="dark" text-variant="white">
          <b-card-text>
            Im in the parent, and am going to create a few child cards.  State will be managed
            globally.
          </b-card-text>
          <b-card-text>
            <b-row class="my-1">
              <b-col sm="2" class="offset-sm-2">
                <label for="ctr-id">Counter Management:</label>
              </b-col>
              <b-col sm="6">
                <b-input-group prepend="Adjust Counter:">
                  <b-form-input
                    id="ctr-id"
                    type="number"
                    v-model.number="adjustAmount"
                  ></b-form-input>
                  <b-button variant="info" @click="adjustCounterState()"
                    >Adjust</b-button
                  >
                </b-input-group>
                <b-input-group prepend="Delay Amount:">
                  <b-form-input
                    id="ctr-delay"
                    type="number"
                    v-model.number="delayAmount"
                  ></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-container>
    </div>
    <hr />
    <div class="row">
      <div
        class="col-sm-6 mb-2"
        v-for="(card, index) in cardDataList"
        :key="index"
      >
        <simple-state-child
          :card-name="'Child:' + card.name"
          :card-data="card"
        ></simple-state-child>
      </div>
    </div>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SimpleStateChild from "./SimpleStateChild.vue";

import { getModule } from 'vuex-module-decorators'
import SimpleStoreModule from '@/store/SimpleCounterStore'

@Component({ components: { "simple-state-child": SimpleStateChild } })
export default class SimpleStateParent extends Vue {
  adjustAmount = 0;
  delayAmount = 2000;

  private simpleModule = getModule(SimpleStoreModule, this.$store)

  async adjustCounterState() {

  console.log("START ", this.adjustAmount)
  await this.simpleModule.adjustCounterDelayAction({delay: this.delayAmount, x: this.adjustAmount});
  console.log("STOP ", this.adjustAmount)
   // await this.simpleModule.adjustCounter(10)
  }

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
