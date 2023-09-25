

<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';

  const categoriesData = ref([]);
  const getCategories = async() => {
    try {
      const res = await axios.get('/admin/categories');
      categoriesData.value = res.data.result.data;
    } catch (error) {
    }
  }

  onMounted(() => {
    getCategories();
  });
</script>
<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <div>
            <div class="table-responsive table-desi table-product">
              <table class="table table-bordered all-package">
                <thead>
                  <tr>
                    <th class="w-10">SL</th>
                    <th>Category Logo Image</th>
                    <th>Category Name</th>
                    <th>Category Position</th>
                    <th>Category Status</th>
                    <th>Action  </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(category, index) in categoriesData" :key="index">
                    <td>{{ index +=1 }}</td>
                    <td>
                      <img
                        :src="`http://127.0.0.1:8000/images/categories/${category.image}`"
                        class="img-fluid"
                        alt=""
                        width="50"
                      />
                    </td>

                    <td>
                      <a href="javascript:void(0)">{{ category.name }}</a>
                    </td>

                    <td>
                      <a href="javascript:void(0)">{{ category.is_top ? 'Top' : 'Normal' }}</a>
                    </td>
                    <td class="td-cross" v-if="category.status=='inactive'">
                      <span class="lnr lnr-cross-circle"></span>
                    </td>
                    <td class="td-check" v-else>
                      <span class="lnr lnr-checkmark-circle"> </span>
                    </td>

                    <td>
                      <ul>

                        <li>
                          <!-- <router-link :to="{name:'update.category', params:{ id: category.id}}"> <i class="fas fa-edit text-success"></i> </router-link> -->
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
