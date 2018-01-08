var params = {
    "val": "sponsors"
};
$.ajax({
    type: "GET",
    url: "../server.php",
    data: params,
    success: function(result){
        console.log(result);
        var splits = result.split("\n");

        var sponsors_content ="<ul>";

        for(i=0;i<splits.length;i+=4){
            sponsors_content +="<li>";
            sponsors_content +=
                "<a href='"+ splits[i+2] + "'>" +
                    "<img src='../gamepipe_content/files/"+ splits[i+1] +"' alt='"+ splits[i] +"' />" +
                "</a>";
            sponsors_content +="</li>";
        }
        sponsors_content +="</ul>";
        document.getElementById("sponsors_content").innerHTML = sponsors_content;

    },
    error:function(result){
        console.log("error");
    }
});
