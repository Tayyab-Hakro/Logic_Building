function debounce(func, delay) {
    let timer;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  }
console.log("Hello world" , 4000)  