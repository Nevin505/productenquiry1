function Open(){
  
    localStorage.setItem("uname",d1.value)

    window.location="products.html"
}

s1.innerHTML=localStorage.getItem("uname")


function addProducts(){
    pro1={ Productname:pname.value,
        Id:pid.value,
        price:pprice.value,
        stoks:pstocks.value
    }
    if(pro1.Id in localStorage){
        alert("its already present enter different id")
    }
    else{
    localStorage.setItem(pro1.Id,JSON.stringify(pro1))

    }

}
function products(){
    window.location="home.html"

}
function Search(){
    var1=s1.value
    if(var1 in localStorage){
        e1=JSON.parse(localStorage.getItem(var1))
        Result.innerHTML=`<p class="text-info text-center">Product Name:${e1.Productname}</p>
        <p class="text-info text-center ">Products Id:${e1.Id}</p>
        <p class="text-info text-center ">Product Price:${e1.price}</p>
        <p class="text-info text-center "> Current Stock Prsent:${e1.stoks}</p>`
    }
    else{
        Result.innerHTML=`NO DATA IS FOUND  `
        alert("Wrong ")
    }
}
function logout(){
    
    localStorage.removeItem("uname")
    window.location="index.html"
    alert(`the user logouted ${d1.value}`)
   
}