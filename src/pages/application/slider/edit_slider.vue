<script setup>
import axios from 'axios';
import {onMounted, ref} from 'vue';
import router from "@/router";
import { useRoute } from "vue-router";

const title = ref('');
const image = ref('');
const status = ref('');
const route = useRoute();
const imagePreview = ref();

const onFileChange = (e) => {
  image.value = e.target.files[0];
  let reader = new FileReader();
  reader.addEventListener("load", function(){
    imagePreview.value = reader.result;
  }.bind(this), false);
  if(image.value){
    if(/\.(jpe?g|png|gif)$/i.test(image.value.name)){
      reader.readAsDataURL(image.value)
    }
  }
}
const getSlider = async() => {
  const res = await axios.get(`admin/sliders/${route.params.id}`)
  title.value = res.data.result.title
  image.value = res.data.result.image
  status.value = res.data.result.status
}

const submit = async() => {
  if(!title.value ){
    alert("Please fill your title field")
  } else {
    try {
      const formData = new FormData();
      formData.append('title', title.value);
      formData.append('status', status.value);
      formData.append('_method', 'put');

      // Check if a new image has been selected
      if (imagePreview.value) {
        formData.append('image', image.value);
      }

      const response = await axios.post(`/admin/sliders/${route.params.id}`, formData);
      if(response.data.success){
        alert("Image Upload Successfully");
      }
      router.push({ name: 'sliders' }); // Use router.push to navigate
    } catch (error) {
      // Handle any errors here
    }
  }
};




onMounted(() => {
  getSlider();
});


</script>


<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="card-header-2">
                <h5>Edit Slider Information</h5>
              </div>

              <form class="theme-form theme-form-2 mega-form" @submit.prevent="submit">
                <div class="row">
                  <div class="mb-4 row align-items-center">
                    <label class="form-label-title col-sm-2 mb-0" >Brand Name</label >
                    <div class="col-sm-10">
                      <input class="form-control" name="name" type="text" placeholder="Brand Name" v-model="title"/>
                    </div>
                  </div>

                  <div class="mb-4 row align-items-center">
                    <label class="col-sm-2 col-form-label form-label-title" >Brand Status</label >
                    <div class="col-sm-10">
                      <select class="js-example-basic-single w-100" name="status" v-model="status" >
                        <option disabled>Select Brand Status</option>
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
                      <input class="form-control form-choose" name="image" type="file" id="formFileMultiple" @change="onFileChange" />
                      <img :src="imagePreview==null?`http://127.0.0.1:8000/images/sliders/${image}`:imagePreview" width="100" alt="" class="mt-2">
                      <!-- <input class="form-control form-choose" name="image" type="file" id="formFileMultiple"/> -->
                    </div>
                  </div>
                  <button class="slider-btn">Update Slider</button>
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
