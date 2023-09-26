<script setup>
import axios from 'axios';
import {ref} from 'vue';
import router from "@/router";
import { useRoute } from "vue-router";

const title = ref('');
const image = ref('');
const status = ref('active');
const route = useRoute();
const handleFileChange = (e) =>{
  image.value = e.target.files[0];
}

const submit = async () => {
  if(!title.value || !image.value){
      alert("Plase fill the filed");
  }else{
    
    try {
      const formdata = new FormData();
      formdata.append('title', title.value)
      formdata.append('image', image.value)
      formdata.append('status', status.value)

      const response = await axios.post("/admin/sliders", formdata);
      if(response.data.success){
        alert("Data Upload Successfully");
        title.value = '';
        image.value = '';
      }
      router.push({ name: 'sliders' }); // Use router.push to navigate
    } catch (error) {
    }
  }
}

</script>



<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="card-header-2">
                <h5>New Slider Form</h5>
              </div>

              <form class="theme-form theme-form-2 mega-form" @submit.prevent="submit">
                <div class="row">
                  <div class="mb-4 row align-items-center">
                    <label class="form-label-title col-sm-2 mb-0" >Slider Title</label >
                    <div class="col-sm-10">
                      <input class="form-control" name="name" type="text" placeholder="Enter Your Slider title" v-model="title"/>
                    </div>
                  </div>

                  <div class="mb-4 row align-items-center">
                    <label class="col-sm-2 col-form-label form-label-title" >Slider Status</label >
                    <div class="col-sm-10">
                      <select class="js-example-basic-single w-100" name="status" v-model="status" >
                        <option disabled>Select Slider Status</option>
                        <option value="active" selected>Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="mb-4 row align-items-center">
                    <label class="col-sm-2 col-form-label form-label-title" >Image</label >
                    <div class="col-sm-10">
                      <input class="form-control form-choose" name="image" type="file" id="formFileMultiple" @change="handleFileChange" />
                      <!-- <input class="form-control form-choose" name="image" type="file" id="formFileMultiple"/> -->
                    </div>
                  </div>
                  <button type="submit" class="slider-btn">Add Category</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .slider-btn{
    background-color: #06adb9;
    color: #fff;
    padding: 8px 25px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .slider-btn:hover{
    background-color: #038c96;
  }
  .theme-form select{
    border: none;
  }
</style>
