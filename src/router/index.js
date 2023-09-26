import { createRouter, createWebHistory } from "vue-router";
import layout1 from "../layouts/layout/layout1.vue";

import dashboard from "../pages/dashboard.vue";
import allUsers from "../pages/general/users/all_users.vue";
import add_new_user from "../pages/general/users/add_new_user.vue";

import order_list from "../pages/application/orders/order_list.vue";
import order_detail from "../pages/application/orders/order_detail.vue";
import order_tracking from "../pages/application/orders/order_tracking.vue";
import translation from "../pages/application/localization/translation.vue";
import currency_rate from "../pages/application/localization/currency_rate.vue";
import taxes from "../pages/application/localization/taxes.vue";

import brands from "../pages/application/brand/brands.vue";
import add_brand from "../pages/application/brand/add_new_brand.vue";
import edit_brand from "../pages/application/brand/edit_brand.vue";

import categories from "../pages/application/category/categories.vue";
import add_category from "../pages/application/category/add_new_category.vue";
import edit_category from "../pages/application/category/edit_categories.vue";

import sliders from "../pages/application/slider/sliders.vue";
import add_slider from "../pages/application/slider/add_new_slider.vue";
import edit_slider from "../pages/application/slider/edit_slider.vue";

import products from "../pages/application/product/products.vue";
import add_product from "../pages/application/product/add_new_product.vue";
import menu_lists from "../pages/application/menus/menu_lists.vue";
import create_menu from "../pages/application/menus/create_menu.vue";
import coupon_list from "../pages/application/coupons/coupon_list.vue";
import create_coupon from "../pages/application/coupons/create_coupon.vue";
import product_review from "../pages/application/product_review.vue";
import invoice from "../pages/application/invoice.vue";
import profile_setting from "../pages/application/settings/profile_setting.vue";
import log_in from "../pages/application/log_in.vue";
import forgot_password from "../pages/application/forgot_password.vue";
import register from "../pages/application/register.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: dashboard,
    meta: { layout: layout1, breadcrumb: { type: 0 } },
  },
  {
    path: "/all_users",
    name: "allUsers",
    component: allUsers,
    meta: {
      layout: layout1,
      breadcrumb: { type: 1, title: "All Users", buttonPath: "/add_new_user" },
    },
  },
  {
    path: "/add_new_user",
    name: "add_new_user",
    component: add_new_user,
    meta: {
      layout: layout1,
      breadcrumb: { type: 2, title: "Add New User" },
    },
  },
  {
    path: "/order_list",
    name: "order_list",
    component: order_list,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Order List" } },
  },
  {
    path: "/order_detail",
    name: "order_detail",
    component: order_detail,
    meta: {
      layout: layout1,
      breadcrumb: {
        type: 3,
        title: "Order #36648",
        lis: ["October 21, 2021 at 9:08 pm", "6 items", "Total $5,882.00"],
      },
    },
  },
  {
    path: "/order_tracking",
    name: "order_tracking",
    component: order_tracking,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Order Tracking" } },
  },
  {
    path: "/translation",
    name: "translation",
    component: translation,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Translation" } },
  },
  {
    path: "/currency_rate",
    name: "currency_rate",
    component: currency_rate,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Currency Rates" } },
  },
  {
    path: "/taxes",
    name: "taxes",
    component: taxes,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Taxes" } },
  },
  {
    path: "/brands",
    name: "brands",
    component: brands,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Brands" } },
  },
  {
    path: "/add_brand",
    name: "add_brand",
    component: add_brand,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Add Brand" } },
  },
  {
    path: "/edit_brand/:id",
    name: "update.brand",
    component: edit_brand,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Edit Brand" } },
  },
  {
    path: "/categories",
    name: "categories",
    component: categories,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Categories" } },
  },
  {
    path: "/add_category",
    name: "add_category",
    component: add_category,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Add Category" } },
  },
  {
    path: "/edit_category/:id",
    name: "update.category",
    component: edit_category,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Edit Category" } },
  },
  {
    path: "/products",
    name: "products",
    component: products,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Products" } },
  },
  {
    path: "/add_product",
    name: "add_product",
    component: add_product,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Add Product" } },
  },


  {
    path: "/sliders",
    name: "sliders",
    component: sliders,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Sliders" } },
  },
  {
    path: "/add_slider",
    name: "add_slider",
    component: add_slider,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Add Slider" } },
  },
  {
    path: "/edit_slider/:id",
    name: "update.slider",
    component: edit_slider,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Edit Slider" } },
  },



  {
    path: "/menu_lists",
    name: "menu_lists",
    component: menu_lists,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Menu Lists" } },
  },
  {
    path: "/create_menu",
    name: "create_menu",
    component: create_menu,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Create Menu" } },
  },
  {
    path: "/coupon_list",
    name: "coupon_list",
    component: coupon_list,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Coupon List" } },
  },
  {
    path: "/create_coupon",
    name: "create_coupon",
    component: create_coupon,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Create Coupon" } },
  },
  {
    path: "/product_review",
    name: "product_review",
    component: product_review,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Product Review" } },
  },
  {
    path: "/invoice",
    name: "invoice",
    component: invoice,
    meta: { layout: layout1, breadcrumb: { type: 2, title: "Invoice" } },
  },
  {
    path: "/profile_setting",
    name: "profile_setting",
    component: profile_setting,
    meta: {
      layout: layout1,
      breadcrumb: { type: 2, title: "Profile Setting" },
    },
  },
  {
    path: "/log_in",
    name: "log_in",
    component: log_in,
  },
  {
    path: "/forgot_password",
    name: "forgot_password",
    component: forgot_password,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
