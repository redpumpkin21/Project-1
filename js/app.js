
    
const projects = $(".projects")
$.ajax("./json/projects.json")
    .then((data) => {
        data.forEach((projects) => {
        const $div = $("<div  class='carousel-item'> ")
        $div.html(`
        <h3>${projects.title}</h3>
        <p>${projects.description}</p>
        
        <a href= ${projects.url}><img src= ${projects.image}> </a>`)

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
    window.open('https://drive.google.com/file/d/1ziX7qCm-XjDmpVvqmUpA5yxT51UzaoEP/view?ths=true','mywin','width=500,height=500')

    })

$('.social1').click((git) => {
    window.open("https://github.com/redpumpkin21")
})
$('.social2').click((linked) => {
    window.open('https://www.linkedin.com/in/christopher-johnson-200b38214/')
})

    
    


const $div = $('<div>').attr('class', 'carousel-item active carousel-item-center')
$('.carousel-inner').append($div)
const $img = ("<img>")
$('div.active').append('<img id="theImg" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/51481961_107610580370434_2485940578596945920_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=sMw64w0tO7oAX_kLoqC&tn=zuNdKbSVZjCTUeWY&_nc_ht=scontent-iad3-1.xx&oh=226e772ff880550768c430508d2b7935&oe=60F45767" />')
$('div.active').prepend("<p> <h8>Come with me and you'll be in a world of pure imagination</h8></p>")
$('div.active').prepend('<h3>Me</h3>')
