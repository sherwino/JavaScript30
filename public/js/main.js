fetch('./challenges.json')

document.body.onload = addChallenges(challenges)

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

    cardTitle.innerText = title
    cardDetails.innerText = detailsText
    initialBtn.innerText = 'Initial'
    initialBtn.href = initLink
    finalBtn.innerText = 'Final'
    finalBtn.href = finalLink

    cardTitleContainer.appendChild(cardTitle)
    cardBorder.appendChild(initialBtn)
    cardBorder.appendChild(finalBtn)

    card.appendChild(cardTitleContainer)
    card.appendChild(cardDetails)
    card.appendChild(cardBorder)
}

function addChallenges(challenges) {
    challenges.forEach(challenge => {
        createCard(challenge)
    });
}