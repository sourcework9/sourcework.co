<template>
<kinesis-container>
    <h1 class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Tailwind CSS
    </h1>
    <kinesis-element :strength="10">
    whatever
    </kinesis-element>
    <kinesis-element :strength="20">
    content!
    </kinesis-element>
</kinesis-container>
</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
export default {
  components: {
    KinesisContainer,
    KinesisElement
  }
}
</script>
<style scoped>

</style>