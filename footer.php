<div class=row id="footer">
  <div class="col">
    <ul>
    <li><a href="https://www.instagram.com/stadsstukken/">Instagram</a></li>
    <li><a href="https://www.facebook.com/stadsstukken
">Facebook</a></li>
    <li><a href="https://mailchi.mp/b7ee7f9c5573/schrijfjein">Nieuwsbrief</a></li>
    <li><a href="mailto:info@stadsstukken.com">Mail Ons</a></li>
  </ul>
  </div>
</div>


</div>

  <!-- <script>
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
  </script> -->


  <script>
  $("#header").click(function() {
  window.location = $('#header').find("a").attr("href");
  return false;
  });

  $("#header1").click(function() {
  window.location = $('#header1').find("a").attr("href");
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
