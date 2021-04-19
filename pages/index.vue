<template>
  <div class="container">
    <stripe-table :users="users"/>
  </div>
</template>

<script>
import Vue from 'vue'
import StripeTable from '~/components/StripeTable.vue'
export default {
  components: {
    StripeTable
  },
  data() {
    return {
      users: []
    }
  },
  created(){
      this.$axios.$get(`/v1/users`).then(res => {
        this.users = res;
      });
  }

}
</script>

<style>
</style>
