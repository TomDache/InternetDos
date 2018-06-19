var Table = {
    data:[],

    setData:function(Data){
        this.data = Data;
    },

    clear:function(){
        $("#table-body").html("");
    },

    listAll:function(){
        this.clear();
        for(var i = 0; i < this.data.length; i++){
            $("#table-body").append(Table.assamble(this.data[i]));
        }
    },

    assamble:function(Data){
        return '<div class="row">' +
                '<span class="col-2">' + '</span>' +
                '<span class="col-2">' + Data.brand + '</span>' +
                '<span class="col-2">' + Data.location + '</span>' +
                '<span class="col-2">' + Data.lunch + '</span>' +
                '<span class="col-2">' + Data.price + '</span>' +
                '<span class="col-2">' + '</span>' +
                '<span class="description col-12">' + "" + '</span>' +
            '</div>';
    },

    listByBrand:function(brand){
        Table.clear();
        if(brand == ""){
            this.listAll();
        } else for(var i = 0; i < this.data.length; i++){
            if(this.data[i].brand == brand){
                $("#table-body").append(this.assamble(this.data[i]));
            }
        }
    },
}

$("#action1").on("click", function(){
    var input = $("#brandInput").val();
    Table.listByBrand(input);   
});

$(function() {
    Table.setData(elementsList);
    Table.listAll();
});