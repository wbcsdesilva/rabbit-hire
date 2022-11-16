<template>

    <!-- main section -->

    <section class="p-sm-5 pt-3 text-light align-items-center" style="background: linear-gradient(90deg, #8E2DE2, #4A00E0);">

        <div class="container">

            <div class="row row-cols-1">

                <div class="col p-5 mb-5 text-center">
                    <h1 class="fw-bold">Tell us what we need to know <span class="text-warning">about you !</span></h1>
                </div>

                <div class="col mb-5 text-center">
                    <img src="../assets/hire.svg" alt="" class="img-fluid w-50">
                </div>

                <!-- custom ApplicationForm component goes here -->

                <div class="p-sm-2">
                    <ApplicationForm/>
                </div>

            </div>

        </div>

    </section>

</template>
<script>

// imports
import ApplicationForm from '@/components/ApplicationForm.vue'

// options object
export default {

  data () {
    return {

    }
  },

  components: {
    ApplicationForm
  }

}
</script>
