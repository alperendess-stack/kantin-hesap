let cart = {};
const $ = id => document.getElementById(id);

function money(v){return v.toFixed(2)+" ₺"}

function render(list=products){
 const box=$("products");
 box.innerHTML="";
 list.forEach(p=>{
  let div=document.createElement("div");
  div.className="product";
  div.innerHTML=`<b>${p.name}</b><div class="price">${money(p.price)}</div><button>+</button>`;
  div.onclick=e=>add(p,div);
  box.appendChild(div);
 });
}

function add(p,card){
 if(!cart[p.id]) cart[p.id]={...p,qty:0};
 cart[p.id].qty++;
 card.classList.remove("flash");
 void card.offsetWidth;
 card.classList.add("flash");
 showPlus(card);
 toast(`✔️ ${p.name} eklendi`);
 if(navigator.vibrate) navigator.vibrate(15);
 renderCart();
}

function showPlus(card){
 const el=document.createElement("span");
 el.className="float-plus";
 el.textContent="+1";
 card.appendChild(el);
 setTimeout(()=>el.remove(),700);
}

function toast(text){
 const old=document.querySelector(".toast");
 if(old) old.remove();
 const el=document.createElement("div");
 el.className="toast";
 el.textContent=text;
 document.body.appendChild(el);
 setTimeout(()=>el.remove(),1800);
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
 c.innerHTML+=`<div class="cart-item"><span>${p.name}<br>${p.qty} adet</span><div class="controls"><button onclick="change(${p.id},-1)">-</button><button onclick="change(${p.id},1)">+</button></div></div>`;
 });
 const totalEl=$("total");
 const changed=totalEl.textContent!==money(total);
 totalEl.textContent=money(total);
 if(changed){totalEl.classList.remove("bump");void totalEl.offsetWidth;totalEl.classList.add("bump")}
 $("count").textContent=count+" ürün";
}

$("search").oninput=e=>{
 let q=e.target.value.toLocaleLowerCase("tr");
 render(products.filter(p=>p.name.toLocaleLowerCase("tr").includes(q)));
};

$("clear").onclick=()=>{
 if(confirm("Borç sıfırlansın mı?")){cart={};renderCart();}
};

render();
