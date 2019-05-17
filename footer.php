<div class=row id="footer">
  <div class="col">
    <ul>
    <li><a href="">Instagram</a></li>
    <li><a href="">Facebook</a></li>
    <li><a href="">Nieuwsbrief</a></li>
    <li><a href="">Mail</a></li>
  </ul>
  </div>
</div>


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
//   $( "#header" ).hover(function() {
//   $("#header").css("border", "1px solid red");
//   // $("#header").css("height", "100vh");
//   // $("#header").css("width", "100vw");
//   // $("#header").css("z-index", "0");
//   $("#header").html('<div class="col"><span style="text-align:left;"><a href="about.php">  <i>Stadsstukken</i> </a></<span style="float:right;font-weight: 1000;"><a href="about.php">+</a></span></div> <br><div class="col" id="play"></div>');
// });
  </script>

  <script>

  $("#header").click(function() {
    window.location = $('#header').find("a").attr("href");
  return false;
});

</script>

  <!-- scrolling effects -->
  <script src="scripts/javascript.js"></script>
  <!-- page slider -->
  <script src="scripts/js.js"></script>
  <!-- bodymovin -->
  <script src="scripts/anims.js"></script>
  </body>
</html>
