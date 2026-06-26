let cart = {};
const $ = id => document.getElementById(id);

function money(v){return v.toFixed(2)+" ₺"}

function render(list=products){
 const box=$("products");
 box.innerHTML="";
 list.forEach(p=>{
  let div=document.createElement("div");
  div.className="product";
  div.innerHTML=`
  <b>${p.name}</b>
  <div class="price">${money(p.price)}</div>
  <button>+</button>`;
  div.onclick=e=>{add(p);};
  box.appendChild(div);
 });
}

function add(p){
 if(!cart[p.id]) cart[p.id]={...p,qty:0};
 cart[p.id].qty++;
 renderCart();
}

function change(id,v){
 cart[id].qty+=v;
 if(cart[id].qty<=0) delete cart[id];
 renderCart();
}

function renderCart(){
 let c=$("cart"),total=0,count=0;
 c.innerHTML="";
 Object.values(cart).forEach(p=>{
 total+=p.price*p.qty; count+=p.qty;
 c.innerHTML+=`
 <div class="cart-item">
 <span>${p.name}<br>${p.qty} adet</span>
 <div class="controls">
 <button onclick="change(${p.id},-1)">-</button>
 <button onclick="change(${p.id},1)">+</button>
 </div></div>`;
 });
 $("total").textContent=money(total);
 $("count").textContent=count+" ürün";
}

$("search").oninput=e=>{
 let q=e.target.value.toLocaleLowerCase("tr");
 render(products.filter(p=>p.name.toLocaleLowerCase("tr").includes(q)));
};

$("clear").onclick=()=>{
 if(confirm("Borç sıfırlansın mı?")){
 cart={};
 renderCart();
 }
};

render();
