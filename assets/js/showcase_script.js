var params = {
    "val": "showcase"
};

$.ajax({
    type: "GET",
    url: "../server.php",
    data: params,
    success: function(result){
        var data = result.split("\n--NEW--\n");
        var showcase_content = "";
        for(i=0;i<data.length;i++)
        {
            var temp= data[i];
            var splits=temp.split("\n");
            showcase_content+="<div class='row text-block'>";
            showcase_content+=   "<div class='col-sm-12'>";

            for(j=0;j<splits.length;j++)
            {
                if(j==0)
                    showcase_content+= "<h4><b class='red-font'>"+ splits[j]+"</b></h4>";
                if(j==1)
                    showcase_content+= "<span style='font-size:10px;'>" + convert_date(splits[j]) + "</span>";
                if(j>=2){
                    showcase_content+=   "<div class='col-sm-12'>";
                    if(splits[j].substring(0,7) =="--img--")
                    {
                        // console.log(splits[j].split(" ")[1]);
                        showcase_content += "<div class='imgWrapper'><img src='../gamepipe_content/files/" + splits[j].split(" ")[1] + "'/></div>";
                    }
                    else if( splits[j].substring(0,7) == "<iframe" )
                    {
                        console.log("true");
                        showcase_content += "<div class='videoWrapper'>" +splits[j] + "</div>";
                    }
                    else if( splits[j][0] <='9' && splits[j][0] >='0' && splits[j][1]=='.'){
                        console.log("a");
                        showcase_content += "<p>&nbsp;&nbsp;&nbsp;" + splits[j] + "</p>";
                    }
                    else if( splits[j][0]=='-' && splits[j][1]==' ')
                    {
                        showcase_content += "<li>" + splits[j].substring(2) + "</li>";
                    }
                    else{
                        showcase_content+=   "<p>" + splits[j] + "</p>";
                    }
                    showcase_content+=   "</div>";

                }
                // showcase_content+=
            }
            showcase_content+="</div>";
            showcase_content+="</div>";
            showcase_content+="<hr class=''>";
            // break;
        }

        document.getElementById("replace_showcase").innerHTML = showcase_content;
    }
});

function convert_date(str)
{
    year= str.substring(6,10);
    day = str.substring(3,5);
    month=str.substring(0,2);
    switch(month)
    {
        case "01": month="Jan";break;
        case "02": month="Feb";break;
        case "03": month="Mar";break;
        case "04": month="Apr";break;
        case "05": month="May";break;
        case "06": month="Jun";break;
        case "07": month="Jul";break;
        case "08": month="Aug";break;
        case "09": month="Sep";break;
        case "10": month="Oct";break;
        case "11": month="Nov";break;
        case "12": month="Dec";break;
    }
    return month + " " + day +", "+ year;
}