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
                    <div class="input-group">
                        <input id="adminpassword" type="password" class="form-control bg-dark border-secondary text-light" required>
                        <button type="button" class="btn btn-warning text-dark">
                            <i class="bi bi-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="col mt-5 text-center">
                    <!-- btn as a router link to test the admin page UI -->
                    <router-link to="/admin" class="btn btn-warning btn-lg"><span class="fw-bold">Login</span></router-link>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {

}
</script>
