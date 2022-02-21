const form = document.querySelector('.data-info');
const form2 = document.querySelector('.form-info');
//const form2 = document.getElementById('asd');



if (form !=null){
  form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.querySelector(".data-info")),
  })
  alert('Sus datos fueron enviados, en breve un asesor se comunicará con usted')
  form.reset()
}); 
}


if(form2 !=null){
  form2.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form2.action, {
      method : "POST",
      body: new FormData(document.querySelector(".form-info")),
  })

  alert('Sus datos fueron enviados, en breve un asesor se comunicará con usted')
  form2.reset()
});

}

