<!-- attribute bindings -->

<script setup>
import { ref } from 'vue';
const message = ref('Hey partner!');
const hover = ref(false);
const isRed = ref(true);
function changeColor() {
  isRed.value = !isRed.value;
}
const color = ref('green');
function change() {
  color.value = color.value === 'green' ? 'blue' : 'green';
}
</script>

<template>
  <div class="epic2">
    <span :title="message"><h1>exercise2</h1></span>
    <p
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :style="{ color: hover ? 'red' : 'black' }"
    >
      Hover me and ill turn red! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
      adipisci ratione repudiandae quod odit fuga explicabo, voluptate sit eveniet saepe fugiat
      dolorem possimus maiores, cumque voluptatibus harum hic deleniti veniam!
    </p>
    <p @click="changeColor" :class="{ red: isRed }">
      click me and it will be normal color! Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Nulla aliquam aut excepturi veritatis, explicabo pariatur quisquam at, exercitationem
      eaque quasi, molestiae neque ipsam sequi? Dicta illum accusamus provident voluptates eum?
    </p>
    <p @click="change" :style="{ color }">
      IM green click me to turn me blue! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Expedita, natus voluptates commodi veniam ad unde earum fugiat tempora nostrum quisquam
      nesciunt nemo cupiditate? Asperiores rem sit quod nesciunt est earum.
    </p>
  </div>
</template>

<style scoped>
.epic2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.epic2 p {
  padding: 10px;
}
.red {
  color: red;
}
</style>
