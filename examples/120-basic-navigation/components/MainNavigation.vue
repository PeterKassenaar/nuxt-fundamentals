<template>
  <div class="row">
    <div class="col">
      <!--Main navigation - Bootstrap Navbar, see https://getbootstrap.com/docs/5.0/components/navbar/ for details -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <nuxt-link class="navbar-brand" to="/">
          <img src="../assets/img/vue-logo.png" class="transparent" alt="Vue Logo">
        </nuxt-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/history">History</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
img {
  max-width: 80px;
}

/* Automatic assignment of this class by Vue, based on router state */
/* .router-link-active{
  background-color: cornsilk;
  color: black;
} */
</style>
