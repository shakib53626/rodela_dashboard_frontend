
<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import {ref, onMounted} from 'vue';
import router from "@/router";

const editor = ClassicEditor;
const editorConfig = ref({});
const categoryData = ref([]);
const brandData = ref([]);

const getCategory = async() => {
  try {
    const resCategory = await axios.get('/admin/categories');
    categoryData.value = resCategory.data.result.data
    console.log(categoryData.value);
  } catch (error) {
    
  }
}

const getBrand = async() => {
  try {
    const resBrand = await axios.get('/admin/brands');
    brandData.value = resBrand.data.result.data
    console.log(brandData.value);
  } catch (error) {
    
  }
}

// Product Edit code here
const name = ref();
const buy_price = ref();
const mrp_price = ref();
const sell_price = ref();
const status = ref();
const type = ref();
const category = ref();
const brand = ref();
const stock = ref();
const editorData = ref("");
const images = ref();
const handleFileChange = (e) =>{
  images.value = e.target.files[0];
}

const submit = async() =>{
  const formData = new FormData();
  formData.append('name', name.value)
  formData.append('brand_id', brand.value)
  formData.append('category_id', category.value)
  formData.append('buy_price', buy_price.value)
  formData.append('mrp', mrp_price.value)
  formData.append('offer_price', sell_price.value)
  formData.append('current_stock', stock.value)
  formData.append('status', status.value)
  formData.append('type', type.value)
  formData.append('description', editorData.value)
  formData.append('image', images.value)
  try {
    const res = await axios.post('/admin/products', formData);
    router.push({ name: 'products' });
    console.log(res);
  } catch (error) {
    console.error("Error:", error.response);   
  }
}


onMounted(() => {
  getCategory();
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
              <div class="card-header-2 d-flex justify-content-between">
                <h5>Product Information</h5>
                <router-link :to="{name:'products'}" class="btn btn-info"><i class="fa fa-arrow-left"></i> Back</router-link>
              </div>

              <form class="theme-form theme-form-2 mega-form" @submit.prevent="submit">
                <div class="row">
                  <div class="mb-4 row align-items-center">
                    <label class="form-label-title col-sm-2 mb-0">Product Name</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="text" placeholder="Product Name" name="name" v-model="name"/>
                    </div>
                  </div>

                  <div class="mb-4 row align-items-center">
                    <label class="form-label-title col-sm-2 mb-0">Product Buy Price</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="text" placeholder="Enter Buy Price" name="buy_price" v-model="buy_price" />
                    </div>
                  </div>

                  <div class="mb-4 row align-items-center">
                    <label class="form-label-title col-sm-2 mb-0">Product Regular Price</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="text" placeholder="Enter Regular Price" name="mrp_price" v-model="mrp_price" />
                    </div>
                  </div>

                  <div class="mb-4 row align-items-center">
                    <label class="form-label-title col-sm-2 mb-0">Product Sell Price</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="text" placeholder="Enter Sell Price" name="sell_price" v-model="sell_price" />
                    </div>
                  </div>

                  <div class="mb-4 row align-items-center">
                    <label class="form-label-title col-sm-2 mb-0">Product Status</label>
                    <div class="col-sm-10">
                      <select class="js-example-basic-single w-100" name="status" v-model="status">
                        <option disabled>Select Product Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                  </div>

                  <div class="mb-4 row align-items-center">
                    <label class="col-sm-2 col-form-label form-label-title"
                      >Product Type</label
                    >
                    <div class="col-sm-10">
                      <select class="js-example-basic-single w-100" name="type" v-model="type">
                        <option disabled>Select Product Type</option>
                        <option value="top-product">Top Product</option>
                        <option value="feature-product">Fetured Product</option>
                        <option value="recent-product">New Product</option>
                      </select>
                    </div>
                  </div>

                  <div class="mb-4 row align-items-center">
                    <label class="col-sm-2 col-form-label form-label-title">Category</label>
                    <div class="col-sm-10">
                      <select class="js-example-basic-single w-100" name="category" v-model="category">
                        <option disabled style="font-weight:700;" value="title">Category Menu</option>
                        <option v-for="(category, index) in categoryData" :key="index" :value="category.id">{{category.name}}</option>
                      </select>
                    </div>
                  </div>

                  <div class="mb-4 row align-items-center">
                    <label class="col-sm-2 col-form-label form-label-title" >Brand</label>
                    <div class="col-sm-10">
                      <select class="js-example-basic-single w-100" name="brand" v-model="brand">
                        <option disabled style="font-weight:700;" value="title">Select Brand</option>
                        <option v-for="(brand, index) in brandData" :key="index" :value="brand.id">{{brand.name}}</option>
                      </select>
                    </div>
                  </div>

                  <div class="mb-4 row align-items-center">
                    <label class="col-sm-2 col-form-label form-label-title">Product Stock Quantity</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="text" placeholder="Enter Quantity" name="stock" v-model="stock"/>
                    </div>
                  </div>

                  <div class="mb-4 row">
                    <label class="form-label-title col-sm-2 mb-0">Product Description</label>
                    <div class="col-sm-10">
                      <div id="editor">
                        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                      </div>
                    </div> 
                  </div>

                  <div class="mb-4 row">
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-2 col-form-label form-label-title">Images</label>
                      <div class="col-sm-10">
                        <input class="form-control form-choose" type="file" id="formFileMultiple" @change="handleFileChange"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <button class="product-btn">Add Product</button>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style>
    .product-btn{
    background-color: #06adb9;
    color: #fff;
    padding: 8px 25px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .product-btn:hover{
    background-color: #038c96;
  }
  .theme-form select{
    border: none;
  }
</style>
