// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let tabsArray = [];
const lambdaTabs = document.querySelector('.topics')
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(resolution => {

        tabsArray = resolution.data.topics
        return tabsArray;

    })

.then(() => {
    tabsArray.forEach(tabTopic => {
        lambdaTabs.appendChild(newTab(tabTopic))
    })
})

.catch(error => {
    console.log(error, 'error')
})

function newTab(lambdaTopicTabs) {
    const lambdaTopics = document.createElement('div');
    lambdaTopics.classList.add('tab');
    lambdaTopics.textContent = (lambdaTopicTabs)

    return lambdaTopics;
}