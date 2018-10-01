const profile = {
  state: {
    currentTab: "Music"
  },
  mutations: {
    changeTab(state, name) {
      state.currentTab = name;
    }
  }
};
export default profile;
