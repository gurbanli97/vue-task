<template>
  <div class="card">
    <div class="card-content">
      <h1 class="title">Result</h1>
      <div class="content">
        <p>{{ results.total_result }}</p>
        <p>Visa {{ results.visa_status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['results'])
  }
}
</script>