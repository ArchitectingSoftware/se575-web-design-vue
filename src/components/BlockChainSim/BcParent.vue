<template>
  <div>
    <div class="row">
      <b-container>
        <b-card class="col-12" bg-variant="dark" text-variant="white">
          <b-card-text> 
            Im in the parent, and am going to create a few child cards. Im simulating a block
            chain updating itself
          </b-card-text>
        </b-card>
      </b-container>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-6 mb-2" v-for="(block, index) in blockList" :key="index">
        <bc-child
          :block-data="block"
          :block-index="index"
          @my-block-changed="onChildBlockChange"
        ></bc-child>
      </div>
    </div>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Emit, Vue, Watch } from "vue-property-decorator";
import BcChild from "./BcChild.vue";
import {BlockType, BlockChangeMessage} from './BlockType';

@Component({ components: { "bc-child": BcChild } })
export default class BcParent extends Vue {
  blockList: BlockType[] = [
    {
      id: 1,
      parentHash: '0000000000000000000000000000000000000000000000000000000000000000',
      myHash: "<NOT_KNOWN_YET>",
      dataValue: "<CHANGE_ME>"
    },
    {
      id: 2,
      parentHash: "<NOT_KNOWN_YET>",
      myHash: "<NOT_KNOWN_YET>",
      dataValue: "<CHANGE_ME>"
    },
    {
      id: 3,
      parentHash: "<NOT_KNOWN_YET>",
      myHash: "<NOT_KNOWN_YET>",
      dataValue: "<CHANGE_ME>"
    },
    {
      id: 4,
      parentHash: "<NOT_KNOWN_YET>",
      myHash: "<NOT_KNOWN_YET>",
      dataValue: "<CHANGE_ME>"
    },
 
  ];


  onChildBlockChange(bMsg: BlockChangeMessage){
    console.log(bMsg)
    //make things a little easier, not necessary but unpack arguements into local variables
    const msgIdx = bMsg.idx;
    const msgBlock = bMsg.data;

    //Step 1: Get length of BC
    const bcLen = this.blockList.length

    //make sure this is not the last element, if so, adjust the parent in the next array slot
    if((bcLen > 0) && (bMsg.idx < bcLen-1)){
        //adjust parent block reletive to changed block
        this.blockList[msgIdx+1].parentHash = msgBlock.myHash
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
