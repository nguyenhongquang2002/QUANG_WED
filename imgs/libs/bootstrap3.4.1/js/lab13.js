function abc(){
    var x= "";
    for (var i = 0;i<6;i++){
        x+= "<div class=\"col-md-4\">\n" +
            "                <div class=\"item text-center\">\n" +
            "                    <h2 class=\"product-name\">Flying ninja</h2>\n" +
            "                    <img class=\"product-image\" src=\"https://cf.shopee.vn/file/a24844292147c07bd5b6c0df97e7f583\" height=\"700\" width=\"700\"/>\n" +
            "                    <p class=\"price\">$12</p>\n" +
            "                </div>\n" +
            "            </div>\n";
    }
    return x;
}
var a = document.getElementById("abbb");
a.innerHTML= abc();