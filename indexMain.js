console.log("hello world")
const divRow = document.querySelector(".div-row")
const PUBLIC_KET = "pk_2057590b78bfaaab6e5dea39ddfaebb9040abc401a23c";
const commerce   = new Commerce(PUBLIC_KET, true)
const fastRow = document.querySelector(".fastRow")
commerce.products.list().then(({data})=>{
console.log(data.madia)
   data.forEach((a)=>{
  
     
        console.log(a.media.source)
    const html = `     
        
    
    
    <div class="col-3 mb-2">
<div style="background-color: white;border-radius: 5px;">
  <img style=" display: block;height:200px;width: 300px;" src="${a.media.source}" alt="..." class="img-thumbnail">
  <div class="">
  <i style="color:#f9a602;" class="far fa-star"></i>
  <i style="color:#f9a602;" class="far fa-star"></i>
  <i style="color:#f9a602;" class="far fa-star"></i>
  <i style="color:#f9a602;" class="far fa-star"></i>
  <i  class="far fa-star"></i>
  <h3 >${a.name}</h3>
  <h4 >${a.price.formatted_with_code}</h4>
  <small>${a. description}</small>
  <div class="row container">
<div class="col-6"><button class="btn w-100 btn-primary">CARD</button></div>
<div class="col-6"><button class="btn w-100 btn-primary">BUY</button></div>

  </div>
</div>
<br>
</div>

  </div>
    
    `

divRow.insertAdjacentHTML("beforeend",html)
    
   })



})
