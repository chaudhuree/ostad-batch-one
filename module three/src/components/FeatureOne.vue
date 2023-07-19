<script setup>
const featureOneTitle = "Lorem ipsum dolor sit amet.";
const featureOneDesc = `<p>Vestibulum at est vel felis adipiscing tincidunt. Proin quis diam ac lectus pretium mollis interdum sed erat. Phasellus eget
							  neque eu ipsum laoreet suscipit tincidunt suscipit purus rutrum 
							</p>

  <p>Etiam euismod, ligula nec volutpat tempor, risus lerisque tincidunt purus libero. Fusce tincidunt ligula, nec sagittis turpis</p>`;

const featureOneImgSrc = {
  src: "https://img.freepik.com/free-psd/dark-mobile-device-mockup_149660-801.jpg?size=626&ext=jpg",
  alt: "feature_one_img",
};
</script>
<template>
  <section id="feature_one">
    <div class="container">
      <div class="row">
        <div
          id="feature_1_image"
          class="col-md-7 feature_image text-center triggerAnimation animated"
          data-animate="fadeInLeft"
        >
          <img class="img-responsive" v-bind="featureOneImgSrc" />
        </div>

        <div
          id="feature_1_description"
          class="col-md-5 feature_description triggerAnimation animated"
          data-animate="fadeInRight"
        >
          <h2>{{ featureOneTitle }}</h2>

          <div v-html="featureOneDesc"></div>
        </div>
      </div>

      <hr />
    </div>
  </section>
</template>
