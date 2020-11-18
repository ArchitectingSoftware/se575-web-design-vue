<template>
  <div>
    <b-card :title="cardName">
      <b-card-text>
        Im a child component, this text does not change
      </b-card-text>
      <b-card-text>
        {{cardData.info}}
      </b-card-text>
      <b-card-text>
        The global counter state is {{globalCounter}}
      </b-card-text>
      <b-card-text>
          <b-input-group prepend="Adjust State">
              <b-form-input
                v-model.number="stateDeltaField"
                type="number"
              ></b-form-input>
              <b-button variant="info" @click="doAdjustClicked()">Adjust!</b-button>
            </b-input-group>
      </b-card-text>
    </b-card>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { getModule } from 'vuex-module-decorators'
import SimpleStoreModule from '@/store/SimpleCounterStore'

@Component
export default class SimpleStateChild extends Vue {
  @Prop() private cardName!: string;
  @Prop() private cardData!: {name: string; info: string; link1: string; link2: string}

  private simpleModule = getModule(SimpleStoreModule, this.$store)
  stateDeltaField = 0

  get globalCounter(){
      return this.simpleModule.counter
  }

  doAdjustClicked(){
      this.simpleModule.adjustCounter(this.stateDeltaField);
      this.stateDeltaField = 0;
  }

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
