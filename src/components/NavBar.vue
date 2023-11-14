<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top opacity-75">
    <div class="container fw-bolder">
      <router-link class="navbar-brand fa fa-signature " to="/" @click="scroll('home')">Awan </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <button
              text
              @click="scroll('home')"
              class="text-yellow nav-link btn"
            >
              home
            </button>
          </li>
          <li class="nav-item">
            <button text @click="scroll('about')" class="nav-link btn">
              about
            </button>
          </li>
          <li class="nav-item">
            <button text @click="scroll('portofolio')" class="nav-link btn">
              portofolio
            </button>
          </li>
          <li class="nav-item">
            <button text @click="scroll('services')" class="nav-link btn">
              services
            </button>
          </li>
          <li class="nav-item">
            <button text @click="scroll('page')" class="nav-link btn">
              page
            </button>
          </li>
          <li class="nav-item">
            <button text @click="scroll('hire')" class="nav-link btn">
              hire
            </button>
          </li>
          <li class="nav-item">
            <button text @click="scroll('contact')" class="nav-link btn">
              contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
nav {

  background-color: rgb(0, 0, 0);
}
.btn {
  text-transform: capitalize;
}

</style>
