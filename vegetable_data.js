let shopItemsData = [
    {
      id: "potato",
      name: "Potato",
      price: 30,
      img: "images/vegetable/potato.avif",
    },
    {
        id: "tomato",
        name: "Tomato",
        price: 50,
        img: "images/vegetable/tomato.avif",
      },
    {
        id: "onion",
        name: "Onion",
        price: 42,
        img: "images/vegetable/onion.avif",
    },
    {
        id: "lemon",
        name: "Lemon",
        price: 5,
        img: "images/vegetable/lemon.avif",
    },
    {
        id: "beetroot",
        name: "Beetroot",
        price: 85,
        img: "images/vegetable/beetroot.avif",
    },
    {
      id: "broccoli",
      name: "Broccoli",
      price: 200,
      img: "images/vegetable/broccoli.avif",
    },
    {
      id: "cabbage",
      name: "Cabbage",
      price: 30,
      img: "images/vegetable/cabbage.avif",
    },
    {
      id: "cauliflower",
      name: "Cauliflower",
      price: 30,
      img: "images/vegetable/cauliflower.avif",
    },
    {
      id: "Garlic",
      name: "garlic",
      price: 40,
      img: "images/vegetable/garlic.avif",
    },
    {
      id: "ginger",
      name: "Ginger",
      price: 40,
      img: "images/vegetable/ginger.avif",
    },
  ];


//             <div class="box">
//                 <img src="images/vegetable/green chili.avif" alt="potato">
//                 <span>Green Chili</span>
//                 <h3 class="price">₹20<span>/100g</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Uchhe.avif" alt="potato">
//                 <span>Uchhe</span>
//                 <h3 class="price">₹20<span>/200g</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/mushroom.avif" alt="potato">
//                 <span>Mushroom</span>
//                 <h3 class="price">₹75<span>/200g</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/raw banana.avif" alt="potato">
//                 <span>Raw Banana</span>
//                 <h3 class="price">₹80<span>/5 piece</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/potol.avif" alt="potato">
//                 <span>Potol</span>
//                 <h3 class="price">₹40<span>/kg</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/pumpkin.avif" alt="potato">
//                 <span>Pumpkin</span>
//                 <h3 class="price">₹30<span>/kg</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Kimia Dates - Packet (Khajur).avif" alt="potato">
//                 <span>Kimia Dates</span>
//                 <h3 class="price">₹200<span>/500g</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Rose Flower Petals (Golap).avif" alt="potato">
//                 <span>Rose Flower</span>
//                 <h3 class="price">₹15<span>/piece</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Banana (Kela).avif" alt="potato">
//                 <span>Banana</span>
//                 <h3 class="price">₹21<span>/3 piece</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Dragon Fruit.avif" alt="potato">
//                 <span>Dragon Fruit</span>
//                 <h3 class="price">₹180<span>/piece</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Pomegranate (Bedana).avif" alt="potato">
//                 <span>Pomegranate</span>
//                 <h3 class="price">₹150<span>/2 piece</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Fuji Apple.avif" alt="potato">
//                 <span>Fuji Apple</span>
//                 <h3 class="price">₹200<span>/4 piece</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Blueberry.avif" alt="potato">
//                 <span>Blueberry</span>
//                 <h3 class="price">₹290<span>/100g</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Orange - Imported.avif" alt="potato">
//                 <span>Orange</span>
//                 <h3 class="price">₹130<span>/500g</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Corn Cob (Bhutta).avif" alt="potato">
//                 <span>Corn</span>
//                 <h3 class="price">₹20<span>/piece</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Radish.avif" alt="potato">
//                 <span>Radish</span>
//                 <h3 class="price">₹70<span>/500g</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Spinach (Palak).avif" alt="Palak">
//                 <span>Spinach (Palak)</span>
//                 <h3 class="price">₹30<span>/200g</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Fenugreek (Methi).avif" alt="potato">
//                 <span>Fenugreek (Methi)</span>
//                 <h3 class="price">₹80<span>/250g</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Groundnut.avif" alt="potato">
//                 <span>Groundnut</span>
//                 <h3 class="price">₹90<span>/500g</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>

//             <div class="box">
//                 <img src="images/vegetable/Raw Turmeric (Gudo Holud).avif" alt="potato">
//                 <span>Raw Turmeric</span>
//                 <h3 class="price">₹30<span>/250g</span>
//                     <h3>
//                         <i class='bx bx-cart'></i>
//                         <i class='bx bx-heart'></i>
//             </div>