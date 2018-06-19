var users = [
    {name: "Lionel",
    lastName: "Messi",
    age: "28",
    city: "Rosario",
    children:["Diego","Ariel","Mario"]},

    {name: "Tomas",
    lastName: "Dachesky",
    age: "19",
    city: "Rosario",
    children:["Nicolas","Irina"]},

    {name: "Neymar",
    lastName: "Junior",
    age: "25",
    city: "Santos",
    children:["Pele","Romario"]},

    {name: "Ronaldinho",
    lastName: "Aveiro",
    age: "38",
    city: "Flamengo",
    children:["Rivaldo", "Garrincha"]},

    {name: "Riquelme",
    lastName: "Roman",
    age: "43",
    city: "Buenos Aires",
    children:["Pavon"]},
];

var listUsers = {
    users:[],
    setUsers:function(users){
        this.users = users;
    },
    ListAll:function(){
        for(var i = 0; i < listUsers.users.length; i++){
            $("#usersTable").append(listUsers.assamble(listUsers.users[i]))
        }
    },
    assamble:function(user){
        return '<tr>'
                    +'<td>' + user.Name + '</td>'
                    +'<td>' + user.email + '</td>'
                    +'<td>' + user.country + '</td>'
                    +'<td>' + user.profile + '</td>'
                    +'<td>' + user.age + '</td>'
                    +'<td>' + user.salary + '</td>'
                +'</tr>';
    },
    listByAgeLimit:function(age){
        for(var i = 0; i < this.users.length; i++){
            if(this.users[i].age <= age){
                console.log("El usuario " + this.users[i].name + " tiene " + this.users[i].age + " años.");
            }
        }
    },
    listByCity:function(city){
        for(var i = 0; i < this.users.length; i++){
            if(this.users[i].city == city){
                console.log("El usuario " + this.users[i].name + " vive en " + this.users[i].city);
            }
        }
    }
}

for(var i = 0; i < users.length; i++){
    console.log(users[i].name + " " + users[i].lastName + " tiene " + users[i].children + " hijos.");
};

function Sumar(n1, n2){
    return n1 + n2;
}

function GetUser(usuario){
    for(var i = 0; i < users.length; i++){
        if(users[i].name == usuario){
            return users[i].lastName + " " + users[i].name + " vive en " + users[i].city;
        }
    }
}

function Usuario(user){
    return user.lastName + " " + user.name + " vive en " + user.city;
}


function ListByAge(edad){
    for(var i = 0; i < users.length; i++){
        if(users[i].age <= edad){
            console.log(Usuario(users[i]));
        }
    }
}

console.log(Sumar());

var menor;

function ListaMenorAMayor(users){
    for(var i = 0; i < users.length; i++){
        if(i == 0){
            menor = users[i];
        }
        if(users[i].age < menor.age){
            menor = users[i];
        }
    }
}

function toggleClass(){
    if($("h1").hasClass("active")){
        $("h1").removeClass("active")
        $("h1").addClass("disabled")
    }else{
        $("h1").removeClass("disabled")
        $("h1").addClass("active")
        }
    
}

$("#test").append("test");