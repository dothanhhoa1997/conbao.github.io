const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/con-bao.jpg") {
    myImage.setAttribute("src", "images/con-bao-2.jpg");
  } else {
    myImage.setAttribute("src", "images/con-bao.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Vui lòng nhập tên bạn.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Xin chào Báo, ${myName}`;
  }

  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Xin chào Báo ${storedName}`;
  }

  
  myButton.onclick = () => {
    setUserName();
  };
  

  function setUserName() {
    const myName = prompt("Vui lòng nhập tên bạn.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Xin chào Báo ${myName}`;
    }
  }
  