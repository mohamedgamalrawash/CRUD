/*
    1- ui vs frontend
    2-js intro 
    3-where to write js(internal ,external ,inline)
    4-o/p method to user ,comment ,semicol
    5-variables  تسمية المتغير لا يبدأ باى رموز ما عدا _ , $
    *** تسمية المتغيرات ***
    userName طريقة كامل   //اول كلمه كلها سمول واى كلمه بعد كدا اول حرف منها كابيتال
    6-data types js   
    -primitive data(string ,number , boolean , null ,undefined)
    -non primitive data  (object)
      === فى نوعين من اللغات ===
      loosle typed        بتسمح انى اغير فى نوع المتغير فى سطر تانى 
      strongly typed       لا تسمح بتغير نوع المتغير ولا القيمه
    7-prompt (alert with input)
    8-logical pathes (if condition)
    = assignment operator
    == comparison operator   (value only)
    === identical orerator   (value and data type)

    orerators %
    && || logical operators
    9-arithmatic operators +,-,*,/
    + arithmatic,concatenation operator  
    10-switch case
    ----------------------------------
    1-loops (for ,while ,do-while)
    2-functions (name faunction is verb )
    3-return statement ,rules
    4-types of functions && hoisting && interview question
    *** types of functions ***
    declaration ,statement (لازم تبدأ ب function)   
    expression   (تبدا باى حاجه غير function)
    فى مبدا اسمه hoisting
    دا ان انا ممكن استدعى الداله قبل كود الداله وتشتغل 
     دى بتحصل فى declaration ,statement

    5-scope
       -var is global always global except inside in function is local
       -let
    6-functional programming language (first class object)
        -function can be assignmed to a variable
        -function can be passed to another function
        -function can be passed from another function
        -function can be property of object

    7-iife(immeditely invoked function expression) تعمل بدون استدعائها
        (function(){
          console.log('hello');
          
        })()
   
    8-object
    9-built-in objects
    10-array
    11-bbuilt in functions in array

    window(BOM:Browser object model) ,document(DOM:document object model) ,screen

    12-CRUD (create retrieve update delete )

*/ 

// window.alert('hello from alert')
// document.getElementById('demo').innerHTML="web development";
// console.log('hello from console');  //for development purpose

// var userName=ni=Number(window.prompt("enter your name"));
// console.log(typeof(userName));

// var employee={
//   name:'nadia',
//   age:29,
//   salary:10225,
//   work:function()
//   {
//     window.alert('nadia working')
//   },
//   child:{  
//     name:'ali',
//     age:2,
//     walk:function(){
//       window.alert('ali walking')
//     }
//   }

// }

//Json.stringify();   دى بتحول الاراى الاوبجكت الى استرنج

// var friends=['ali','ahmed','mona','dina','hager'];
// unshift بتضيف من الاول 
// shift   بتمسح من الاول
// push    بتضيف من الاخر 
// pop     يتمسح من الاخر
// sort    بترتب ترتيب ابجدى 
// splice  بتمسح من اول ما انا بقوله
// friends.reverse(); 
// alert(friends);`

var productNameInput=document.getElementById('productName');
var productPriceInput=document.getElementById('productPrice');
var productCategoryInput=document.getElementById('productCategory');
var productDescInput=document.getElementById('productDesc');
var searchInput=document.getElementById('searchInput')
var addBtn=document.getElementById('addBtn');
var inputs=document.getElementsByClassName('form-control');
var currentIndex=0;


var products=[];

if(products=JSON.parse(localStorage.getItem('productsList')) != null)
{
  products=JSON.parse(localStorage.getItem('productsList'))
  displayData();
}


//local storage, sessionstorage, cookies

//localStorage.setItem('test','hambozo');


addBtn.onclick=function(){
  if(addBtn.innerHTML=='add product'){  //add mode
    addProduct();
  }
  else{   //update mode
    updateProduct();
  }

  displayData(); 
  clearForm();

}
function addProduct(){
  var product=
  {
    name:productNameInput.value,
    price:productPriceInput.value,
    category:productCategoryInput.value,
    desc:productDescInput.value
  }
  products.push(product);
  localStorage.setItem('productsList',JSON.stringify(products));
}
function displayData(){
  var cartona='';
  for(var i=0;i<products.length;i++)
  {
    cartona+=`<tr>
    <td>${products[i].name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].category}</td>
    <td>${products[i].desc}</td>  
    <td><button onclick="getProductInfo(${i})" class="btn btn-outline-warning">update</button></td>
    <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
    </tr>`
  }
  document.getElementById('tableBody').innerHTML=cartona;
}
function deleteProduct(index){
  products.splice(index,1);
  console.log(products);
  displayData();
  localStorage.setItem('productsList',JSON.stringify(products));

}
function clearForm(){
  for(var i=0;i<inputs.length;i++){
    inputs[i].value='';
  }
}

searchInput.onkeyup=function(){
  var cartona='';
  for(var i=0;i<products.length;i++)
  {
    if(products[i].name.toLowerCase().includes(searchInput.value.toLowerCase()))
    {
    cartona+=`<tr>
    <td>${products[i].name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].category}</td>
    <td>${products[i].desc}</td>  
    <td><button onclick="getProductInfo(${i})" class="btn btn-outline-warning" >update</button></td>
    <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
    </tr>`
    }
  }
  document.getElementById('tableBody').innerHTML=cartona;
  
}

function getProductInfo(index){
  currentIndex=index;
  var currentProduct=products[index];
  productNameInput.value=currentProduct.name;
  productPriceInput.value=currentProduct.price;
  productCategoryInput.value=currentProduct.category;
  productDescInput.value=currentProduct.desc;
  addBtn.innerHTML='update product';

} 
function updateProduct(){
  var product=
  {
    name:productNameInput.value,
    price:productPriceInput.value,
    category:productCategoryInput.value,
    desc:productDescInput.value,
  }
  products[currentIndex]=product;
  localStorage.setItem('productsList',JSON.stringify(products));
  
}


  




