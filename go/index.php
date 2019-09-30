<!doctype html>
<html>
	<head>
		<link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css.css" media="screen" />
	</head>

	<body class="indexbody">
		<iframe src="2p.html" height="1200px" width="100%"></iframe>
		<br />
		<div>
			<input type="text" value="http://honbraofficial.github.io/skola/go?p=test" id="linkInput" readonly>
			<button onclick="linkCopy()">Zkopírovat odkaz</button>
			<script>function linkCopy() {
  var copyText = document.getElementById("linkInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  var element = document.getElementById("copiedLabel");
  element.innerHTML = "Zkopírováno!";
  setTimeout(linkCopy2, 1000);
}

function linkCopy2() {
  var element = document.getElementById("copiedLabel");
  element.innerHTML = "Zkopírováno! (3)";
  setTimeout(linkCopy3, 1000);
}

function linkCopy3() {
  var element = document.getElementById("copiedLabel");
  element.innerHTML = "Zkopírováno! (2)";
  setTimeout(linkCopy4, 1000);
}

function linkCopy4() {
  var element = document.getElementById("copiedLabel");
  element.innerHTML = "Zkopírováno! (1)";
  setTimeout(linkCopy5, 1000);
}

function linkCopy5() {
  var element = document.getElementById("copiedLabel");
  element.innerHTML = "";
}
			</script>
			<h1 id="copiedLabel"></h1>
		</div>
		<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <div class="search-container">
    <form action="index.html">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</div>

<div style="padding-left:16px">
  <h2>Responsive Search Bar <?php echo $_POST["name"]?></h2>
  <p>Navigation bar with a search box and a submit button inside of it.</p>
  <p>Resize the browser window to see the responsive effect.</p>
</div>
	</body>
</html>