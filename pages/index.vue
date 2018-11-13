<template>
  <section class="section">
    <div class="container">
      <h2 class="title has-text-centered">Top Headlines</h2>
      <b-tabs position="is-centered" class="block">
        <b-tab-item label="General">
          <general></general>
        </b-tab-item>

        <b-tab-item label="Business">
          <business></business>
        </b-tab-item>

        <b-tab-item label="Entertainment">
          <entertainment></entertainment>
        </b-tab-item>

        <b-tab-item label="Health">
          <health></health>
        </b-tab-item>

        <b-tab-item label="Science">
          <science></science>
        </b-tab-item>

        <b-tab-item label="Sports">
          <sports></sports>
        </b-tab-item>

        <b-tab-item label="Tech">
          <technology></technology>
        </b-tab-item>
      </b-tabs>
      
    </div>
  </section>
</template>

<script>
  import general from '~/components/General.vue'
  import business from '~/components/Business.vue'
  import entertainment from '~/components/Entertainment.vue'
  import health from '~/components/Health.vue'
  import science from '~/components/Science.vue'
  import sports from '~/components/Sports.vue'
  import technology from '~/components/Technology.vue'


  export default {
    
    components: {
      general,
      business,
      entertainment,
      health,
      science,
      sports,
      technology
    },
  }
</script>

<style>

</style>

