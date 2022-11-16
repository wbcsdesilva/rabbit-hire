<template>

    <!-- Admin home : Section 1 -->
    <section class="p-5 p-lg-0 pt-lg-5 text-center text-light text-sm-start" style="background: linear-gradient(90deg, #1488CC, #2B32B2);">
        <div class="container py-5">
            <div class="d-flex justify-content-between">
                <div>
                    <h1 class="fw-bold mb-5">Welcome <span style="color: #dcff00;" >Kavindu !</span></h1>
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
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Age</th>
                        <th>Number</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <td>Sam</td>
                        <td>SE-Intern</td>
                        <td>24</td>
                        <td>0778989678</td>
                        <td>JS Elite</td>
                    </tr>
                    <tr>
                        <td>Jane</td>
                        <td>QA-Intern</td>
                        <td>21</td>
                        <td>0778879090</td>
                        <td>Blackbox Elite</td>
                    </tr>
                    <tr>
                        <td>Sam</td>
                        <td>SE-Associate</td>
                        <td>25</td>
                        <td>0726789678</td>
                        <td>Node Elite</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </section>

</template>
<script>
export default {

}
</script>
