<template>
    <div class="w-50 m-5">
        <div class="mb-3">
            <label for="Title" class="form-label">Title</label>
            <input
                type="email"
                class="form-control"
                v-model="title"
                id="title"
                placeholder="title"
            />
        </div>
        <div class="mb-3">
            <label for="Text" class="form-label">Text</label>
            <input
                type="email"
                class="form-control"
                v-model="text"
                id="text"
                placeholder="text"
            />
        </div>
        <div class="mb-3">
            <label for="Author" class="form-label">Author</label>
            <input
                type="email"
                class="form-control"
                v-model="author"
                id="author"
                placeholder="author"
            />
        </div>
        <button
            :disabled="!isDisabled"
            @click.prevent="store"
            class="btn btn-primary"
        >
            Submit
        </button>
    </div>
</template>
<script>
export default {
    name: "PostCreateComponent",
    data() {
        return {
            title: null,
            text: null,
            author: null,
        };
    },

    methods: {
        store() {
            axios
                .post("/api/post/store", {
                    title: this.title,
                    text: this.text,
                    author: this.author,
                })
                .then((res) => {
                    this.$router.push({ name: "post.index" });
                });
        },
    },
    computed: {
        isDisabled() {
            return this.title && this.text && this.author;
        },
    },
};
</script>
<style scoped></style>
