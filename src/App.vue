<template>

  <!-- custom navbar -->

  <nav class="navbar navbar-expand-md navbar-dark bg-dark py-3 fixed-top">
    <div class="container-fluid ms-4">
          <router-link to="/" class="navbar-brand">
            <img src="./assets/rabbit-inhat-logo.png" width="30" height="30"/> <strong>Rabbit Hires</strong>
          </router-link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navmenu" class="collapse navbar-collapse">
              <ul class="navbar-nav ms-auto">
                <li class="navbar-item">
                  <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="navbar-item">
                  <router-link to="/admin" class="nav-link">Admin</router-link>
                </li>
              </ul>
          </div>

    </div>

  </nav>

  <router-view/>

</template>
<style>
#app{
  font-family: consolas;
}

</style>
