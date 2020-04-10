// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(resolution => {
        console.log(resolution);
        let cardObject = resolution.data.articles;
        let articlesArr = Object.values(cardObject);
        console.log('look at me', articlesArr)
        const cardsDeck = document.querySelector('.cards-container');

        articlesArr.forEach((thing) => {
            thing.forEach((item) => {
                cardsDeck.appendChild(createCard(item));

            })

        });
    })
    .catch((err) => {
        console.log('Error: ', { err });
    });






function createCard(object) {
    const cardDiv = document.createElement('div');
    const cardHead = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardImgDiv = document.createElement('div');
    const cardImg = document.createElement('img')
    const cardSpan = document.createElement('span');

    cardDiv.classList.add('card');
    cardHead.classList.add('headline');
    cardAuthor.classList.add('author');
    cardImgDiv.classList.add('img-container');

    cardHead.textContent = object.headline
    cardSpan.textContent = object.authorName
    cardImg.src = object.authorPhoto

    cardDiv.appendChild(cardHead);
    cardDiv.appendChild(cardAuthor);
    cardDiv.appendChild(cardImgDiv);
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardSpan);


    return cardDiv;
}