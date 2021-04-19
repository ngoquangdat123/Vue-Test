<template>
    <div class="container-scroller">
    <div class="container-fluid page-body-wrapper justify-content-center mt-4">
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Striped Table</h4>
                  <p class="card-description">
                    Add class <code>.table-striped</code>
                  </p>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>
                            Avatar
                          </th>
                          <th>
                            Name
                          </th>
                          <th>
                            Email
                          </th>
                          <th>
                            Phone
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td class="py-1">
                                <img :src="user.avatar" alt="image"/>
                            </td>
                            <td>
                                {{user.name}}
                            </td>
                            <td>
                                {{user.email}}
                            </td>
                            <td>
                                {{user.phone}}
                            </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
export default {
    name: "StripeTable",
    props: ['users'],

    mounted(){
        console.log("rs", this.users);
    }
}
</script>

<style scoped lang='scss'>
</style>
