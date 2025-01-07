// A new feature has been added to the Pro plan: '24/7 Phone support'.
// Add this using JavaScript to the list features of the Pro plan.
const proPlanUl = document.querySelector("#pro-plan ul")
proPlanUl.insertAdjacentHTML("beforeend", "<li>24/7 Phone Support</li>")

// To make the ordering of the plans more logical, using JavaScript,
// move the basic plan to be before (to the left) of the pro plan.
const proPlan = document.querySelector("#pro-plan")
const basicPlan = document.querySelector("#basic-plan")
const parent = basicPlan.parentNode
parent.insertBefore(basicPlan, proPlan)

// To make the Pro plan have a stronger call to action, update the current 'Get started'
// button to be blue (#007bff) with white text and have the text 'Buy Now'
const proBtn = document.querySelector("#pro-plan button")
proBtn.innerText = "Buy now"
proBtn.classList.add("btn-primary")
proBtn.classList.remove("btn-outline-primary")

// There is a special offer on at the moment offering 50% more storage on the Basic plan and 25% more on the Pro plan.
// Update the basic and pro plan cards to reflect the new storage amount being offered.
const proStorageAmount = document.querySelector("#pro-plan .storage-amount")
proStorageAmount.innerText = proStorageAmount.innerText * 1.25
const basicStorageAmount = document.querySelector("#basic-plan .storage-amount")
basicStorageAmount.innerText = basicStorageAmount.innerText * 1.5

// You have been asked to add ask a toggle / radio box for annual and monthly payments for the basic and pro plans.
// Add a radio button to toggle between monthly and annual payment options and adjust the prices shown for both plans
// if the annual option is selected (give two months free if customers pay annually).
const container = document.querySelector(".container")
container.insertAdjacentHTML(
  "afterbegin", 
  `
  <label>
    Montly
    <input id="monthlyPricing" type="radio" name="pricing" value="monthly" checked/>
  </label>

  <label>
    Annual
    <input id="annualPricing" type="radio" name="pricing" value="annual"/>
  </label>
  `
)

const pricing = {
  monthly: {
    basic: "10 / month",
    pro: "30 / month"
  },
  annual: {
    basic: "100 / year",
    pro: "300 / year"
  }
}

const changePricing = (event) => {
  const selection = event.target.value
  const proPricing = document.querySelector("#pro-plan .pricing")
  const basicPricing = document.querySelector("#basic-plan .pricing")

  proPricing.innerText = pricing[selection].pro
  basicPricing.innerText = pricing[selection].basic
}

Array.from(document.querySelectorAll('input[type="radio"]'))
  .forEach(radio => radio.addEventListener('change', changePricing))