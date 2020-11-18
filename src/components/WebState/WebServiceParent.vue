<template>
  <div>
    <div class="row">
      <b-container>
        <b-card class="col-12" bg-variant="dark" text-variant="white">
          <b-card-text>
            Before you start this demo make sure you have
            <code>json-server</code> installed via <br />
            <code>yarn global add json-server</code> or
            <code>npm install -g json-server</code>
            <br />
            After that run the server from the <code>/server</code> directory
            via
            <br />
            <code>start-test-server.sh</code>
            <br />
            This Demo Uses Proper State Management
          </b-card-text>
          <b-card-text>
            <b-row class="my-1">
              <b-col sm="2" class="offset-sm-2">
                <label for="server-address">Server Address:</label>
              </b-col>
              <b-col sm="6">
                <b-form-input
                  id="server-address"
                  v-model="defaultServerAddress"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="2" class="offset-sm-2">
                <label for="pub-id">Pub API:</label>
              </b-col>
              <b-col sm="6">
                <b-input-group prepend="ID:">
                  <b-form-input
                    id="pub-id"
                    type="number"
                    v-model.number="searchPubId"
                  ></b-form-input>
                  <b-button variant="info" @click="searchById()"
                    >Search</b-button
                  >
                  <b-button variant="primary" class="ml-2" @click="getAll()"
                    >Get All</b-button
                  >
                  <b-button variant="success" class="ml-2" @click="createNew()"
                    >Create Pub</b-button
                  >
                </b-input-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="8" class="offset-sm-2">
                <b-alert fade :show="showErrorBanner" dismissible variant="danger" @dismissed="showErrorBanner=false">
                  {{ errorMessage }}
                </b-alert>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="8" class="offset-sm-2">
                <b-alert fade :show="showOkBanner" dismissible variant="success" @dismissed="showOKBanner=false">
                  {{ okMessage }}
                </b-alert>
              </b-col>
            </b-row>
          </b-card-text>
          <b-card-text>
            Cache Status: {{cacheStatus}}
          </b-card-text>
        </b-card>
      </b-container>
    </div>
    <hr />
    <div class="row">
      <div
        class="col-sm-6 mb-2"
        v-for="(course, index) in courseList"
        :key="index"
      >
        <web-pub-child
          :card-data="course"
          @update-class-info="onUpdateClass"
        ></web-pub-child>
      </div>
    </div>
  </div>
</template>
  

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import WebServicePubCard from "./WebServicePubCard.vue";
import { AxiosResponse, AxiosError } from "axios";
import { CourseType } from "./CourseType";

import { getModule } from 'vuex-module-decorators'
import PubStoreModule from '@/store/PubsStore'

@Component({ components: { "web-pub-child": WebServicePubCard } })
export default class WebServiceParent extends Vue {
  private courseList: CourseType[] = [];
  private defaultServerAddress = "http://localhost:3000";
  private searchPubId = 1;
  private showErrorBanner = false;
  private errorMessage = "";
  private showOkBanner = false;
  private okMessage = "";

  private webModule = getModule(PubStoreModule, this.$store)

  //bind course list array to store
  get courseCache(){
    return this.webModule.courseList
  }

  get cacheStatus(){
    return this.webModule.cacheOK
  }
  //lifecycle hook when component is created
  async created(){
     await this.webModule.loadCache(this.defaultServerAddress + "/courses");

     if (this.cacheStatus){
        this.okMessage = "Cache Loaded OK";
        this.updateIfError(false)
     } else {
       this.okMessage = "Cache LoadFailure";
        this.updateIfError(false)
     }
  }

  private updateIfError(err: boolean){
    if (err === true){
      this.showErrorBanner = true;
      this.showOkBanner =  false;
    } else {
      this.showErrorBanner = false;
      this.showOkBanner =  true;
    }
  }

  searchById() {
    if (!this.cacheStatus){
        this.okMessage = "Cant search for a course because the cache is not loaded";
        this.updateIfError(false)
        return
     } 

    const foundCourse = this.courseCache.find( course => course.id === this.searchPubId )
    if (foundCourse){
      this.courseList = [foundCourse]
      this.okMessage = "Fetched Course with ID: " + this.searchPubId;
      this.updateIfError(false)

    } else {
      this.errorMessage = "Cannot find course with id: " + this.searchPubId 
      this.updateIfError(true)
    }
    console.log("searchbyid");
  }

  getAll() {
    console.log("getall");
    if (!this.cacheStatus){
        this.okMessage = "Cant display courses because the cache is not loaded";
        this.updateIfError(false)
        return
     } 

    this.courseList = this.courseCache
  }

  onUpdateClass(c: CourseType) {
    console.log("onUpdateClass")
    this.showOkBanner =  false;
    this.showErrorBanner = true;
    this.errorMessage = "Not Implemented Yet";

    //for now set it back
    this.courseList = this.courseCache

    
  }


  createNew() {
    this.showOkBanner =  false;
    this.errorMessage = "Not Implemented Yet";
    this.showErrorBanner = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
