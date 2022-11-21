<template>

    <!-- Admin home : Section 1 -->
    <section class="p-5 p-lg-0 pt-lg-5 text-center text-light text-sm-start" style="background: linear-gradient(90deg, #1488CC, #2B32B2);">
        <div class="container py-5">
            <div class="d-flex justify-content-between">
                <div>
                    <h1 class="fw-bold mb-5">Welcome <span style="color: #dcff00;" >Administrator!</span></h1>
                    <p class="lead">Manage the candidates that have applied for jobs here. Check their profiles and see if there's anything you like !</p>
                </div>
                <span class="m-5 d-none d-sm-block"></span>
                <img src="../assets/admin.svg" alt="" class="img-fluid w-50 d-none d-sm-block">
            </div>
        </div>

    </section>

    <section class="p-sm-5 pt-3 bg-dark text-light">
        <h1 class="fw-bold text-center mt-2 mb-5">Available <span style="color: #dcff00;">Candidates</span></h1>
        <!-- applications table -->
        <div class="table-responsive ps-3 pe-3">
            <table class="table table-dark">
                <thead>
                    <tr class="fw-bold">
                        <th>Name</th>
                        <th>Position</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th class="text-center">Options</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">

                    <!-- application data -->
                    <tr v-for="application in applications" v-bind:key="application.id">
                        <td>{{application.name}}</td>
                        <td>{{application.position}}</td>
                        <td>{{application.email}}</td>
                        <td>{{application.status}}</td>
                        <td class="d-flex align-center justify-content-center">
                            <router-link v-bind:to="{path: `/inspect/${application.id}`}" class="btn fw-bold me-2 text-dark rounded-pill" style="background-color: #dcff00;"><i class="bi bi-eye"></i> inspect</router-link>
                            <button @click="deleteAfterConfirm(application.id)" class="btn btn-danger fw-bold ms-2 rounded-pill"><i class="bi bi-trash"></i> delete</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    </section>

</template>
<script>

import applicationsCollectionRef from '@/firebase'

import { getDocs, deleteDoc, doc } from '@firebase/firestore'
import Swal from 'sweetalert2'

export default {

  data () {
    return {
      applications: []
    }
  },

  methods: {
    async getApplications () {
      const applicationsSnapshot = await getDocs(applicationsCollectionRef)
      const applicationHolder = []

      applicationsSnapshot.forEach(application => {
        const applicationData = application.data()
        applicationData.id = application.id
        applicationHolder.push(applicationData)
      })

      this.applications = applicationHolder
    },

    async deleteApplication (applicationId) {
      const applicationRef = doc(applicationsCollectionRef, applicationId)
      await deleteDoc(applicationRef)
      this.$router.go()
    },

    deleteAfterConfirm (applicationId) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        color: '#ffffff',
        background: '#222529',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteApplication(applicationId)

          Swal.fire({
            title: 'Deleted!',
            text: 'Job application discarded',
            icon: 'success',
            color: '#ffffff',
            background: '#222529'
          })
        }
      })
    }
  },

  // created lifecycle hook
  created () {
    this.getApplications()
  }
}
</script>
<style>
    .swal2-popup {
    font-family: consolas;
    }
</style>
