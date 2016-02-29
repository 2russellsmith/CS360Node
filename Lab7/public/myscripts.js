    $(document).ready(function() {
        $( "#cityfield" ).keyup(function() {
		var request = "https://students.cs.byu.edu/~clement/CS360/ajax/getcity.cgi?q=" + $("#cityfield").val();
                console.log(request);
            $.getJSON(request, function(data) {
                var everything;
                everything = "<ul>";
                $.each(data, function(i,item) {
                  everything += "<li> "+data[i].city;
                });
                everything += "</ul>";
                $("#txtHint").html(everything);
              })
              .done(function() { console.log('getJSON request succeeded!'); })
              .fail(function(jqXHR, textStatus, errorThrown) { 
                console.log('getJSON request failed! ' + textStatus); 
                console.log("incoming "+jqXHR.responseText);
              })
              .always(function() { console.log('getJSON request ended!');
              })
              .complete(function() { console.log("complete"); });
        });
    });
    $("#button").click(function(e){
      var value = $("#cityfield").val();
      console.log(value);
      $("#dispcity").text(value);
      var myurl= "https://api.wunderground.com/api/0b359a2c023036e0/geolookup/conditions/q/UT/";
        myurl += value;
        myurl += ".json";
        console.log(myurl);
        $.ajax({
          url : myurl,
          dataType : "jsonp",
          success : function(parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_string = parsed_json['current_observation']['temperature_string'];
            var current_weather = parsed_json['current_observation']['weather'];
            everything = "<ul>";
            everything += "<li>Location: "+location;
            everything += "<li>Temperature: "+temp_string;
            everything += "<li>Weather: "+current_weather;
            everything += "</ul>";
            $("#weather").html(everything);
         }
        });
      e.preventDefault();
    });
$("#button2").click(function(e){
      document.body.style.backgroundImage = "url('https://wallpaperscraft.com/image/dota_2_art_2014_logo_97476_1920x1080.jpg')";
      document.body.style.backgroundSize = "100%";
      document.body.style.color = "red"
      var myurl= "http://ec2-52-90-65-236.compute-1.amazonaws.com/Lab6/Dota2Heros"
        console.log(myurl);
        $.ajax({
          url : myurl,
          dataType : "json",
          success : function(parsed_json) {
          everything = "<ul>";
	  console.log(parsed_json['result']['heroes']);
	  for(var hero in parsed_json['result']['heroes']){
            var hero1 = parsed_json['result']['heroes'][hero]['name'];
            everything += "<img src='http://cdn.dota2.com/apps/dota2/images/heroes/" + hero1.substring(14) + "_sb.png'>" + "Name - " + parsed_json['result']['heroes'][hero]['localized_name'] + "<br>";
          }
          everything += "</ul>";
          $("#DOTA").html(everything);
         }
        });
      e.preventDefault();
    });


