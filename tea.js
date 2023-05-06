let shop = document.getElementById("products");

let basket = JSON.parse(localStorage.getItem("tea_data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => {
    let { id, name, price, img } = x;
    let search = basket.find((x) => x.id === id) || [];
    return `
        <div class="box" id=${id}>
        <img src=${img} alt=${name}>
        <span>${name}</span>
        <h3 class="price">₹ ${price}</h3>
        <i class='bx bx-cart' onclick="increment(${id})" id="cart"></i>
        <i class='bx bx-heart' onclick="wishlist()" id="wishlist"></i>
    </div>
    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) {
      basket.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
  
    //console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
  };
  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    // document.getElementById(id).innerHTML = search.item;
    calculation();
  };
  
  let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();