
function show_ec(id_){
    var div_ = document.querySelector(id_);
    if(id_.includes("Show"))
        div_.style.display = "inline-block";

    else
        div_.style.display = "block";

}
function destroy_ec(id_){
    document.querySelector(id_).style.display = "none";
}


document.querySelector("#rgbClick").addEventListener("click",function(e){
    destroy_ec("#rgbError");
    destroy_ec("#hexError");
    destroy_ec("#hexShow");
    destroy_ec("#rgbShow");
    var colors = document.querySelector("#rgb").value.trim().split(" ");
    var color = "rgb(";
    colors.forEach(function(color_, index){
    if(index === 0)
        color += color_;
    else
        color += `,${color_}`;
    });
    color += ")";
    
    var rgb_r =/(rgb)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\)/;
    var rgba_r =/(rgb)\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)/;
    if((rgb_r.test(color) && colors.length === 3) || (rgba_r.test(color) && colors.length === 4)){
    document.querySelector("#rgbShow").style.backgroundColor = color;
    show_ec("#rgbShow");
    }
    else
        show_ec("#rgbError");
    document.querySelector("#rgb").value = "";

});

document.querySelector("#hexClick").addEventListener("click",function(e){
    destroy_ec("#rgbError");
    destroy_ec("#hexError");
    destroy_ec("#rgbShow");
    destroy_ec("#hexShow");
    var color = document.querySelector("#hex").value.trim();
    if(/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(color)){
    document.querySelector("#hexShow").style.backgroundColor = color;
    show_ec("#hexShow");
    }
    else
        show_ec("#hexError");
    document.querySelector("#hex").value = "";
    

});