console.log("its working")

const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener('scroll', function() {
    document.getElementById('audrey').style.height = window.scrollY + "50px";
    document.getElementById('audrey') .style.width = window.scrollY + "100px";
    this.console.log("scroll")
  });
  