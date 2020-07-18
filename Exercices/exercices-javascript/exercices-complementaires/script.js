// Inserez la balise script au bon endroit dans votre index.html

// Créez un script permettant d'ouvrir une box alert au click sur un bouton, n'oubliez pas de créer la balise bouton dans votre index.html

// A l'aide de la propriété textContent modifiez le contenu text de votre index.html: d'abord créez un paragraphe avec l'ID de votre choix, puis dans votre fichier script.js modifiez le contenu texte de cette balise

// Affichez dans une box alert le résultat de la méthode math random, dont l'entier à ne pas dépassé est 16

// A l'aide de la méthode fetch(), contactez cette API via cette url: https://type.fit/api/quotes, aidez vous de l'exemple donné dans la théorie. D'abord traitez la réponse en utilisant la méthode .json(), ensuite affichez le contenu de la réponse dans un console.log

const getrandomQuotes = () => {
  let randomNumber = Math.floor(Math.random() * Math.floor(1643));
  fetch('https://type.fit/api/quotes')
    .then(response => {
      return response.json();
    })
    .then(response => {
      let data = response[randomNumber];
      console.log(data);
      document.getElementById('quote').textContent = data.text;
      if (data.author === null || data.author === undefined) {
        document.getElementById('author').textContent = "l'auteur est inconnu";
      } else {
        document.getElementById('author').textContent = data.author;
      }
    });
};
getrandomQuotes();
document.getElementById('alert').addEventListener('click', () => {
  getrandomQuotes();
});
