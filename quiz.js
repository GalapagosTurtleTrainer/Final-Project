var pizzaChoice

// local storage vs session storage https://www.google.com/search?q=session+storage+vs+local+storage&oq=session+storage+vs+local+storage&aqs=chrome..69i57j0l7.6760j0j4&sourceid=chrome&ie=UTF-8
if (sessionStorage.getItem("pizzaChoice")) {
    pizzaChoice = parseInt(sessionStorage.getItem("pizzaChoice"))
} else {
    pizzaChoice = 0
    sessionStorage.setItem("pizzaChoice", 0)
}

function startFunction() {
    location.replace("Question1.html")
}
function veggieFunction() {
    pizzaChoice = pizzaChoice + 1
    sessionStorage.setItem("pizzaChoice", pizzaChoice)
    location.replace("Question2b.html")
}
function meatFunction() {
    pizzaChoice = pizzaChoice + 2
    sessionStorage.setItem("pizzaChoice", pizzaChoice)
    location.replace("Question2a.html")
}
function pepperoniFunction() {
    pizzaChoice = pizzaChoice + 2
    sessionStorage.setItem("pizzaChoice", pizzaChoice)
    location.replace("Question3.html")
}
function sausageFunction() {
    pizzaChoice = pizzaChoice + 3
    sessionStorage.setItem("pizzaChoice", pizzaChoice)
    location.replace("Question3.html")
}
function mushroomFunction() {
    pizzaChoice = pizzaChoice + 1
    sessionStorage.setItem("pizzaChoice", pizzaChoice)
    location.replace("Question3.html")
}
function broccoliFunction() {
    pizzaChoice = pizzaChoice + 2
    sessionStorage.setItem("pizzaChoice", pizzaChoice)
    location.replace("Question3.html")
}
function thinFunction() {
    pizzaChoice = pizzaChoice + 2
    sessionStorage.setItem("pizzaChoice", pizzaChoice)
    location.replace("Question4.html")
}
function deepFunction() {
    pizzaChoice = pizzaChoice + 6
    sessionStorage.setItem("pizzaChoice", pizzaChoice)
    location.replace("Question4.html")
}
function fruitsFunction() {
    location.replace("404.html")
}
function noFruitsFunction() {
    location.replace("Question5.html")
}
function classicFunction() {
    pizzaChoice = pizzaChoice + 4
    sessionStorage.setItem("pizzaChoice", pizzaChoice)
    result();
}
function expFunction() {
    pizzaChoice = pizzaChoice + 12
    sessionStorage.setItem("pizzaChoice", pizzaChoice)
    result();
}
function result() {
    if (pizzaChoice === 8) {
        location.replace("mushroomclassic.html")
    }
    if (pizzaChoice === 9) {
        location.replace("veggiepizza.html")
    }
    if (pizzaChoice === 12) {
        location.replace("mushroomdeep.html")
    }
    if (pizzaChoice === 13) {
        location.replace("veggiedeep.html")
    }
    if (pizzaChoice === 16) {
        location.replace("mushroomexp.html")
    }
    if (pizzaChoice === 17) {
        location.replace("veggieexp.html")
    }
    if (pizzaChoice === 20) {
        location.replace("mushroompepperdeep.html")
    }
    if (pizzaChoice === 21) {
        location.replace("veggiedeepexp.html")
    }
    if (pizzaChoice === 10) {
        location.replace("pepperoni.html")
    }
    if (pizzaChoice === 11) {
        location.replace("sausage.html")
    }
    if (pizzaChoice === 14) {
        location.replace("pepperonideep.html")
    }
    if (pizzaChoice === 15) {
        location.replace("sausagedeep.html")
    }
    if (pizzaChoice === 18) {
        location.replace("pepperoniexp.html")
    }
    if (pizzaChoice === 19) {
        location.replace("sausageexp.html")
    }
    if (pizzaChoice === 22) {
        location.replace("pepperonideepexp.html")
    }
    if (pizzaChoice === 23) {
        location.replace("sausagedeepexp.html")
    }
}

