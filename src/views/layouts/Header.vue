<template>
    <div class="header-section shadow-sm">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg navbar-light p-0">
                        <div class="container-fluid">
                            <router-link :to="{name: 'home'}" class="navbar-brand">
                                LoGo
                            </router-link>
                            <a class="navbar-toggler border-primary text-primary" data-bs-toggle="offcanvas"
                               href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <i class="fa-solid fa-bars"></i>
                                <i class="fa-solid fa-bars-staggered"></i>
                            </a>

                            <div class="collapse navbar-collapse" id="navbarNav">
                                <MenuItems/>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
             aria-labelledby="offcanvasExampleLabel">
            <MenuItems/>
        </div>
    </div>
</template>

<script>
import MenuItems from "./MenuItems.vue";

export default {
    name      : "Header",
    components: {MenuItems}
}
</script>

<style scoped>

</style>