

<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';

  const slidersData = ref([]);
  const getSliders = async() => {
    try {
      const res = await axios.get('/admin/sliders');
      slidersData.value = res.data.result;
    } catch (error) {
    }
  }

  onMounted(() => {
    getSliders();
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
                    <th>Slider Image</th>
                    <th>Slider Title</th>
                    <th>Slider Status</th>
                    <th>Action  </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(slider, index) in slidersData" :key="index">
                    <td>{{ index +=1 }}</td>
                    <td>
                      <img
                        :src="`http://127.0.0.1:8000/images/sliders/${slider.image}`"
                        class="img-fluid"
                        alt=""
                        width="50"
                      />
                    </td>

                    <td>
                      <a href="javascript:void(0)">{{ slider.title }}</a>
                    </td>
                    <td class="td-cross" v-if="slider.status=='inactive'">
                      <span class="lnr lnr-cross-circle"></span>
                    </td>
                    <td class="td-check" v-else>
                      <span class="lnr lnr-checkmark-circle"> </span>
                    </td>

                    <td>
                      <ul>

                        <li>
                          <router-link :to="{name:'update.slider', params:{ id: slider.id}}"> <i class="fas fa-edit text-success"></i> </router-link>
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
          <router-link :to="{name:'add_slider'}" class="btn btn-info">Add New Slider</router-link>
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
