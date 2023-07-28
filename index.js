const projectsCards = document.querySelectorAll(".project")
console.log(projectsCards);
projectsCards.forEach((card) => {
    card.addEventListener('mouseover', (event) => {
        const description = card.querySelector("#description");
        const img = card.querySelector("img");
        const btn = card.querySelector("#button-description")
        img.setAttribute('hidden', '')
        description.removeAttribute('hidden')
        btn.removeAttribute('hidden')

    })
    card.addEventListener('mouseout', (event) => {
        const description = card.querySelector("#description");
        const img = card.querySelector("img");
        const btn = card.querySelector("#button-description")
        img.removeAttribute('hidden')
        description.setAttribute('hidden', "")
        btn.setAttribute('hidden', '')

    });
})