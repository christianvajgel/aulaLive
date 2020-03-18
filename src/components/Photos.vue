<template>
    <div>
        <h3>Photos</h3>
        <div class="photos">
            <div class="card"
                 v-for="photo in allPhotos"
                 :key="photo.id">
                <img :src="photo.url" alt="Photo" style="width:100%">
                <div class="container">
                    <p>{{ photo.title }}</p>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
    export default {
        name: "photos",
        methods: {
            ...mapActions(["fetchPhotos", "deletePhoto", "updatePhoto"]),
        },
        computed: mapGetters(["allPhotos"]),
        created() {
            this.fetchPhotos();
        }
    };
</script>

<style>
    .photos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .todo {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
</style>