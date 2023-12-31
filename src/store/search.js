export const state = () => ({
    searchOpen: false,
    fromPage: '/',
  });
  
  export const mutations = {
    toggleSearch (state) {
      state.searchOpen = !state.searchOpen;
    },
  
    openSearch (state) {
      state.searchOpen = true;
    },
  
    closeSearch (state) {
      state.searchOpen = false;
    },
  
    setFromPage (state, page) {
      state.fromPage = page;
    },
  };
  export const actions = {
    // Your actions here, if any
  };
  
  export const getters = {
    // Your getters here, if any
  };