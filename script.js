const radioWrapper = document.querySelector('.radio-wrapper')

const repaymentWrapper = document.querySelector('[data-option="repayment"]')
const interestWrapper = document.querySelector('[data-option="interest"]')


document.addEventListener('change', (e)=>{
    if(e.target.dataset.option === "repayment" || e.target.id === "repayment"){
        repaymentWrapper.classList.add('active-radio')
        interestWrapper.classList.remove('active-radio')
    }else if(e.target.dataset.option === "interest" || e.target.id === "interest-type"){
        interestWrapper.classList.add('active-radio')
        repaymentWrapper.classList.remove('active-radio')
    }
})


