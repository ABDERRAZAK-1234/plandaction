
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







