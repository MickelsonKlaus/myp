let nav = document.querySelector("nav");

window.addEventListener("scroll", () =>{
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        nav.style.background = "#2C81CD"
    }
    else{
        nav.style.background = "none"
    }
})

//links
let links = document.querySelectorAll("nav ul li a")

links.forEach(link =>{
    link.addEventListener("click", (e)=>{
        e.preventDefault()
        let id = e.currentTarget.hash
        let element = document.querySelector(id)
        let height = nav.getBoundingClientRect().height;
        let position = element.offsetTop
        
        window.scrollTo(0, (position - height))
    })
})

//faqs
let questions = document.querySelectorAll(".q");
questions.forEach(question =>{
    let title = question.firstElementChild.getBoundingClientRect().height;

    question.style.height = `${title}px`
    question.addEventListener("click", () =>{
        let last = question.lastElementChild.getBoundingClientRect().height;

        let span = question.firstElementChild.firstElementChild
        
        if(question.getBoundingClientRect().height > title){
            span.innerHTML = "+"
            question.style.height = `${title}px`
        }
        else{
            span.innerHTML = "-"
            question.style.height = `${title + last}px`
        }
    })
})

//email
let forms = document.querySelectorAll("form")

forms.forEach(form => {
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        let data = new FormData(form)
        let values = [...data.values()]
        
        let link = document.createElement("a")
        link.href = `mailto:mryoungplumbingltd229@gmail.com?subject=Request Job Estimate&body=name: ${values[0]}; address: ${values[1]}; phone-number: ${values[2]}; service: ${values[3]}`
        
        link.click()
    
        let inputs = document.querySelectorAll("form input");
    
        inputs.forEach(input =>{
            input.value = ""
        })
    })
})
