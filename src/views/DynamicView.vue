<template>
  <div class="accordion" role="tablist">
    <!-- DEMO 1 -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Binding</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div>
            <b-form-input
              v-model="textBoundDemo"
              placeholder="Enter Some Text - will be bount to textBoundDemo1"
            ></b-form-input>
            <div class="mt-2"><strong>Value:</strong> {{ textBoundDemo }}</div>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <!-- DEMO 2 -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info"
          >Show/Hide</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-form-checkbox v-model="showHideSwitch" name="check-button" switch>
            Show Hide Toggle <b>(Checked: {{ showHideSwitch }})</b>
          </b-form-checkbox>
          <b-card-text v-show="showHideSwitch"
            >Showing Hidden Stuff Here</b-card-text
          >
          <hr />
          <b-button @click="showHideButton = !showHideButton"
            >Simple Toggle Button</b-button
          >
          <b-card-text v-show="showHideButton"
            >Showing Hidden Stuff Here</b-card-text
          >
          <hr />
          <b-button
            @click="showHideButton2 = !showHideButton2"
            :variant="showHideButton2 ? 'success' : 'danger'"
            >Fancy Toggle Button</b-button
          >
          <b-card-text v-show="showHideButton2"
            >Showing Fancy Hidden Stuff Here</b-card-text
          >
        </b-card-body>
      </b-collapse>
    </b-card>

    <!-- Demo 3 -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info"
          >Conditional Render</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-form-checkbox v-model="renderSwitch" name="check-button" switch>
            Show Hide Toggle <b>(Checked: {{ renderSwitch }})</b>
          </b-form-checkbox>
          <b-card-text v-if="renderSwitch">New Stuff Here</b-card-text>
          <hr />
          <b-button @click="renderButton = !renderButton"
            >Simple Toggle Button</b-button
          >
          <b-card-text v-if="renderButton"
            >Loading Hidden Stuff Here</b-card-text
          >
          <hr />
          <b-button
            @click="renderButton2 = !renderButton2"
            :variant="renderButton2 ? 'success' : 'danger'"
            >Fancy Toggle Button</b-button
          >
          <b-card-text v-if="renderButton2"
            >Loading Fancy Hidden Stuff Here</b-card-text
          >
          <hr />
          <b-form-checkbox v-model="renderSwitch2" name="check-button" switch>
            If else test <b>(Checked: {{ renderSwitch2 }})</b>
          </b-form-checkbox>
          <b-card-text v-if="renderSwitch2"
            >Showing if part becuase true</b-card-text
          >
          <b-card-text v-else>Showing else part becuase false</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <!-- Demo 4 -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info">Looping</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="col-md-6">
            <b-input-group prepend="How Many">
              <b-form-input
                v-model="loopCountField"
                type="number"
              ></b-form-input>
              <b-button variant="info" @click="doItClicked()">Do It!</b-button>
            </b-input-group>
            <hr />
            <div v-for="(i, index) in loopCount" :key="i">
              <b-alert show
                >Looping at item {{ i }} - index is {{ index }}</b-alert
              >
            </div>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <!-- Demo 5 -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info"
          >Reactive and Watching</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="col-md-6">
            <b-input-group prepend="How Many">
              <b-form-input
                v-model="loopCountField2"
                type="number"
              ></b-form-input>
            </b-input-group>
            <hr />
            <div v-for="(i, index) in loopCount2" :key="i">
              <b-alert show
                >Looping at item {{ i }} - index is {{ index }}</b-alert
              >
            </div>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class DynamicView extends Vue {
  @Prop() private msg!: string;

  //Demo 1
  textBoundDemo = "";

  //Demo 2
  showHideSwitch = false;
  showHideButton = false;
  showHideButton2 = false;

  //Demo 3
  renderSwitch = false;
  renderSwitch2 = true;
  renderButton = false;
  renderButton2 = false;

  //Demo 4
  loopCountField = "0";
  loopCount = 0;

  doItClicked() {
    this.loopCount = parseInt(this.loopCountField);
  }

  //demo 5
  loopCountField2 = "0";
  loopCount2 = 0;

  @Watch("loopCountField2")
  onLoopCountFieldChanged() {
    if (this.loopCountField2 === "") this.loopCountField2 = "0";
    this.loopCount2 = parseInt(this.loopCountField2);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
