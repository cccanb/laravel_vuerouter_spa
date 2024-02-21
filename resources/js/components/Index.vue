<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link" :to="{ name: 'home' }"
                        >Home</router-link
                    >
                    <router-link class="nav-link" :to="{ name: 'post.index' }"
                        >Posts</router-link
                    >
                </div>
            </div>
        </div>
    </nav>
    <div>
        <RouterView></RouterView>
    </div>
</template>
<script>
export default {
    name: "Index",
};
</script>
<style scoped></style>
