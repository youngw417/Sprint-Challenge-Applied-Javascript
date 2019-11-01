// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



axios.get("https://lambda-times-backend.herokuapp.com/articles")

.then(response => {
    console.log(response);
    const cardsCon = document.querySelector('.cards-container');
    const cardsObj = response.data.articles;
    for (const key in cardsObj) {
        cardsObj[key].forEach(cur => {
            cardsCon.appendChild(article(cur))
        })
    }
})
.catch(error => alert('the error was returned', error));


function article(obj){

    // create elements
    const cardDiv =  document.createElement('div'),
          headlineDiv = document.createElement('div'),
          authDiv = document.createElement('div'),
          imgConDiv = document.createElement('div'),
          img = document.createElement('img'),
          nameSpan = document.createElement('span');

    // assign class name

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authDiv.classList.add('author');
    imgConDiv.classList.add('img-container');

    // create structure
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authDiv);
    authDiv.appendChild(imgConDiv);
    authDiv.appendChild(nameSpan);
    imgConDiv.appendChild(img);

    //assign values to each element
    headlineDiv.textContent = obj.headline;
    img.src = obj.authorPhoto;
    nameSpan.textContent = `By ${obj.authorName}`;

    return cardDiv;


}