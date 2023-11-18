//selectionner les 2 boutons et la div qui a la classe count
let plus = document.querySelector("#plus");
let count = document.querySelector(".count");
let minus = document.querySelector("#minus");
//ajouter un event listener pour le bouton plus
plus.addEventListener("click", () => {
  //le ++ fait l'incrementation
  count.innerHTML++;
});
//ajouter un event listener pour le bouton mois

minus.addEventListener("click", () => {
  //pour ne pas depasser le 0 on rajoute une condition
  if (count.innerHTML > 0) {
    //le -- fait la decrementation
    count.innerHTML--;
  }
});
