var params = {
    "val": "about"
};

$.ajax({
    type: "GET",
    url: "../server.php",
    data: params,
    success: function(result){
        var splits = result.split("\n");
        var about_content="<p>";
        for(i=0;i<splits.length;i++)
        {
            if(splits[i].length==1)
            {
                about_content += "</p><p>";
            }
            if(i==0){
                about_content += "<h2>";
            }
            about_content += splits[i];
            if(i==0){
                about_content += "</h2>";
            }
        }
        about_content+="</p>";

        document.getElementById("about_content").innerHTML = about_content;

    }
});

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}