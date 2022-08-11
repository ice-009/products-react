import React,{useState} from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {


  return (
    <>
    <div className="App">
      <SearchBar placeholder="Enter a Procuct Name..." data={BookData} />
      <div class="cards-list">
  
<div class="card 1">
  <div class="card_image"> <img src="" /> </div>
  <div class="card_title title-white">
    <p>Card Title</p>
  </div>
</div>

  <div class="card 2">
  <div class="card_image">
    <img src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg" />
    </div>
  <div class="card_title title-white">
    <p>Card Title</p>
  </div>
</div>

<div class="card 3">
  <div class="card_image">
    <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
  </div>
  <div class="card_title">
    <p>Card Title</p>
  </div>
</div>
  
  <div class="card 4">
  <div class="card_image">
    <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
    </div>
  <div class="card_title title-black">
    <p>Card Title</p>
  </div>
  </div>

</div>
    </div>

  
    </>
  );
}

export default App;
