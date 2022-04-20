<template>
    <ul class="navbar-nav ms-lg-auto">
        <li class="nav-item">
            <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item dropdown">
            <router-link :to="{name: 'about'}" class="nav-link dropdown-toggle">About</router-link>
            <ul class="dropdown-menu p-0" aria-labelledby="navbarDropdown">
                <li>
                    <router-link :to="{name: 'services'}" class="dropdown-item">Solution</router-link>
                </li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Enterprise Solution</a></li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    name: "MenuItems",
    data() {
        return {
        
        }
    },

}
</script>

<style scoped>

</style>