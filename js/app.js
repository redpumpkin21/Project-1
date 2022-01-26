
    
const projects = $(".projects")
$.ajax("./json/projects.json")
    .then((data) => {
        data.forEach((projects) => {
        const $div = $("<div  class='carousel-item'> ")
        $div.html(`
        <h3>${projects.title}</h3>            
        <a href= ${projects.url} target="_blank"><img src= ${projects.image}> </a>
        <p class="description">${projects.description}</p> 
        <a href= ${projects.github} target="_blank"><p>Github</p> </a>

        `)

        $('.carousel-inner').append($div)
        // $(div).find('.carousel-item').eq(1).addClass('active')
        })
    })
    let form = document.getElementById("my-form");
        
    async function handleSubmit(event) {
      event.preventDefault();
      let status = document.getElementById("my-form-status");
      let data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

    $('.carousel').carousel({
        interval: false,
      });




$('#resume').click((pdf) => {
    window.open('https://docs.google.com/viewer?url=https://docs.google.com/document/d/1PAgK0Ajap4C0xnSVUjK9LLSeboZJcMOc3J8t7MgECes/export?format=pdf','mywin','width=500,height=500')
    })

$('.social1').click((git) => {
    window.open("https://github.com/redpumpkin21")
})
$('.social2').click((linked) => {
    window.open('https://www.linkedin.com/in/christopher-code-johnson/')
})

    
    


const $div = $('<div>').attr('class', 'carousel-item active carousel-item-center')
$('.carousel-inner').append($div)
const $img = ("<img>")
$('div.active').append('<img id="theImg" src="https://res.cloudinary.com/dx3a3l6k0/image/upload/v1641422294/6F754EF0-CFD7-47CD-A9DC-D4D968A7C229_1_102_o_crbx1p.jpg" />')
$('div.active').prepend("<p> <h8>Software Engineer</h8></p>")
$('div.active').prepend('<h3>Christopher Johnson</h3>')

