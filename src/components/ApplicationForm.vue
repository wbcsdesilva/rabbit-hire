<template>

        <div class="mt-5 bg-dark rounded p-5">

            <!-- Job application form starts from here -->
            <form action="#">

                <div class="row row-cols-1">

                    <!-- Standard input fields -->

                    <div class="col mb-4">
                        <label for="name" class="form-label h5 text-warning">
                            Name:
                        </label>
                        <input type="text" id="name" class="form-control bg-dark text-light border-secondary" placeholder="Enter your full name here." required>
                    </div>

                    <div class="col mb-4">
                        <label for="email" class="form-label h5 text-warning">
                            Email:
                        </label>
                        <input type="email" id="email" class="form-control bg-dark text-light border-secondary" placeholder="someone@somewhere.com">
                    </div>

                    <div class="col mb-4">
                        <label for="birthdate" class="form-label h5 text-warning">
                            Birthdate:
                        </label>
                        <input type="date" id="birthdate" class="form-control bg-dark text-light border-secondary" required>
                    </div>

                    <div class="col mb-4">
                        <label for="telephone" class="form-label h5 text-warning">
                            Contact no:
                        </label>
                        <input type="tel" id="telephone" class="form-control bg-dark text-light border-secondary" placeholder="Enter your telephone number here." required>
                    </div>

                    <div class="col mb-4">
                        <label for="about" class="form-label h5 text-warning">
                            About:
                        </label>
                        <textarea name="about" id="about" cols="30" rows="7" class="form-control bg-dark text-light border-secondary" style="resize: none;" placeholder="Tell us a bit about yourself !"></textarea>
                    </div>

                    <div class="col mb-4">
                        <label for="education" class="form-label h5 text-warning">
                            Educational qualifications:
                        </label>
                        <textarea name="education" id="education" cols="30" rows="7" class="form-control bg-dark text-light border-secondary" style="resize: none;" placeholder="Enter your educational qualifications here !"></textarea>
                    </div>

                    <div class="col mb-4">
                        <label for="experience" class="form-label h5 text-warning">
                            Work experience:
                        </label>
                        <textarea name="experience" id="experience" cols="30" rows="7" class="form-control bg-dark text-light border-secondary" style="resize: none;" placeholder="Mention any previous work experience you have had before. Enter 'none' if you haven't had any before."></textarea>
                    </div>

                    <!-- positions: radio -->

                    <div class="col mb-4">
                        <label class="form-label h5 text-warning mb-4">
                            What position do you want to apply for ?:
                        </label>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" name="positions" id="SE-Intern">
                                <label for="SE-Intern" class="form-check-label">Intern - Software Engineer</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" name="positions" id="QA-Intern">
                                <label for="QA-Intern" class="form-check-label">Intern - Quality Assurance Engineer</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" name="positions" id="SE-Associate">
                                <label for="SE-Associate" class="form-check-label">Associate - Software Engineer</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" name="positions" id="FrontEnd-Dev">
                                <label for="FrontEnd-Dev" class="form-check-label">Front End Developer</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" name="positions" id="FullStack-Dev">
                                <label for="FullStack-Dev" class="form-check-label">Full Stack Developer</label>
                            </div>
                    </div>

                    <!-- technologies: checkboxes -->

                    <div class="col mb-4">
                        <label class="form-label h5 text-warning mb-4">
                            What technologies are your familiar with ?:
                        </label>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="technolgies" id="vueJS">
                                <label for="vueJS" class="form-check-label">Vue JS</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="technolgies" id="nodeJS">
                                <label for="nodeJS" class="form-check-label">Node JS</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="technolgies" id="expressJS">
                                <label for="expressJS" class="form-check-label">Express JS</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="technolgies" id="nextJS">
                                <label for="nextJS" class="form-check-label">Next JS</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="technolgies" id="sql">
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

// options object
export default {

}
</script>
<style>

</style>
