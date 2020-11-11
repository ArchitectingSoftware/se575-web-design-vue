<template>
  <div>
    <b-card title="Course Record">
      <b-card-text> Details </b-card-text>
      <b-card-text>
        <b-container>
          <b-row class="my-1">
            <b-col sm="3" class="offset-sm-2 text-left">
              <label>CourseID:</label>
            </b-col>
            <b-col sm="6">
              <b-form-input
                size="sm"
                v-model="cardData.id"
                readonly
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3" class="offset-sm-2 text-left">
              <label>Code:</label>
            </b-col>
            <b-col sm="6">
              <b-form-input size="sm" v-model="cardData.code"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3" class="offset-sm-2 text-left">
              <label>Level:</label>
            </b-col>
            <b-col sm="6">
              <b-form-input size="sm" v-model="cardData.level"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3" class="offset-sm-2 text-left">
              <label>Title:</label>
            </b-col>
            <b-col sm="6">
              <b-form-input size="sm" v-model="cardData.title"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-2">
            <b-col sm="2" class="offset-sm-2">
              <b-button
                :disabled="!cardDataChanged"
                variant="primary"
                size="sm"
                @click="updateClass()"
                >Update</b-button
              >
            </b-col>
          </b-row>
        </b-container>
      </b-card-text>
    </b-card>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from "vue-property-decorator";
import { CourseType } from "./CoursesType";

@Component
export default class EventsChild extends Vue {
  @Prop() private cardData!: CourseType;
  private cardDataChanged = false

  @Emit('update-class-info')
  updateClass() {
    this.cardDataChanged = false
    return this.cardData
  }

  @Watch('cardData', {immediate: false, deep: true})
  onCardDataChanged(){
      this.cardDataChanged = true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

