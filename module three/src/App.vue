<script setup>
import Banner from "./components/Banner.vue";
import Faq from "./components/Faq.vue";
import FeatureOne from "./components/FeatureOne.vue";
import Features from "./components/Features.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Newsletter from "./components/Newsletter.vue";
</script>

<template>
  <Header></Header>
  <Banner></Banner>
  <div id="content_wrapper">
    <Features></Features>
    <FeatureOne></FeatureOne>
    <Faq></Faq>
    <Newsletter></Newsletter>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
