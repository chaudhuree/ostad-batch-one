<template>
  <div class="container">
    <div class="loadbar" :style="{ width: loadingProgress + '%' }"></div>
    <div id="slide" ref="slideRef">
      <div v-for="item in data" :key="item.id" class="item" :style="{ backgroundImage: 'url(' + item.imgUrl + ')' }">
        <div class="content">
          <div class="name">{{ item.name }}</div>
          <div class="des">{{ item.desc }}</div>
          <button>See more</button>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button id="prev" @click="handleClickPrev">
        <font-awesome-icon :icon="faAngleLeft" />
      </button>
      <button id="next" @click="handleClickNext">
        <font-awesome-icon :icon="faAngleRight" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const slideRef = ref(null);
    const loadingProgress = ref(0);
    const data = ref([
  {
    id: 1,
    imgUrl: "https://i.postimg.cc/qvKqNxQ8/image-one.jpg",
    desc: "Some beautiful roads cannot be discovered without getting loss.",
    name: "EXPLORE NATURE",
  },
  {
    id: 2,
    imgUrl:
      "https://i.postimg.cc/YqhhHHWD/image-two.jpg",
    desc: "Some beautiful roads cannot be discovered without getting loss.",
    name: "EXPLORE NATURE",
  },
  {
    id: 3,
    imgUrl:
      "https://i.postimg.cc/kMjBz4Bt/image-three.jpg",
    desc: "Some beautiful roads cannot be discovered without getting loss.",
    name: "EXPLORE NATURE",
  },
  {
    id: 4,
    imgUrl: "https://i.postimg.cc/VLp5sV9f/image-four.jpg",
    desc: "Some beautiful roads cannot be discovered without getting loss.",
    name: "EXPLORE NATURE",
  },
  {
    id: 5,
    imgUrl: "https://i.postimg.cc/7hQh2BpN/image-five.jpg",
    desc: "Some beautiful roads cannot be discovered without getting loss.",
    name: "EXPLORE NATURE",
  },
]);

    const handleClickNext = () => {
      const items = slideRef.value.querySelectorAll(".item");
      slideRef.value.appendChild(items[0]);
    };

    const handleClickPrev = () => {
      const items = slideRef.value.querySelectorAll(".item");
      slideRef.value.prepend(items[items.length - 1]);
    };

    // Auto-scroll functionality
    let intervalId = null;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        handleClickNext();
      }, 5000); // 3 seconds
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId);
    };

    onMounted(() => {
      startAutoScroll();
    });

    onUnmounted(() => {
      stopAutoScroll();
    });

    return {
      slideRef,
      loadingProgress,
      data,
      handleClickNext,
      handleClickPrev,
      faAngleLeft,
      faAngleRight,
    };
  },
};
</script>

<style>
/* Add your styles here, or import the styles from the original "index.css" file. */
</style>
