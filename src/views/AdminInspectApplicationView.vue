<template>
    <!-- Job application inspect goes here -->
    <section class="p-sm-5 text-light" style="background: linear-gradient(90deg, #1488CC, #2B32B2);" >
        <div class="container bg-dark rounded w-75 p-5">
            <div class="row-cols-1">

                <div class="col mt-5 text-center">
                    <i class="bi bi-person h1 text-secondary"></i>
                    <h2 class="fw-bold m-3 text-warning">Mithila Pabasara</h2>
                    <h4 class="fw-bold mb-5 text-info" >As a Frontend Dev</h4>
                </div>

                <div class="col mb-3 text-center">
                    <div class="row row-cols-3">
                        <div class="col-md mb-3">
                            <i class="bi bi-calendar h3 mb-2 d-block"></i>
                            <p class="fw-bold">Birthdate</p>
                            <p>2003-05-10</p>
                        </div>
                        <div class="col-md mb-3">
                            <i class="bi bi-envelope h3 mb-2 d-block"></i>
                            <p class="fw-bold">Email</p>
                            <p>mithilayayya@gmail.com</p>
                        </div>
                        <div class="col-md mb-3">
                            <i class="bi bi-phone h3 mb-2 d-block"></i>
                            <p class="fw-bold">Contact No</p>
                            <p>715542477</p>
                        </div>
                    </div>
                    <hr class="mt-3">
                </div>

                <div class="col-md mt-5">
                    <h4 class="fw-bold text-primary">About:</h4>
                    <p> As an undergraduate pursing Software
                        Engineering. I am seeking a software
                        developer role which comply with my
                        skills which will enable me to contribute
                        at my highest potential while maximizing
                        my knowledge in the field. I am hard
                        working, motivated and an enthusiastic
                        individual always striving to achieve the
                        highest standard possible, any given
                        task in any situation.
                    </p>
                </div>

                <div class="col-md mt-5">
                    <h4 class="fw-bold text-warning">Experience:</h4>
                    <p> 2 years as a Software Developer at namico1 year as a UI UX designer at namico.
                    </p>
                </div>

                <div class="col-md mt-5">
                    <div class="row">
                        <div class="col-md">
                            <h4 class="fw-bold text-success">Education:</h4>
                            <p> Degree in Software Engineering <br> Degree in UI UX design</p>
                        </div>
                        <div class="col-md">
                            <h4 class="fw-bold text-danger">Technologies:</h4>
                            <ul>
                                <li>Vue JS</li>
                                <li>Express JS</li>
                                <li>Node JS</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr class="mt-3">

                <div class="col-md mt-5 text-center ">
                    <h4 class="fw-bold text-secondary">Application Approval Status</h4>
                    <h4 class="fw-bold text-warning">Pending</h4>
                </div>

                <div class="col-md mt-5 text-center">

                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-primary btn-lg"><i class="bi bi-check"></i> Approve</button>
                        <router-link to="/admin" type="button" class="btn btn-danger btn-lg">Go back <i class="bi bi-box-arrow-right"></i> </router-link>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style >

</style>
