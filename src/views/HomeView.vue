<template>

  <!-- section 1 -->
  <section class="p-5 p-lg-0 pt-lg-5 text-center text-light text-sm-start" style="background: linear-gradient(90deg, #8E2DE2, #4A00E0);">

    <div class="container py-5">
      <div class="d-flex align-items-center justify-content-between">

        <div>
          <h1><strong>We are <span class="text-warning">hiring !</span></strong></h1>
          <div class="mt-5"></div>
          <p class="lead">
            For everyone that's looking to progress further in their sofware engineering career, we've got positions waiting just for you. Join with Rabbit Solutions and become one step closer to your potential! Check what suits you and feel free to apply!
          </p>
          <div class="mt-5"></div>
          <router-link to="/apply" class="btn btn-lg btn-dark">Apply now!</router-link>
        </div>

        <!-- Ghost element for space -->
        <span class="m-5 d-none d-sm-block">

        </span>

        <img class="img-fluid w-50 d-none d-sm-block" src="../assets/team-collab.svg"/>

      </div>
    </div>

  </section>

  <!-- cards section -->
  <section class="p-5">
    <div class="container">

      <h1 class="text-center mb-5"><strong>What we can <span class="text-primary">offer</span></strong></h1>

       <div class="row d-flex text-light text-center align-items-strech justify-content-between g-4">

        <div class="col-md">
          <div class="card p-3" style="background: linear-gradient(90deg, #89216B, #DA4453); border: none;">

            <div class="p-5">
              <img src="../assets/proper-workspace.svg" alt="" class="card-img-top img-fluid">
            </div>

            <div class="card-body">
              <div class="h1 mb-3">
                <i class="bi bi-laptop"></i>
              </div>
              <h3 class="card-title mb-4">
                <strong>Proper workplace environment</strong>
              </h3>
              <p class="card-text">Work stress free in a fully featured work environment with all the facilities you could ever need !</p>
            </div>
          </div>
        </div>

        <div class="col-md">
          <div class="card p-3" style="background: linear-gradient(45deg, #000428, #004e92); border: none;">
            <div class="card-body">

              <div class="p-5">
                <img src="../assets/flexible-working-hours.svg" alt="" class="card-img-top img-fluid">
              </div>

              <div class="h1 mb-3">
                <i class="bi bi-clock"></i>
              </div>
              <h3 class="card-title mb-4">
                <strong>Flexible working hours</strong>
              </h3>
              <p class="card-text">Have your standard work hours customized for your preference according to any necessary changes in your schedule !</p>
            </div>
          </div>
        </div>

        <div class="col-md">
          <div class="card p-3" style="background: linear-gradient(90deg, #fe8c00, #f83600); border: none;">

            <div class="p-5">
              <img src="../assets/working-home.svg" alt="" class="card-img-top img-fluid">
            </div>

            <div class="card-body">
              <div class="h1 mb-3">
                <i class="bi bi-house"></i>
              </div>
              <h3 class="card-title mb-4">
                <strong>Work from home arrangements</strong>
              </h3>
              <p class="card-text">Take your projects with you and keep on working with the development team at the comfort of your own home !</p>
            </div>
          </div>
        </div>
       </div>
    </div>
  </section>

  <!-- content section : internships -->

  <section class="p-5 text-center text-sm-start">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md">
          <img src="../assets/basic-frontend.svg" alt="" class="img-fluid">
        </div>
        <div class="col-md p-5">
          <h1 class="fw-bold mb-4">Even for <span class="text-danger">starters</span> </h1>
          <h4 class="mb-4">Want to start out as a web developer ? We have <span class="text-primary fw-bold">internships</span> for you !</h4>
          <p class="lead">At Rabbit Solutions we pride in guiding undergraduates towards a fully fledged web development career by giving them plenty opportunities to work on their web developement skills. We will aid in showing how to apply their skills into a real work environment and progress as a professional !</p>
        </div>
      </div>
    </div>
  </section>

  <!-- content section : full stack software engineer -->

  <section class="p-5 text-center text-sm-start text-light" style="background: linear-gradient(90deg, #333333, #dd1818);">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md p-5">
          <h1 class="fw-bold mb-4">For the more <span style="color: #8cffbd;">experienced</span></h1>
          <h4 class="mb-4">Full stack developers are <span style="color: #dcff00;" class="fw-bold">always</span> welcome !</h4>
          <p class="lead ">Put your years of valuable work experience as a full stack web developer to good use with us in building massive scale solutions for demanding clients !</p>
        </div>
        <div class="col-md">
          <img src="../assets/js-frameworks.svg" alt="" class="img-fluid">
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ accordian section -->

  <section class="p-5">
    <div class="container">

      <h1 class="text-center fw-bold mb-5 mt-4"> Frequently Asked <span class="text-danger">Questions</span></h1>

      <div id="faq-accordion" class="accordion accordion-flush">

        <!-- faq accordion item 1 -->

        <div class="accordion-item">

          <h2 class="accordion-header">
            <button class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-one">

              What's the time period of the available internships ?

            </button>
          </h2>

          <div id="faq-one" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
            <div class="accordion-body">
                Standard software engineering internships lasts for <span class="text-primary fw-bold">6 months</span>
            </div>
          </div>

        </div>

        <!-- faq accordion item 2 -->

        <div class="accordion-item">

          <h2 class="accordion-header">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#faq-two">

              What are the JavaScript frameworks mostly used by the company for development ?

            </button>
          </h2>

          <div id="faq-two" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
            <div class="accordion-body">
              <ul>
                <li>VueJS</li>
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
              </ul>
            </div>
          </div>

        </div>

        <!-- faq accordion item 3 -->

        <div class="accordion-item">

          <h2 class="accordion-header">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#faq-three">

              What are your standard working hours ?

            </button>
          </h2>

          <div id="faq-three" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
            <div class="accordion-body">
              Standard working hours start at <strong class="text-primary">8.00 AM</strong> and end at <strong class="text-danger">5.00 PM</strong>
            </div>
          </div>

        </div>

        <!-- faq accordion item 4 -->

        <div class="accordion-item">

          <div class="accordion-header">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#faq-four">

              How does the job application procedure from the site work ?

            </button>
          </div>

          <div id="faq-four" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
            <div class="accordion-body">
               Click <span class="text-primary fw-bold">apply now</span> at the start of the page, fill and submit the application form and wait until it gets checked by an administrator. Your application will either be <span class="text-success fw-bold">approved</span> or <span class="text-danger fw-bold">declined</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- footer -->

  <footer class="p-5 bg-dark text-center text-secondary position-relative">
    <div class="container">
            <p class="lead">Copyright &copy; 2022 Rabbit Solutions</p>
            <a href="#" class="position-absolute bottom-0 end-0 p-5">
                <i class="bi bi-arrow-up-circle h1"></i>
            </a>
        </div>
  </footer>

</template>

<script>
// @ is an alias to /src

export default {

}
</script>
