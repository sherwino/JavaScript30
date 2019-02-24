const createCard = (challenge) => {
    const { title, bg, detailsText, initLink, finalLink } = challenge
    const card = document.createElement('div')
    const cardTitleContainer = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const cardDetails = document.createElement('div')
    const cardBorder = document.createElement('div')
    const initialBtn = document.createElement('a')
    const finalBtn = document.createElement('a')

    card.className = 'challenge-card mdl-card mdl-shadow--2dp'
    cardTitleContainer.className = 'mdl-card__title'
    cardTitle.className = 'mdl-card__title-text'
    cardDetails.className = 'mdl-card__supporting-text'
    cardBorder.className = 'mdl-card__actions mdl-card--border'
    initialBtn.className = 'mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'
    finalBtn.className = 'mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'
    console.log('details', detailsText)
    cardTitle.innerText = title
    cardDetails.innerText = detailsText
    initialBtn.innerText = 'Initial'
    initialBtn.href = initLink
    finalBtn.innerText = 'Completed'
    finalBtn.href = finalLink

    cardTitleContainer.appendChild(cardTitle)
    cardTitleContainer.style.background = `url(${bg}) center / cover`
    cardBorder.appendChild(initialBtn)
    cardBorder.appendChild(finalBtn)

    card.appendChild(cardTitleContainer)
    card.appendChild(cardDetails)
    card.appendChild(cardBorder)

    const listSection = document.getElementById('list')
    listSection.appendChild(card)
}

function addChallenges() {
    // The JSON imported below should only have the challenges that I have completed
    fetch('https://raw.githubusercontent.com/sherwino/JavaScript30/master/public/js/challenges.json')
    .then(response => response.json())
    .then((challenges => {
        console.log('Received Challanges JSON', challenges)
        challenges.forEach(challenge => {
            createCard(challenge)
        });
    }));
}

document.onload = addChallenges()
