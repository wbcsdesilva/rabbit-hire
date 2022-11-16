<template>
    <div class="m-5 pb-4 bg-dark text-light rounded">
        <form action="#">
            <div class="row row-cols-1">
                <div class="col text-center mb-5">
                    <i class="bi bi-key h1 text-warning"></i>
                </div>
                <div class="col mb-4">
                    <label for="adminusername" class="form-label h5 text-warning">
                        Username:
                    </label>
                    <input id="adminusername" type="text" class="form-control bg-dark border-secondary text-light" placeholder="Enter your administrator username here." required>
                </div>
                <div class="col mb-4">
                    <label for="adminpassword" class="form-label h5 text-warning">
                        Password:
                    </label>
                    <input id="adminpassword" type="password" class="form-control bg-dark border-secondary text-light" required>
                </div>
                <div class="col mt-5 text-center">
                    <button class="btn btn-warning btn-lg"><span class="fw-bold">Login</span></button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {

}
</script>
