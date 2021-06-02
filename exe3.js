function birth_date (name, age) {
    var data = new Date();
    
    return (name+' nasceu em '+(data.getFullYear()-age))
}

var nome = 'Moisés'
var idade = 20
console.log(birth_date(nome, idade))