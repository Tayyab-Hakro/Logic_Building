function strstr(main, sub) {
    for (let i = 0; i <= main.length - sub.length; i++) {
      let match = true;
      for (let j = 0; j < sub.length; j++) {
        if (main[i + j] !== sub[j]) {
          match = false;
          break;
        }
      }
      if (match) return i;
    }
    return -1;
  }
  