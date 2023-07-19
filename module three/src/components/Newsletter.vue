<script setup>
const newsLaterTitle = "Sign up for our newsletter now";
const newsLaterSubtitle =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, expedita quia.";
</script>
<template>
  <section id="newsletter">
    <div class="container">
      <div class="row">
        <div
          class="col-sm-12 text-center triggerAnimation animated"
          data-animate="fadeInDown"
        >
          <h1>{{ newsLaterTitle }}</h1>
          <p>{{ newsLaterSubtitle }}</p>
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-12 text-center triggerAnimation animated"
          data-animate="fadeInUp"
        >
          <div class="message"></div>

          <form id="newsletter_form" method="post" action="#">
            <div id="newsletterfields">
              <input
                id="email"
                type="email"
                value=""
                name="email"
                placeholder="Enter your email address"
              />
              <input type="submit" value="Notify Me" class="newsLaterBtn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.newsLaterBtn {
  width: 16%;
  background-color: #19acca;
  color: #fff;
  font-size: 18px;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  margin-left: 10px;
  padding: 10px 15px;
  border: medium none;
  border-radius: 5px;
  transition: all 250ms ease-in-out;
}
#newsletter {
  background-image: none;
  background: black;
}
</style>
