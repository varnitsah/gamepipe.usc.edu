var params = {
    "val": "trailers"
};

var list;
$.ajax({
    type: "GET",
    url: "../server.php",
    data: params,
    success: function (result) {
        var data = result.split("\n--NEW--\n");
        list = data;
        // console.log(data);
        var trailer_content = "";
        trailer_content +=
            "<div id='myCarousel' class='carousel slide' data-interval='false'>" +
            "<div class=\"carousel-inner\">" +
            "<div class='item active'>";
        // "<div class='list-group'>";
        for (i = 0; i < data.length; i++) {
            trailer_content +=
                "<a href='#myCarousel'  " +
                "data-slide='next'"
                + "onclick='loadData("
                + i
                + ")'>" + data[i].split("\n")[0] + "</a><br>";
            // <a href="#" >Dapibus ac facilisis in</a>
        }
        trailer_content += "<br>" +
            // "</div>" +
            "</div>" +
            "<div class='item'>" +
            "<button href='#myCarousel' onclick='reset()' class='btn btn-primary btn-lg btn-block' data-slide='prev'>Back</button>" +
            "<span id='load_data'></span>" +
            "<button href='#myCarousel' onclick='reset()' class='btn btn-primary btn-lg btn-block' data-slide='prev'>Back</button><br>" +
            "</div>" +
            "</div>" +
            "</div>";
        $("#replace_trailers").html(trailer_content);
    }

});


function reset() {
    $("#load_data").html("");
}

function loadData(i) {
    var video_list = list[i].split("\n");
    // console.log(video_list);
    var load_content = "";
    for (i = 0; i < video_list.length; i++) {
        if (i == 0)
            load_content += "<h2>" + video_list[i] + "</h2>";
        if (i > 0) {
            if (video_list[i][0] == '-')
                load_content += "<h4>" + video_list[i].substring(1) + "</h4>";
            else {

                load_content +=
                    "<div class='row'>" +
                    "<div class='col-sm-12'>" +
                    "<div class='col-xs-12 col-sm-12 col-md-12 col-md-offset-0'>" +
                    "<div class='videoWrapper'>" +
                    video_list[i] +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div><br>";

            }

        }

    }

    document.getElementById("load_data").innerHTML = load_content;
}


