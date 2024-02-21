<template>
    <div>
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
            @click.prevent="update"
            class="btn btn-primary"
        >
            Update
        </button>
    </div>
</template>
<script>
export default {
    name: "PostEditComponent",
    data() {
        return {
            title: null,
            text: null,
            author: null,
        };
    },

    mounted() {
        this.getPost();
    },

    methods: {
        getPost() {
            axios.get(`/api/post/${this.$route.params.id}`).then((res) => {
                this.title = res.data.data.title;
                this.text = res.data.data.text;
                this.author = res.data.data.author;
            });
        },
        update() {
            axios
                .patch(`/api/post/${this.$route.params.id}`, {
                    title: this.title,
                    text: this.text,
                    author: this.author,
                })
                .then((res) => {
                    this.$router.push({
                        name: "post.show",
                        params: { id: this.$route.params.id },
                    });
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
