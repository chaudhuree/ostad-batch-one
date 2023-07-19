<script setup>
const featureListTitle = "Lorem ipsum dolor.";

const featureList = [
  {
    id: "feature-1",
    title: "Lorem ipsum",
    desripton:
      "Lorem ipsum dolor and consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore aliqua",
    iconCalss: "fa fa-paper-plane",
  },
  {
    id: "feature-2",
    title: "Dolor and",
    desripton:
      "Lorem ipsum dolor and consectetur adipisicing incididunt eiusmod tempor incididunt magna aliqua",
    iconCalss: "fa fa-globe",
  },
  {
    id: "feature-3",
    title: "Consectetur adipisicing",
    desripton:
      "Lorem ipsum dolor and consectetur adipisicing incididunt eiusmod tempor incididunt magna",
    iconCalss: "fa fa-bomb",
  },
  {
    id: "feature-4",
    title: "Lorem ipsum dolor",
    desripton:
      "Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna",
    iconCalss: "fa fa-cog",
  }
];
</script>
<template>
  <section id="features">
    <div class="container">
      <div class="row">
        <div id="features_holder" class="col-md-12">
          <div class="features_title text-center">
            <h1>{{ featureListTitle }}</h1>
          </div>
          <ul class="features_list">
            <li
              v-for="(feature, index) in featureList"
              :key="index"
              :id="feature.id"
            >
              <div
                class="col-sm-6 col-md-6 feature-box triggerAnimation animated clearfix"
                data-animate="bounceIn"
              >
                <div class="feature-box-content">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.desripton }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
