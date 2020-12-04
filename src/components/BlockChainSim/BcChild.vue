<template>
  <div>
    <b-card :title="'Block Chain Card ' + blockData.id">
      <b-card-text>
        Parent Hash: {{blockData.parentHash}}
      </b-card-text>
      <b-card-text>
          <b-input-group prepend="Block Data">
              <b-form-input
                v-model="blockData.dataValue"
              ></b-form-input>
            </b-input-group>
      </b-card-text>
      <b-card-text>
        My Hash: {{blockData.myHash}}
      </b-card-text>
    </b-card>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Emit, Vue, Watch } from "vue-property-decorator";
import {BlockType, BlockChangeMessage} from './BlockType';
import {sha256} from "js-sha256";

@Component
export default class BcChild extends Vue {
  @Prop()  private blockData!:  BlockType;
  @Prop()  private blockIndex!:  number;


  @Emit('my-block-changed')
  notifyParentDetail(): BlockChangeMessage{
    return {idx: this.blockIndex, data: this.blockData};
  }

  @Watch('blockData', {deep:true})
  onBlockDataChanged(newVal: BlockType, oldVal: BlockType){
      if (oldVal.parentHash !== newVal.parentHash){
          console.log('parent hash changed')
      }
      if (oldVal.dataValue !== newVal.dataValue){
          console.log('data Value changed')
      }
      this.blockData.myHash = sha256(this.blockData.parentHash + newVal.dataValue)
      console.log('block hash changed')
      this.notifyParentDetail()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
