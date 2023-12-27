//=<  Waits for the specified element to be present in the document and resolves with it>
function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  });
}
//=======================< function add changes >========================================
function addChanges() {
  const body = document.querySelector("body");
  if (body.classList.contains("ca_lt_011")) {
    return;
  }
  body.classList.add("ca_lt_011");
  document.querySelector("head").insertAdjacentHTML(
    "beforeend",
    `
    <style>
    @import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap);.second-div a,.second-div p{font-weight:400;letter-spacing:0;text-align:center}.new-element-container{position:relative;background-color:#a1c6ce;padding:0 10px 10px}.second-div{display:flex;flex-direction:column;align-items:center;clip-path:polygon(0 34%,100% 19%,100% 100%,0% 100%);background-color:#fff;padding:160px 40px 50px}.new-element-img{position:absolute;right:0;top:0;z-index:9;max-width:250px}.second-div p{font-family:"Libre Baskerville",serif;font-size:32px;line-height:38px;color:#003d68;padding:40px 0 20px;margin:0}.second-div p br{display:none}.second-div a{width:100%;background-color:#003d68;font-family:Roboto;font-size:21px;line-height:32px;color:#fff;padding:10px;transition:.2s ease-in-out}.second-div a:hover{opacity:.85}@media (max-width:1000px){.second-div p{font-size:21px;line-height:27px}.second-div{padding:160px 10px 40px}.new-element-img{max-width:215px}}@media (max-width:749px){#Collection .grid.grid--uniform.grid--view-items{display:flex;flex-wrap:wrap}#Collection .grid.grid--uniform.grid--view-items>div.grid__item{order:4}#Collection .grid.grid--uniform.grid--view-items>div.grid__item:first-child{order:1}#Collection .grid.grid--uniform.grid--view-items>div.grid__item:nth-child(2){order:3}#Collection .grid.grid--uniform.grid--view-items>div.grid__item:nth-child(3){order:2}#Collection .grid.grid--uniform.grid--view-items>div.grid__item.ca_lt_011_signup{width:100%}.second-div p{font-size:22px;line-height:30px}.second-div p br{display:block}.second-div{padding:160px 20px 30px}.new-element-img{max-width:230px}}@media (max-width:400px){.second-div p{font-size:19px;line-height:24px;letter-spacing:0}.second-div{padding:143px 10px 40px}}@media (max-width:335px){.second-div p{font-size:17px;line-height:22px}}
    </style>
    `
  );
  //========================< website new element >========================================
  const gridContainer = document.querySelector(".grid--view-items");
  const secondElement = gridContainer.querySelector(
    ".medium-up--one-third:nth-child(2)"
  );
  const secondElementClass = secondElement ? secondElement.className : "";
  if (gridContainer) {
    const newElement = document.createElement("div");

    newElement.innerHTML = `
      <div class="new-element-container">
        <img class="new-element-img"
          src="https://conversionadvocates.com/exp-images/lt/lt-011/ca_back.png"
          alt=""
        /> 
        <div class="second-div">
          <p>Learn about our latest <br>offers and promotions!</p>
          <a href="https://legacytouch.com/pages/email-signup">Sign Me Up</a>
        </div>
      </div>
    `;

    newElement.className = secondElementClass;
    newElement.classList.add("ca_lt_011_signup");

    gridContainer.insertBefore(newElement, secondElement);
  }
}
//========================================================================================
waitForElm(".medium-up--one-third:nth-child(2)").then((elm) => {
  const newEle = document.querySelector(".ca_lt_011");
  if (!newEle) {
    addChanges();
  }
});
