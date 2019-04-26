</div>
  <script>
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }
  </script>
  <!-- scrolling effects -->
  <script src="scripts/javascript.js"></script>
  <!-- page slider -->
  <script src="scripts/js.js"></script>
  <!-- bodymovin -->
  <script src="scripts/anims.js"></script>
  </body>
</html>
