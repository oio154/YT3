<?php
	session_start();
	require_once('./php/def.php');
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet"  href="css/main.css?v=43">
<script src="js/window.js"></script>
<title><?php printTitle(); ?></title>
</head>

<body>
<header><?php include('header.php'); ?></header>



<div id="window1"></div>
<script>//loadXMLDoc('./header.php',document.getElementById('window1'));</script>
</body>

</html>