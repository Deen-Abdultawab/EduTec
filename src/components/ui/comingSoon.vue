<template>
    <section class="grid place-items-center w-full h-full">
        <div>
            <h1 class="text-center">This {{ props.feature }} Feature is Coming Soon!!!</h1>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['feature'])

</script>

<style lang="scss" scoped>

</style>