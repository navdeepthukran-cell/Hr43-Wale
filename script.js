// HR43 Wale Website Script

// Reveal animation on scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

cards.forEach(card=>{
    observer.observe(card);
});

// Navbar background on scroll
window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>50){
        nav.style.background="rgba(0,0,0,0.92)";
        nav.style.boxShadow="0 8px 20px rgba(0,0,0,.35)";
    }
    else{
        nav.style.background="rgba(0,0,0,.75)";
        nav.style.boxShadow="none";
    }

});
