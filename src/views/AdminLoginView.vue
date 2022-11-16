<template>

    <!-- main section -->

    <section class="p-5 text-light" style="background: linear-gradient(90deg, #8E2DE2, #4A00E0);">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md text-center">
                    <h1 class="fw-bold mb-5">Login as an <span class="text-warning">administrator !</span></h1>
                    <img src="../assets/login.svg" alt="" class="img-fluid w-75 mt-2">
                </div>
                <div class="col-md">
                    <div class="bg-dark rounded">
                        <div class="row row-cols-1">
                            <div class="col">
                                <!-- custom login form goes here -->
                                <LoginForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script>

import LoginForm from '@/components/LoginForm.vue'

export default {

  data () {
    return {

    }
  },

  components: {
    LoginForm
  }

}
</script>
<style lang="">

</style>
