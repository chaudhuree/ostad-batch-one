<script setup>
const banner = {
  title: "Lorem ipsum dolor sit.",
  subtitle: "Lorem ipsum dolor sit amet.",
  description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quae consequuntur repudiandae laborum sapiente harum maiores, maxime accusantium perferendis obcaecati.
                </p>
`,
};

const bannerIntroImgSrc =
  "https://img.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-65749.jpg?w=900&t=st=1689763203~exp=1689763803~hmac=195058016e3d1540d3920a20217cdd9db46ece863a740b50c7a3c3f4c7913017";
</script>
<template>
  <section id="intro">
    <div class="container">
      <div class="row">
        <!-- Intro Description -->
        <div id="intro_description" class="col-md-7 col-lg-6">
          <h1>{{ banner.title }}</h1>
          <h2>{{ banner.subtitle }}</h2>
          <div v-html="banner.description"></div>
        </div>
        <!-- End Intro Description -->

        <!-- Intro Image -->
        <div id="intro_image" class="col-md-5 col-lg-6 text-center">
          <img
            class="img-responsive"
            :src="bannerIntroImgSrc"
            alt="intro_image"
          />
        </div>
        <!-- End Intro Header Image -->
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </section>
</template>

<style></style>
