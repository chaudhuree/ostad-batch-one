<script setup>
const menueItemList = [
  '<a id="GoToHome" class="selected-nav" href="#intro">Home</a>',
  '<a id="GoToFeatures" href="#features">Features</a>',
  '<a id="GoToFAQ" href="#faq">FAQ</a>',
  '<a id="GoToSubscribe" href="#newsletter">Subscribe</a>',
];
</script>
<template>
  <header id="header">
    <div class="navbar navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            id="nav-toggle"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#navigation-menu"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          {{ selectedMenue }}

          <a class="navbar-brand" href="#"
            ><img src="../assets/vue.svg" alt="logo" role="banner"
          /></a>
        </div>

        <nav
          id="navigation-menu"
          class="collapse navbar-collapse"
          role="navigation"
        >
          <ul class="nav navbar-nav navbar-right">
            <li
              v-for="(menuItem, index) in menueItemList"
              :key="index"
              v-html="menuItem"
            ></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style></style>
