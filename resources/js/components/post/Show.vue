<template>
    <div v-if="post">
        <div class="mb-3">Title: {{ this.post.title }}</div>
        <div class="mb-3">Text: {{ this.post.text }}</div>
        <div class="mb-3">Author: {{ this.post.author }}</div>
        <button @click="editPost" class="btn btn-primary">Edit</button>
    </div>
</template>
<script>
export default {
    name: "PostShowComponent",
    data() {
        return {
            post: null,
        };
    },

    mounted() {
        this.getPost();
    },

    methods: {
        getPost() {
            axios.get(`/api/post/${this.$route.params.id}`).then((res) => {
                this.post = res.data.data;
            });
        },
        editPost() {
            this.$router.push({
                name: "post.edit",
                params: { id: this.post.id },
            });
        },
    },
};
</script>
<style scoped></style>
