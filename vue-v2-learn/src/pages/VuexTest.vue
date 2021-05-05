<template>
  <div>
    vuex测试页面{{ count }}--{{ countAlis }}--{{ countPlusLocalState }}
    <button @click="increment">increment</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "VuexTest",
  components: {},
  data() {
    return {
      loalData: 10,
    };
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
      countAlis: "count",
      countPlusLocalState(state) {
        return state.count + this.loalData;
      },
    }),
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>

<style>
</style>
