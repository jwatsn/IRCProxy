<?


?>
<script src="scripts/jquery.js"></script>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
<head>
<LINK href="style.css" rel="stylesheet" type="text/css">

</head>
<body>
<div id="fadebg"></div>
<div id="connectui">
<table align="right">
  <tr>
    <td>Nick:</td>
    <td><input type="text" value="WebSocket_Guy" id="nickname"/></td>
  </tr>

  <tr>
    <td>Server:</td>
    <td><input type="text" id="port" size="4" value="6667"/><input type="text" id="server" value="irc.freenode.net"/></td>
  </tr>

  <tr>
    <td>Channel:</td>
    <td><input type="text" id="channel" value="#omnihax"/></td>
  </tr>


</table> 

<input type="button" value="Connect" id="connectbutton"/>
	
</div>
<div id="main"><textarea id="console"></textarea><br><input type="text" id="textbox"></input></div>
</body>
</html>

<script src="scripts/irc.js"></script>