

<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';

  const brandData = ref([]);
  const getImages = async() => {
    try {
      const res = await axios.get('/admin/brands');
      brandData.value = res.data.result.data;
    } catch (error) {
    }
  }

  onMounted(() => {
    getImages();
  });
</script>
<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <div class="row"><div class="col-md-12 d-flex justify-content-end"><router-link :to="{name:'add_brand'}" class="btn btn-info mb-2" >Add New Brand</router-link></div></div>
          <div>
            <div class="table-responsive table-desi table-product">
              <table class="table table-bordered all-package">
                <thead>
                  <tr>
                    <th class="w-10">SL</th>
                    <th>Brand Logo Image</th>
                    <th>Brand Name</th>
                    <th>Brand Position</th>
                    <th>Brand Status</th>
                    <th>Action  </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(brand, index) in brandData" :key="index">
                    <td>{{ index +=1 }}</td>
                    <td>
                      <img
                        :src="`http://127.0.0.1:8000/images/brands/${brand.image}`"
                        class="img-fluid"
                        alt=""
                        width="50"
                      />
                    </td>

                    <td>
                      <a href="javascript:void(0)">{{ brand.name }}</a>
                    </td>

                    <td>
                      <a href="javascript:void(0)">{{ brand.is_top ? 'Top' : 'Normal' }}</a>
                    </td>
                    <td class="td-cross" v-if="brand.status=='inactive'">
                      <span class="lnr lnr-cross-circle"></span>
                    </td>
                    <td class="td-check" v-else>
                      <span class="lnr lnr-checkmark-circle"> </span>
                    </td>

                    <td>
                      <ul>

                        <li>
                          <router-link :to="{name:'update.brand', params:{ id: brand.id}}"> <i class="fas fa-edit text-success"></i> </router-link>
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



<style>
  .border-none{
    border: none;
  }
</style>
