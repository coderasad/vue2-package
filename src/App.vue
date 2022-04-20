<template>
    <div id="app">
        <Header/>
        <router-view style="min-height: 80vh" />
        <Footer/>
    </div>
</template>

<script>

import Header from "@/views/layouts/Header";
import Footer from "@/views/layouts/Footer";
export default {
    name: 'App',
    components: {Footer, Header},
}
</script>
