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

    .card {
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    /* On mouse-over, add a deeper shadow */
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    /* Add some padding inside the card container */
    .container {
        padding: 2px 16px;
    }

    /* Add rounded corners to the top left and the top right corner of the image */
    img {
        border-radius: 5px 5px 0 0;
    }
</style>