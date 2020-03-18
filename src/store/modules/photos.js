const state = {
    photos: [
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
            "albumId": 1,
            "id": 5,
            "title": "natus nisi omnis corporis facere molestiae rerum in",
            "url": "https://via.placeholder.com/600/f66b97",
            "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        },
        {
            "albumId": 1,
            "id": 6,
            "title": "accusamus ea aliquid et amet sequi nemo",
            "url": "https://via.placeholder.com/600/56a8c2",
            "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
        },
    ]
};
const getters = {
    allPhotos: state => state.photos
};
const actions = {
    fetchPhotos({ commit }) {
        commit("setPhotos");
    },

    addTodo({ commit }, title) {
        const new_index =  state.photos.length;
        const response =  {
            "albumId": 1,
            "id": new_index,
            "title": title,
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        }
        commit("newPhoto",response);
    },

};
const mutations = {
    setPhotos: (state) => state.photos,
    newPhoto: (state, photo) => state.photos.push(photo),

};

export default {
    state,
    actions,
    getters,
    mutations
};
