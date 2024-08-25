const textInputs = document.querySelectorAll('.form-input')

const repaymentWrapper = document.querySelector('[data-option="repayment"]')
const interestWrapper = document.querySelector('[data-option="interest"]')
const formEl = document.querySelector('.left-form')


document.addEventListener('change', (e)=>{
    if(e.target.dataset.option === "repayment" || e.target.id === "repayment"){
        repaymentWrapper.classList.add('active-radio')
        interestWrapper.classList.remove('active-radio')
    }else if(e.target.dataset.option === "interest" || e.target.id === "interest-type"){
        interestWrapper.classList.add('active-radio')
        repaymentWrapper.classList.remove('active-radio')
    }
})

clearActiveInputs()



function clearActiveInputs(){
    for(let i = 0; i < textInputs.length; i++){
        textInputs[i].classList.remove('active-input')
        textInputs[i].nextSibling.nextSibling.classList.remove('active-input-icon')
    }
}

for(let i = 0; i < textInputs.length; i++){
    textInputs[i].addEventListener('focus', e =>{
    
        e.target.classList.add('active-input')
        e.target.nextSibling.nextSibling.classList.add('active-input-icon')
    })
    textInputs[i].addEventListener('focusout', e => {
        clearActiveInputs()
    })
}



document.addEventListener('click', (e)=>{
    if(e.target.className === "form-clear"){
        const radioEls = document.querySelectorAll('.radio-wrapper')
        formEl.reset()
        for(let i = 0; i < radioEls.length; i++){
            let classArr = radioEls[i].className.split(' ')
            if(classArr.includes('active-radio')){
                radioEls[i].classList.remove('active-radio')
            }
            // for(let obj of radioEls[i].classList){
            //     console.log(obj)
            // }
            // if(radioEls[i].classList.includes('active-radio')){
            //     radioEls[i].classList.remove('active-radio')
            // }
        }
    
    
    
    }
    
})
