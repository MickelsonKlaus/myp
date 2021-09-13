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