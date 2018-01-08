var params = {
    "val": "people"
};

var staff={
    members:[]
};

$.ajax({
    type: "GET",
    url: "../server.php",
    data: params,
    success: function (result) {
        create_json_object(result);
        var people_content  ="";
        var flag=0;
        for(i=0;i<staff.members.length;i++)
        {
            if(i%4==0){

            }
            // people_content += "<div class='row'>";
            people_content += "<div class='col-xs-12 col-sm-4 col-md-3 card'>";
            people_content += "<figure>";
            people_content += "<a href='"+staff.members[i].url+ "'>";
            people_content += "<img class='staff-img' src='"+staff.members[i].image +"'/>";
            people_content += "</a>";
            people_content += "<figure-caption>";
            people_content += "<h5><strong>"+staff.members[i].name;

            people_content += "</strong></h5>"
            people_content += staff.members[i].desc
            people_content += "</figure-caption>";
            people_content += "</figure>";
            people_content += "</div>";

        }
        document.getElementById("replace_people").innerHTML = people_content;
    }
});



function create_json_object(result){
    var splits = result.split("\n");

    var flag = 0, i = 0;
    var j;
    for(i=0;i<splits.length;i++)
    {
        if(splits[i].substring(0,9)=="--START--")
        {
            flag=1;
            var person= {
                "name": "", "image": "", "url": "", "desc": ""
            };
            j=0;
            continue;
        }
        if(splits[i].substring(0,7) =="--END--"){
            flag=0;
            staff.members.push(person);

        }
        if(flag==1){
            if(j==0) {
                person.image= "../gamepipe_content/files/" + splits[i];
            }
            if(j==1){
                person.url=splits[i];
            }
            if(j==2){
                person.name = splits[i];
            }
            if(j==3){
                person.desc += splits[i];
            }
            if(j>=4){
                person.desc += "<br>";
                person.desc += splits[i];
            }
            j++;
        }
    }

}