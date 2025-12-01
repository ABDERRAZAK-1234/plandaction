
// ---------------------------------------------plan d'action tableau-------------------------------------------------------
// I)- Les declaration du tableau arr = [];  /  arr = new Array();  /  lentgh  / l'ajout ou modification
let arr = [2];
console.log(arr);
arr[1] = 'Abderrazak'
console.log(arr.length);
// -----------------
let arr2 = new Array(5);
console.log(arr2);
arr2[2] = 'aamaich'
console.log(arr2.length);

// ----------------Exercice-------------------------
let array = ['ahmed','abderrazak','mohamed','said','ali'];
console.log(array[0]);
console.log(array[4]);
array[3]='Youssef'
console.log(array);

// II)-Méthodes simples (push, pop, shift, unshift)
let arrMethode = [1,5,2,9,22,34];
// push => ajouter a la fin
arrMethode.push(66);
// unshift => ajouter au début
arrMethode.unshift(77);
// pop => supprimer a la fin
arrMethode.pop();
// shift => supprimer au début
arrMethode.shift();
// -----------résultat---------
console.log(arrMethode);
// ----------------------------------menu------------------------------
let arrayMenu = ['ahmed','abderrazak','mohamed','said','ali'];
console.log('-----------MENU------------');
console.log('Votre tableau est : ', arrayMenu);
console.log('Saisir " 1 " pour ajouter une chaine de carractere dans le début de tableau');
console.log('Saisir " 2 " pour ajouter une chaine de carractere dans la fin dune tableau ');
console.log('Saisir " 3 " pour supprimer une chaine de carractere dans la début dune tableau ');
console.log('Saisir " 4 " pour supprimer une chaine de carractere dans la fin dune tableau ');
console.log('-----------------------');
let ar = prompt("saisir le nombre : ");
let arrr = Number(ar);
switch(arrr){
    case 1 : 
    let choix1 = prompt("saisir quelque chose ");
    arrayMenu.unshift(choix1);
    break;
    case 2 : 
    let choix2 = prompt("sair quelque chose ");
    arrayMenu.push(choix2);
    break;
    case 3 : 
    arrayMenu.shift();
    break;
    case 4 : 
    arrayMenu.pop();
    break;
    default:
        console.log('Erreur');
}
console.log(arrayMenu);
// ---------------------------------------------------------------------------------







