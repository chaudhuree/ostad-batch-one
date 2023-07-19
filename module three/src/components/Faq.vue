<script setup>
const faqsTitle = "Have a few questions? Of course you do. We've got answers!";
const faqsList = [
  {
    id: "question_1",
    quention:
      "Aliquam dapibus interdum lobortis ornare ipsum primis in faucibus orci mauris suscipit bibendum?",
    answer:
      "Praesent semper, lacus sed cursus porta, odio augue feugiat eros, ac tincidunt ligula massa in est. Etiam ut mi sit amet mauris suscipit bibendum sit amet in odio. Integer congue leo metus.",
  },
  {
    id: "question_2",
    quention: "Aliquam lobortis pretium ornare erat?",
    answer:
      "Praesent semper, lacus sed cursus porta, odio augue feugiat eros, ac tincidunt ligula massa in est. Etiam ut mi sit amet mauris suscipit bibendum sit amet in odio. Integer congue leo metus.",
  },
  {
    id: "question_3",
    quention: "Aliquam dapibus interdum turpis, lobortis pretium?",
    answer:
      "Praesent semper, lacus sed cursus porta, odio augue feugiat eros, ac tincidunt ligula massa in est. Vestibulum ante ipsum primis in faucibus amet mauris suscipitbibendum. Praesent semper, lacus sed cursus porta, odio augue feugiat eros. ",
  },
  {
    id: "question_4",
    quention: "Aliquam interdum, lobortis pretium ornare erat?",
    answer:
      "Praesent semper, lacus sed cursus porta, odio augue feugiat eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere suscipit bibendum sit amet in odio. Integer congue leo metus, mollis lorem viverra.",
  },
];
</script>
<template>
  <section id="faq">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1>{{ faqsTitle }}</h1>
        </div>
      </div>

      <div class="row">
        <div
          :id="faqsList[0].id"
          class="col-md-6 triggerAnimation animated"
          data-animate="bounceIn"
        >
          <div class="question">
            <h4>{{ faqsList[0].quention }}</h4>
            <p>{{ faqsList[0].answer }}</p>
          </div>
        </div>

        <div
          :id="faqsList[1].id"
          class="col-md-6 triggerAnimation animated"
          data-animate="bounceIn"
        >
          <div class="question">
            <h4>{{ faqsList[1].quention }}</h4>
            <p>{{ faqsList[1].answer }}</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          :id="faqsList[2].id"
          class="col-md-6 triggerAnimation animated"
          data-animate="bounceIn"
        >
          <div class="question">
            <h4>{{ faqsList[2].quention }}</h4>
            <p>{{ faqsList[2].answer }}</p>
          </div>
        </div>

        <div
          :id="faqsList[3].id"
          class="col-md-6 triggerAnimation animated"
          data-animate="bounceIn"
        >
          <div class="question">
            <h4>{{ faqsList[3].quention }}</h4>
            <p>{{ faqsList[3].answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
