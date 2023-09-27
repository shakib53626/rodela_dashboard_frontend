
<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';

  const productsData = ref([]);
  const getProducts = async() => {
    try{
      const res = await axios.get('/admin/products');
      console.log(res);
      productsData.value = res.data.result.data
    }catch(error){

    }
  }
  onMounted(() => {
    getProducts();
  });

</script>



<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <div class="row"><div class="col-md-12 d-flex justify-content-end"><router-link :to="{name:'add_product'}" class="btn btn-info mb-2" >Add New Product</router-link></div></div>
          <div>
            <div class="table-responsive table-desi table-product">
              <table class="table table-1d all-package">
                <thead>
                  <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Current Qty</th>
                    <th>Price</th>
                    <th>Published</th>
                    <th>Option</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(product, index) in productsData" :key="index">
                    <td>
                      <img
                        :src="`http://127.0.0.1:8000/images/products/${product.image}`"
                        class="img-fluid"
                        alt=""
                      />
                    </td>

                    <td>
                      <a href="javascript:void(0)">{{product.name}}</a>
                    </td>

                    <td>
                      <a href="javascript:void(0)">{{ product.category.name }}</a>
                    </td>
                    <td>
                      <a href="javascript:void(0)">{{ product.brand.name }}</a>
                    </td>

                    <td>{{ product.current_stock }}</td>

                    <td class="td-price"><del class="text-danger" v-if="product.offer_price != 0">{{product.mrp}} tk </del> <span class="text-success"> {{product.offer_price != 0 ? product.offer_price : product.mrp}} tk</span></td>

                    <td class="td-cross" v-if="product.status=='inactive'">
                      <span class="lnr lnr-cross-circle"></span>
                    </td>
                    <td class="td-check" v-else>
                      <span class="lnr lnr-checkmark-circle"> </span>
                    </td>

                    <td>
                      <ul>
                        <li>
                          <a><i class="fas fa-edit text-success"></i></a>
                        </li>

                        <li>
                          <a href="javascript:void(0)">
                            <i class="far fa-trash-alt theme-color"></i>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="pagination-box">
          <nav class="ms-auto me-auto" aria-label="...">
            <ul class="pagination pagination-primary">
              <li class="page-item disabled">
                <a class="page-link" href="javascript:void(0)" tabindex="-1"
                  >Previous</a
                >
              </li>

              <li class="page-item active">
                <a class="page-link" href="javascript:void(0)">1</a>
              </li>

              <li class="page-item">
                <a class="page-link" href="javascript:void(0)"
                  >2 <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="page-item">
                <a class="page-link" href="javascript:void(0)">3</a>
              </li>

              <li class="page-item">
                <a class="page-link" href="javascript:void(0)">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>



<style></style>
