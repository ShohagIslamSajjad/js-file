console.log("hello world")
const PUBLIC_KET = "pk_2057590b78bfaaab6e5dea39ddfaebb9040abc401a23c";
const commerce   = new Commerce(PUBLIC_KET, true)
const fastRow = document.querySelector(".fastRow")
commerce.products.list().then(({data,meta})=>{
    data.forEach((b)=>{
        const rowStore = `
    <section class="col-3 p-2">
     
      <div>
      <div>
      <img src"">
      </div>
      </div>

    </section>
        
        
        `
   

    fastRow.insertAdjacentHTML("beforeend",rowStore)
    })
})