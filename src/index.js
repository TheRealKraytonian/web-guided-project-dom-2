console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector('#launchButton');
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

// B- MESSAGES
const successMessage = document.querySelector('h1.success')
const failureMessage = document.querySelector('h1.failure')

// C- MODAL
const modal = document.querySelector('.modal')

// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
// launchButton.onclick = function(event) {
//     console.log('a better way than just writing html!')
// }
// launchButton.onclick = function(event) {
//     console.log('using the onclick property')
// }

// //  C- element.addEventListener('click', callback)
// launchButton.addEventListener('click', function(event){
//     console.log('using the event listener')
// })
// launchButton.addEventListener('click', function(event){
//     console.log('using the event listener AGAIN')
// })

document.addEventListener('click', function(event) {
    console.log('clicking the doc')
    if (event.target === launchButton) {
        console.log('you clicked the launch button')
    } else {
        console.log("you clicked not launch button")
    }
})

// (we can also add event listeners to a collection of things)

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.

launchButton.addEventListener('click', function(event) {
    // remove the 'off' classname
    // we have the power!! over the DOM
    modal.classList.remove('off')
    successMessage.classList.add('off')
    failureMessage.classList.add('off')
})


// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function confirm(event) {
    modal.classList.add('off');
    successMessage.classList.remove('off');
}

confirmButton.addEventListener('click', confirm);

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function cancel (event) {
    modal.classList.add('off');
    failureMessage.classList.remove('off');
  }

cancelButton.addEventListener('click', cancel)


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
function escKey (event) {
    // if the event object contains the key 'escape', kill the modal
    if (event.key === "Escape") {
        modal.classList.add('off')
    }
}

document.addEventListener('keydown', escKey)

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.

// ------------------>
// doc html body div btn
// <-----------------

// event capturing
// event bubbling

Array.from(document.all).forEach(elem => 
    elem.addEventListener("click", function(event) {
        console.log("target 🎯      ", event.target)
        console.log("CURRENT target 🧭        ", event.currentTarget)
        console.log("\n")
        event.stopPropagation()
    })
    )


// preventDefault
const navAnchor = document.querySelector('nav a')
navAnchor.addEventListener('click', function(event){
    event.preventDefault()
})

// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
