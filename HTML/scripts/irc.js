
var ws; //websocket

$("#connectbutton").click(ConnectToIRC);
$("#textbox").keypress(keypres); //for sending input

function keypres(e)
{
	if(e.which == 13)
	{
		var string = $("#textbox").val(); 
		if(string.charAt(0) == '/')
		{
			ws.send(string.substr(1,string.len));
		}
		else
		{
		ws.send("PRIVMSG "+$("#channel").val()+" :"+string);
		$("#console").val($("#console").val() + '<Socket_User> '+$("#textbox").val() + '\n');
		}
		$("#textbox").val('');
	}
}

function load_script()
{
	WebSocketTest();
}

function ConnectToIRC()
{
  if ("WebSocket" in window)
  {
     // Let us open a web socket
     ws = new WebSocket("ws://jessewatson.org:1337");
     ws.onopen = function()
     {
        // Web Socket is connected, send data using send()
	ws.send("/~"  +  $("#server").val() + "," + $("#port").val());

	$("#fadebg").hide();
	$("#connectui").hide();

	ws.send("PASS null");
	ws.send("NICK "+$("#nickname").val());
	ws.send("USER client 8 * : JW Client");
	ws.send("JOIN "+$("#channel").val());	


     };
     ws.onmessage = function (evt) 
     { 
        var received_msg = evt.data;
        $("#console").val($("#console").val() + received_msg);
	$('#console').scrollTop($('#console')[0].scrollHeight);

     };
     ws.onclose = function()
     { 
        // websocket is closed.
        alert("Connection is closed..."); 
     };
  }
  else
  {
     // The browser doesn't support WebSocket
     alert("WebSocket NOT supported by your Browser!");
  }
}
