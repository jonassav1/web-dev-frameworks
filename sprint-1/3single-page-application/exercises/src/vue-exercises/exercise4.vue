<!-- form bindings -->

<script setup>
import { ref } from 'vue';

const message = ref();

const check = ref();

const chackNames = ref([]);

const picked = ref([]);

const selected = ref([]);

const selectMulti = ref([]);
</script>

<template>
  <div class="centry">
    <h1>exercise4</h1>
    <div>
      <h2>text input</h2>
      <input v-model="message" placeholder="Write here" />
      <p>{{ message }}</p>
    </div>

    <div>
      <h2>checkbox</h2>
      <input type="checkbox" name="checkbox" id="checkbox" v-model="check" />
      <label for="checkbox" id="checkbox">{{ check }}</label>
    </div>

    <div>
      <h2>multi-checkbox</h2>
      <input type="checkbox" value="a" id="multicheckbox1" v-model="chackNames" />
      <label for="multicheckbox1" id="multicheckbox1">a</label>
      <br />
      <input type="checkbox" value="b" id="multicheckbox2" v-model="chackNames" />
      <label for="multicheckbox2" id="multicheckbox2">b</label>
      <div>checked checkboxes {{ chackNames }}</div>
    </div>

    <div>
      <h2>radio buttons</h2>
      <input type="radio" value="radio1" id="radio" v-model="picked" />
      <label for="radio">radio1</label>
      <br />
      <input type="radio" value="radio2" id="radio" v-model="picked" />
      <label for="radio">radio2</label>
      <div>picked button {{ picked }}</div>
    </div>

    <div>
      <h2>select dropdown</h2>
      <select v-model="selected" id="">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>
      <div>selected {{ selected }}</div>
    </div>

    <div>
      <h2>multiselect dropdown</h2>
      <select v-model="selectMulti" multiple>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>
      <div>selected multiple {{ selectMulti }}</div>
    </div>
  </div>
</template>

<style scoped>
.centry {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.centry select {
  width: 100px;
  display: flex;
  justify-self: center;
}
</style>
