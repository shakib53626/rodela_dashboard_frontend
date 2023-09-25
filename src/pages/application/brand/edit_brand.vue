<script setup>
import axios from 'axios';
import {onMounted, ref} from 'vue';
import router from "@/router";
import { useRoute } from "vue-router";

const name = ref('');
const image = ref('');
const status = ref('');
const is_top = ref('');
const route = useRoute();

const onFileChange = (e) => {
  image.value = e.target.file[0];
}
const getBrand = async() => {
  const res = await axios.get(`admin/brands/${route.params.id}`)
  name.value = res.data.result.name
  image.value = res.data.result.image
  status.value = res.data.result.status
  is_top.value = res.data.result.is_top
}

const submit = async() => {
  if(!name.value ){
    alert("Please fill your name field")
  }else{
    try {
      const formdata = new FormData();
      formdata.append('name', name.value)
      formdata.append('image', image.value)
      formdata.append('status', status.value)
      formdata.append('is_top', is_top.value)

      const response = await axios.put(`/admin/brands/${route.params.id}`);
      console.log(response.data);
      console.log(formdata);
      if(response.data.success){
        alert("Image Upload Successfully");
      }
      router.push({ name: 'brands' }); // Use router.push to navigate
    } catch (error) {
    }
  }
};




onMounted(() => {
  getBrand();
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
                <h5>Brand Information</h5>
              </div>

              <form class="theme-form theme-form-2 mega-form" @submit.prevent="submit">
                <div class="row">
                  <div class="mb-4 row align-items-center">
                    <label class="form-label-title col-sm-2 mb-0" >Brand Name</label >
                    <div class="col-sm-10">
                      <input class="form-control" name="name" type="text" placeholder="Brand Name" v-model="name"/>
                    </div>
                  </div>

                  <div class="mb-4 row align-items-center">
                    <label class="col-sm-2 col-form-label form-label-title" >Brand Status</label >
                    <div class="col-sm-4">
                      <select class="js-example-basic-single w-100" name="status" v-model="status" >
                        <option disabled>Select Brand Status</option>
                        <option value="active" selected>Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>

                    <label class="col-sm-2 col-form-label form-label-title" >Brand Status</label >
                    <div class="col-sm-4">
                      <select class="js-example-basic-single w-100" name="is_top" v-model="is_top" >
                        <option disabled>It's a top Brand ?</option>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="mb-4 row align-items-center">
                    <label class="col-sm-2 col-form-label form-label-title" >Image</label >
                    <div class="col-sm-10">
                      <input class="form-control form-choose" name="image" type="file" id="formFileMultiple" @change="onFileChange" />
                      <img :src="`http://127.0.0.1:8000/images/brands/${image}`" width="100" alt="" class="mt-2">
                      <!-- <input class="form-control form-choose" name="image" type="file" id="formFileMultiple"/> -->
                    </div>
                  </div>
                  <button class="brand-btn">Update Brand</button>
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
  .brand-btn{
    background-color: #06adb9;
    color: #fff;
    padding: 8px 25px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .brand-btn:hover{
    background-color: #038c96;
  }
  .theme-form select{
    border: none;
  }
</style>
