var params = {
    "val": "press"
};
$.ajax({
    type: "GET",
    url: "../server.php",
    data: params,
    success: function(result){

        // create_object_array(result);
        var splits= result.split("\n");
        var press_content ="<ol>";

        // getImage(splits[0])
        for(i=0;i<splits.length;i+=4){
            press_content +="<li>";

            // press_content += "<img src='" +  getImage(splits[i] + "'>";
            press_content +=
                "<a href='"+splits[i]+"'>"+splits[i+2]+((splits[i+1][0]=='-'&&splits[i+1][1]=='-')?"":(", "+splits[i+1])) +"</a>";
            press_content +="</li><br>";
        }
        press_content +="</ol>";
        document.getElementById("replace_press").innerHTML = press_content;

    }
});

function getImage(url){
    var parameters = {
        "val": "press1",
        "url": url
    };
    $.ajax({
        type: "GET",
        url: "../server.php",
        data: parameters,
        success: function(result)
        {
            console.log(result);
        }

    });
}
