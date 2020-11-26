var products=[
    {
        productName: "Flying ninja",
        price: 12,
        image:"imgs/ao-thun-tennis-tts100-cho-nam-den.jpg",
        star:5
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"imgs/ao-thun-tennis-tts100-cho-nam-den.jpg",
        star:4
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"imgs/ao-thun-tennis-tts100-cho-nam-den.jpg",
        star:3.5
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"imgs/ao-thun-tennis-tts100-cho-nam-den.jpg",
        star:3
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"imgs/ao-thun-tennis-tts100-cho-nam-den.jpg",
        star:1
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"imgs/ao-thun-tennis-tts100-cho-nam-den.jpg",
        star:2
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"imgs/ao-thun-tennis-tts100-cho-nam-den.jpg",
        star:0
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"imgs/ao-thun-tennis-tts100-cho-nam-den.jpg",
        star:3.5
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"imgs/ao-thun-tennis-tts100-cho-nam-den.jpg",
        star:3.5
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"imgs/ao-thun-tennis-tts100-cho-nam-den.jpg",
        star:3.5
    }

]
function gridProduct() {
    var grid_html = "";
    for(var i=0;i<products.length;i++){
        grid_html+= "<div class=\"col-md-4\">\n" +
            "                     <div class=\"item text-center\">\n" +
            "                         <img class=\"product-image\" src=\""+products[i].image+"\" height=\"700\" width=\"700\"/>\n" +
            "                         <h2 class=\"product-name\">"+products[i].productName+"</h2>\n" +
            "                         <div class=\"star\">\n" +
            "                             <div class=\"star-box\">\n" +
            "                                 <div class=\"star-rate\" style=\"width:"+(products[i].star/5*100)+"%\"></div>\n" +
            "                             </div>\n" +
            "                         </div>\n" +
            "                         <p class=\"price\">$"+products[i].price+"</p>\n" +
            "                         <a href=\"#\" class=\"add-to-cart text-uppercase\">Add To Cart</a>\n" +
            "                     </div>\n" +
            "                 </div>";
    }
    return grid_html;
}
var products_html = document.getElementById("products");
products_html.innerHTML = gridProduct();