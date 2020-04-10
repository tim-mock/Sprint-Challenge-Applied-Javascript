// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const lambdaHead = document.createElement('div');
    const lambdaDate = document.createElement('span');
    const lambdaTitle = document.createElement('h1');
    const lambdaTemp = document.createElement('span');

    lambdaHead.classList.add('header');
    lambdaDate.classList.add('date');
    lambdaTemp.classList.add('temp');

    lambdaDate.textContent = ('March 28, 2019');
    lambdaTitle.textContent = ('Lambda Times');
    lambdaTemp.textContent = ('98°');


    lambdaHead.appendChild(lambdaDate);
    lambdaHead.appendChild(lambdaTitle);
    lambdaHead.appendChild(lambdaTemp);



    return lambdaHead;
}

const bigHeader = document.querySelector('.header-container')
bigHeader.appendChild(Header());