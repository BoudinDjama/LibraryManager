
var bibliotheque = (function () {
    var livres = [];
    var clearFields = function () {

        document.getElementById("isbn").value = "";
        document.getElementById("titre").value = "";
        document.getElementById("auteur").value = "";
        document.getElementById("editeur").value = "";
        document.getElementById("date").value = "";
        document.getElementById("description").value = "";
        document.getElementById("categorie").selectedIndex = 0;
        



    }

    return {

        ajouter: function () {
           //lire le formulaire
            var livre = {
                isbn: document.getElementById("isbn").value,
                titre: document.getElementById("titre").value,
                auteur: document.getElementById("auteur").value,
                editeur: document.getElementById("editeur").value,
                date: document.getElementById("date").value,
                desc: document.getElementById("description").value,
                categorie: document.getElementById("categorie").value,


            };
          //stocker le nouveau livre
            livres.push(livre);

            //Ajouter à l'ecran
            var option = document.createElement("option");
            option.text= livre.titre;
            option.value = livres.length - 1;
            document.getElementById("bookSelector").add(option);
            clearFields();
        },
        modifier: function () {
            window.alert("modifier");
        },
        supprimer: function () {
            //Rechercher livre séléctionner
            var index = document.getElementById("bookSelector").value;


            //Supprimer dans le tableau

            livres.splice(index, 1);

            //mettre a jous a l écran
            document.getElementById("bookSelector").remove(index);

            //Enlever le disable
            document.getElementById("modifier").disabled = true;
            document.getElementById("supprimer").disabled = true;

            clearFields();
        },
        selectioner: function () {
            // Rechercher livre séléctionner
            var livre = livres[document.getElementById("bookSelector").value];

            //Remplir le form

            document.getElementById("isbn").value = livre.isbn;
            document.getElementById("titre").value = livre.titre;
            document.getElementById("auteur").value = livre.auteur;
            document.getElementById("editeur").value = livre.editeur;
            document.getElementById("date").value = livre.date;
            document.getElementById("description").value = livre.description;
            document.getElementById("categorie").value = livre.categorie;

            //Enlever disable
            document.getElementById("modifier").disabled = false;
            document.getElementById("supprimer").disabled = false;
        }


    };

})();