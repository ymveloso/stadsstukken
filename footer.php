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


  <!-- <script>
  // Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Give the parameter a variable name
var dynamicContent = getParameterByName('dc');
  </script>

  <script type="text/javascript">
 $(document).ready(function() {
	// Check if the URL parameter is apples
	if (dynamicContent == 'pip') {
    updateSection(pageNumber = 0)
	}
	// Check if the URL parameter is oranges
	else if (dynamicContent == 'jasper') {
    updateSection(pageNumber = 1)
	}
	// Check if the URL parameter is bananas
	else if (dynamicContent == 'nazif') {
    updateSection(pageNumber = 2)
	}
  else if(dynamicContent == 'studiobureau')
 {
   updateSection(pageNumber = 3)
 }
	else {
    updateSection()

	}
});
</script> -->


  </body>
</html>
