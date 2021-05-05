<template>
  <div>
    vuex测试页面{{ count }}--{{ countAlis }}--{{ countPlusLocalState }}
    <div>done todos count {{ doneTodosCount }}</div>
    <button @click="increment">increment</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

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
    ...mapGetters({
      doneTodosCount: "doneTodosCount",
    }),
  },
  methods: {
    ...mapMutations(["increment"]),
    ...mapActions(['incrementAsync'])
  },
};
</script>

<style>
</style>
