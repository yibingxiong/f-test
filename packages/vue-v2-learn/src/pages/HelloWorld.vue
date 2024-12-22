<template>
 <div>
   User {{ $route.params.id }}<br/>
   name: {{$route.query.name}}
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  beforeRouteUpdate(to, from, next) {
    console.log('to', to);
    console.log('from', from);
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
