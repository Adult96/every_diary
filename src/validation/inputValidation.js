const Valid = {
  title(text) {
    if (text.length <= 0) return false;
    return true;
  },

  content(text) {
    if (text.length <= 0) return false;
    return true;
  },
};

export default Valid;
