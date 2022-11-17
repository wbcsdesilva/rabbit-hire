<template>

        <div class="mt-5 bg-dark rounded p-5">

            <!-- Job application form starts from here -->
            <!-- TO DO: set up vue and firebase to do the insertions in this form. Don't need validations yet -->

            <form action="#" @submit.prevent="addApplication">

                <div class="row row-cols-1">

                    <!-- Standard input fields -->

                    <div class="col mb-4">
                        <label for="name" class="form-label h5 text-warning">
                            Name:
                        </label>
                        <input v-model="name" type="text" id="name" class="form-control bg-dark text-light border-secondary" placeholder="Enter your full name here." required>
                    </div>

                    <div class="col mb-4">
                        <label for="email" class="form-label h5 text-warning">
                            Email:
                        </label>
                        <input v-model="email" type="email" id="email" class="form-control bg-dark text-light border-secondary" placeholder="someone@somewhere.com">
                    </div>

                    <div class="col mb-4">
                        <label for="birthdate" class="form-label h5 text-warning">
                            Birthdate:
                        </label>
                        <input v-model="birthdate" type="date" id="birthdate" class="form-control bg-dark text-light border-secondary" required>
                    </div>

                    <div class="col mb-4">
                        <label for="contactNo" class="form-label h5 text-warning">
                            Contact no:
                        </label>
                        <input v-model="contactNo" type="tel" id="contactNo" class="form-control bg-dark text-light border-secondary" placeholder="Enter your telephone number here." required>
                    </div>

                    <div class="col mb-4">
                        <label for="about" class="form-label h5 text-warning">
                            About:
                        </label>
                        <textarea v-model="about" name="about" id="about" cols="30" rows="7" class="form-control bg-dark text-light border-secondary" style="resize: none;" placeholder="Tell us a bit about yourself !"></textarea>
                    </div>

                    <div class="col mb-4">
                        <label for="education" class="form-label h5 text-warning">
                            Educational qualifications:
                        </label>
                        <textarea v-model="education" name="education" id="education" cols="30" rows="7" class="form-control bg-dark text-light border-secondary" style="resize: none;" placeholder="Enter your educational qualifications here !"></textarea>
                    </div>

                    <div class="col mb-4">
                        <label for="experience" class="form-label h5 text-warning">
                            Work experience:
                        </label>
                        <textarea v-model="experience" name="experience" id="experience" cols="30" rows="7" class="form-control bg-dark text-light border-secondary" style="resize: none;" placeholder="Mention any previous work experience you have had before. Enter 'none' if you haven't had any before."></textarea>
                    </div>

                    <!-- positions: radio -->

                    <div class="col mb-4">
                        <label class="form-label h5 text-warning mb-4">
                            What position do you want to apply for ?:
                        </label>
                            <div class="form-check">
                                <input v-model="position" type="radio" class="form-check-input" name="positions" id="SE-Intern" value="SE Intern">
                                <label for="SE-Intern" class="form-check-label">Intern - Software Engineer</label>
                            </div>
                            <div class="form-check">
                                <input v-model="position" type="radio" class="form-check-input" name="positions" id="QA-Intern" value="QA Intern">
                                <label for="QA-Intern" class="form-check-label">Intern - Quality Assurance Engineer</label>
                            </div>
                            <div class="form-check">
                                <input v-model="position" type="radio" class="form-check-input" name="positions" id="SE-Associate" value="SE Associate">
                                <label for="SE-Associate" class="form-check-label">Associate - Software Engineer</label>
                            </div>
                            <div class="form-check">
                                <input v-model="position" type="radio" class="form-check-input" name="positions" id="FrontEnd-Dev" value="Frontend Dev">
                                <label for="FrontEnd-Dev" class="form-check-label">Frontend Developer</label>
                            </div>
                            <div class="form-check">
                                <input v-model="position" type="radio" class="form-check-input" name="positions" id="FullStack-Dev" value="Full Stack Dev">
                                <label for="FullStack-Dev" class="form-check-label">Full Stack Developer</label>
                            </div>
                    </div>

                    <!-- technologies: checkboxes -->

                    <div class="col mb-4">
                        <label class="form-label h5 text-warning mb-4">
                            What technologies are your familiar with ?:
                        </label>
                            <div class="form-check">
                                <input v-model="technologies" type="checkbox" class="form-check-input" name="technolgies" id="vueJS" value="Vue JS">
                                <label for="vueJS" class="form-check-label">Vue JS</label>
                            </div>
                            <div class="form-check">
                                <input v-model="technologies" type="checkbox" class="form-check-input" name="technolgies" id="nodeJS" value="Node JS">
                                <label for="nodeJS" class="form-check-label">Node JS</label>
                            </div>
                            <div class="form-check">
                                <input v-model="technologies" type="checkbox" class="form-check-input" name="technolgies" id="expressJS" value="Express JS">
                                <label for="expressJS" class="form-check-label">Express JS</label>
                            </div>
                            <div class="form-check">
                                <input v-model="technologies" type="checkbox" class="form-check-input" name="technolgies" id="nextJS" value="Next JS">
                                <label for="nextJS" class="form-check-label">Next JS</label>
                            </div>
                            <div class="form-check">
                                <input v-model="technologies" type="checkbox" class="form-check-input" name="technolgies" id="sql" value="SQL">
                                <label for="sql" class="form-check-label">SQL</label>
                            </div>
                    </div>

                    <div class="col mb-4 mt-5 text-center">
                        <button class="btn btn-lg btn-warning rounded">
                            <span class="fw-bold"> Apply </span>
                            <i class="bi bi-clipboard"></i>
                        </button>
                    </div>

                </div>

            </form>

        </div>

</template>
<script>

import { addDoc } from 'firebase/firestore'

import applicationsCollectionRef from '@/firebase'
import Swal from 'sweetalert2'

export default {

  data () {
    return {
      name: null,
      email: null,
      birthdate: null,
      contactNo: null,
      about: null,
      education: null,
      experience: null,
      position: null,
      technologies: [],
      status: 'pending'
    }
  },

  methods: {
    async addApplication () {
      await addDoc(applicationsCollectionRef, this.$data)

      Swal.fire({
        icon: 'success',
        title: 'Application submitted !',
        text: 'Your application will be reviewed by our HR team',
        color: '#ffffff',
        background: '#222529'
      })

      this.$router.push('/')
    }
  }

}
</script>
<style>
    .swal2-popup {
    font-family: consolas;
    }
</style>
