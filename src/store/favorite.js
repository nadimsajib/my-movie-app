export const state = () => ({
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
  });
  
  export const mutations = {
    addFavorite(state, movie) {
      state.favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavorite(state, movieId) {
      state.favorites = state.favorites.filter(movie => movie.id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }
  };
  export const actions = {
    toggleFavorite({ state, commit }, movie) {
      const isFavorite = state.favorites.some(favorite => favorite.id === movie.id);
      if (isFavorite) {
        commit('removeFavorite', movie.id);
      } else {
        commit('addFavorite', movie);
      }
    }
  };
  
  export const getters = {
    isFavorite: (state) => (movieId) => {
      return state.favorites.some(movie => movie.id === movieId);
    }
  };