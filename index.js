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
         .new-element-container {
            position: relative;
            background-color: #a1c6ce;
            padding:0px 10px 10px;
          }
         .second-div{
          display: flex;
        flex-direction: column;
        align-items: center;
            clip-path: polygon(0 34%, 100% 19%, 100% 100%, 0% 100%);
            background-color: #FFFFFF;
            padding:160px 40px 60px;
          }
         .new-element-img{
            position: absolute;
            right: 0px;
            top:0px;
            z-index: 9;
          }
         .second-div p{
            font-family: 'Libre Baskerville',sans-serif;
            font-size: 32px;
            font-weight: 400;
            line-height: 38px;
            letter-spacing: 0em;
            text-align: center;
            color:#003D68;
            padding:40px 0px 0px;
          }
         .second-div input{
            width: 100%;
            background-color: #003D68;
            font-family: 'Roboto';
            font-size: 21px;
            font-weight: 400;
            line-height: 32px;
            letter-spacing: 0em;
            text-align: center;
            color:#FFFFFF;
            margin-top: 10px;
          }
          @media only screen and (max-width:  906px){
            .second-div p{
              font-size: 27px;
              padding:20px 0px 0px;
            }
            .second-div{
              padding:160px 20px 40px;
            }
          }
          @media only screen and (max-width: 749px){
            .small--one-half:nth-child(3){
              width:100%;
            }
            .second-div p{
              font-size: 42px;
              letter-spacing: 1px;
              padding:40px 0px 0px;
            }
            .second-div{
              padding:160px 40px 40px;
            }
          }
          @media only screen and (max-width:  385px){
            .second-div p{
              font-size: 32px;
              letter-spacing: 0rem;
            }
            .second-div{
              padding:160px 20px 40px;
            }
          }
          @media only screen and (max-width:257px){
            .second-div p{
              font-size: 23px;
            }
            .second-div input{
              font-size: 13px;
            }
            .second-div{
              padding:160px 10px 40px;
            }
          }   
  </style>
    `
  );
  //========================< website new element >========================================
  const gridContainer = document.querySelector(".grid--view-items");
  const bodyy = document.querySelector("body");
  const secondElement = gridContainer.querySelector(
    ".medium-up--one-third:nth-child(2)"
  );
  const secondElementClass = secondElement ? secondElement.className : "";
  if (gridContainer) {
    const newElement = document.createElement("div");
    if (newElement) {
      newElement.innerHTML = `
    <div class="new-element-container">
      <img class="new-element-img"
        src="https://conversionadvocates.com/exp-images/lt/lt-011/ca_back.png"
        alt=""
      /> 
      <div class="second-div">
        <p>Learn about our latest offers and promotions!</p>
        <input type="button" value="Sign Me Up" onclick="window.location.href='https://legacytouch.com/pages/email-signup';" />
      </div>   
    </div>
  `;
      newElement.className = secondElementClass;
    }
    const newMobileElement = document.createElement("div");
    if (newMobileElement) {
      newMobileElement.innerHTML = `
    <div class="new-element-container">
      <img class="new-element-img"
        src="https://conversionadvocates.com/exp-images/lt/lt-011/ca_back.png"
        alt=""
      /> 
      <div class="second-div">
        <p>Learn about our latest offers and promotions!</p>
        <input type="button" value="Sign Me Up" onclick="window.location.href='https://legacytouch.com/pages/email-signup';" />
      </div>   
    </div>
  `;
      newMobileElement.className = secondElementClass;
    }
    const checkAndInsertElements = () => {
      if (window.innerWidth <= 749) {
        bodyy.classList.add("mobile");
        // console.log(bodyy.classList);
        if (bodyy.classList.contains("mobile")) {
          newElement.remove();
          gridContainer.insertBefore(
            newMobileElement,
            secondElement.nextSibling
          );
          // console.log("hjashkajkalalkls;al;;assl';a");
        }
      } else {
        bodyy.classList.remove("mobile");
        // console.log(bodyy.classList);
        if (!bodyy.classList.contains("mobile")) {
          newMobileElement.remove();
          gridContainer.insertBefore(newElement, secondElement);
        }
      }
    };
    checkAndInsertElements();

    window.addEventListener("resize", () => {
      checkAndInsertElements();
    });
  } else {
    console.log("Grid container not found.");
  }
}
//========================================================================================
waitForElm(".medium-up--one-third:nth-child(2)").then((elm) => {
  const newEle = document.querySelector(".ca_lt_011");
  if (!newEle) {
    addChanges();
  }
});
