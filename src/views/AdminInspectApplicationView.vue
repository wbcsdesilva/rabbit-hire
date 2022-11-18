<template>
    <!-- Job application inspect goes here -->
    <section class="p-sm-5 text-light" style="background: linear-gradient(90deg, #1488CC, #2B32B2);" >
        <div class="container bg-dark rounded w-75 p-5">
            <div class="row-cols-1">

                <div class="col mt-5 text-center">
                    <img src="../assets/profile-pic.svg" alt="" class="img-fluid w-25">
                    <h2 class="fw-bold m-3" style="color: #dcff00;"> {{applicationHolder.name}} </h2>
                    <h4 class="fw-bold mb-5 text-info" >As a {{applicationHolder.position}}</h4>
                </div>

                <div class="col mb-3 text-center">
                    <div class="row row-cols-3">
                        <div class="col-md mb-3">
                            <i class="bi bi-calendar h3 mb-2 d-block"></i>
                            <p class="fw-bold">Birthdate</p>
                            <p>{{applicationHolder.birthdate}}</p>
                        </div>
                        <div class="col-md mb-3">
                            <i class="bi bi-envelope h3 mb-2 d-block"></i>
                            <p class="fw-bold">Email</p>
                            <p>{{applicationHolder.email}}</p>
                        </div>
                        <div class="col-md mb-3">
                            <i class="bi bi-phone h3 mb-2 d-block"></i>
                            <p class="fw-bold">Contact No</p>
                            <p>{{applicationHolder.contactNo}}</p>
                        </div>
                    </div>
                    <hr class="mt-3">
                </div>

                <div class="col-md mt-5">
                    <h4 class="fw-bold" style="color: #c479ff;">About:</h4>
                    <p>
                        {{applicationHolder.about}}
                    </p>
                </div>

                <div class="col-md mt-5">
                    <h4 class="fw-bold" style="color: #ffff00;">Work experience:</h4>
                    <p>
                        {{applicationHolder.experience}}
                    </p>
                </div>

                <div class="col-md mt-5">
                    <div class="row">
                        <div class="col-md">
                            <h4 class="fw-bold" style="color: #00ff99;">Education:</h4>
                            <p>
                                {{applicationHolder.education}}
                            </p>
                        </div>
                        <div class="col-md">
                            <h4 class="fw-bold" style="color: #1a75ff">Technologies:</h4>
                            <ul>
                                <li v-for="(technology, index) in applicationHolder.technologies" :key="index">
                                    {{technology}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr class="mt-3">

                <div class="col-md mt-5 text-center ">
                    <h4 class="fw-bold text-secondary">Application Approval Status</h4>
                    <h4 class="fw-bold text-warning"> {{applicationHolder.status}} </h4>
                </div>

                <div class="col-md mt-5 text-center">

                    <div class="btn-group" role="group">
                        <button @click="updateAfterConfirm('approved')" type="button" class="btn btn-primary btn-lg"><i class="bi bi-check"></i> Approve</button>
                        <button @click="updateAfterConfirm('denied')" type="button" class="btn btn-danger btn-lg"><i class="bi bi-x"></i> Deny</button>
                        <router-link to="/admin" type="button" class="btn btn-warning btn-lg"><i class="bi bi-box-arrow-left"></i>  Go back</router-link>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>
<script>

import applicationsCollectionRef from '@/firebase'

import { doc, getDoc, setDoc } from '@firebase/firestore'
import Swal from 'sweetalert2'

export default {

  data () {
    return {

      applicationSelectedId: null,
      applicationDocRef: null,

      applicationHolder: {
        name: null,
        email: null,
        birthdate: null,
        contactNo: null,
        about: null,
        education: null,
        experience: null,
        position: null,
        technologies: [],
        status: null
      }

    }
  },

  methods: {

    async getSingleApplication () {
      this.applicationDocRef = doc(applicationsCollectionRef, this.applicationSelectedId)
      const application = await getDoc(this.applicationDocRef)
      this.applicationHolder = application.data()
    },

    async updateApplicationStatus (status) {
      this.applicationHolder.status = status
      await setDoc(this.applicationDocRef, this.applicationHolder)
    },

    updateAfterConfirm (status) {
      Swal.fire({
        title: 'Update application status ?',
        text: `This'll set the approval status to ${status}`,
        icon: 'question',
        showCancelButton: true,
        color: '#ffffff',
        background: '#222529',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.updateApplicationStatus(status)

          if (status === 'approved') {
            Swal.fire({
              title: 'Approved!',
              text: 'Job application approved',
              icon: 'success',
              color: '#ffffff',
              background: '#222529'
            })
          } else {
            Swal.fire({
              title: 'Denied!',
              text: 'Job application denied',
              icon: 'error',
              color: '#ffffff',
              background: '#222529'
            })
          }

          this.$router.push('/admin')
        }
      })
    }

  },

  created () {
    this.applicationSelectedId = this.$route.params.id
    this.getSingleApplication()
  }

}
</script>
<style >

</style>
