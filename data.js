function __main__() {
  port = 3000;
  host = "localhost";
}

const myInput = document.getElementById("myInput");
myInput.addEventListener("change", () => {
  console.log(myInput.value);
});
const _bool = 0;
var publicData = [
  {
    id: 1,
    Image: "./assets/img/content-img.jpg",
    title: "Title 1",
    content: "aaacc",
  },
  {
    id: 2,
    Image: "./assets/img/content-img.jpg",
    title: "Title 2",
    content: "bcc",
  },
  {
    id: 3,
    Image: "./assets/img/content-img.jpg",
    title: "Title 3",
    content: "bcc",
  },
  {
    id: 4,
    Image: "./assets/img/content-img.jpg",
    title: "Title 4",
    content: "bcc",
  },
  {
    id: 5,
    Image: "./assets/img/content-img.jpg",
    title: "Title 5",
    content: "bcc",
  },
  {
    id: 6,
    Image: "./assets/img/content-img.jpg",
    title: "Title 6",
    content: "bcc",
  },
  {
    id: 7,
    Image: "./assets/img/content-img.jpg",
    title: "Title 7",
    content: "bcc",
  },
  {
    id: 8,
    Image: "./assets/img/content-img.jpg",
    title: "Title 8",
    content: "pas",
  },
];

var privateData = [
  {
    id: 1,
    Image: "./assets/img/private-img.jpg",
    title: "private 1",
    content: "private1",
  },
  {
    id: 2,
    Image: "./assets/img/private-img.jpg",
    title: "private 2",
    content: "private2",
  },
  {
    id: 3,
    Image: "./assets/img/private-img.jpg",
    title: "private 3",
    content: "private3",
  },
  {
    id: 4,
    Image: "./assets/img/private-img.jpg",
    title: "private 4",
    content: "private4",
  },
  {
    id: 5,
    Image: "./assets/img/private-img.jpg",
    title: "private 5",
    content: "private5",
  },
  {
    id: 6,
    Image: "./assets/img/private-img.jpg",
    title: "private 6",
    content: "private6",
  },
  {
    id: 7,
    Image: "./assets/img/private-img.jpg",
    title: "private 7",
    content: "private7",
  },
  {
    id: 8,
    Image: "./assets/img/private-img.jpg",
    title: "private 8",
    content: "private8",
  },
];

// Map
var publicContainer = document.getElementById("public-container");
publicContainer.innerHTML = publicData
  .map((data) => {
    return `
  <div class="tab-content-icon-item">
    <img src="${data.Image}" alt="" class="content-icon-img"/>
    <h5 class="icon-heading">${data.title}</h5>
    <p class="public-content">${data.content}</p> 
  </div>
</div>
  `;
  })
  .join("");

var privateContainer = document.getElementById("private-container");
privateContainer.innerHTML = privateData
  .map((data) => {
    return `
  <div class="private-content-item">
    <img src="${data.Image}" alt="" class="private-img"/>
    <h5 class="private-heading">${data.title}</h5>
    <p class="private-content">${data.content}</p>
  </div>
</div>
  `;
  })
  .join("");
const iconContainer = document.querySelector(".tab-content");
const sortIconButton = document.querySelector(".sort-icon");
const sortListButton = document.querySelector(".sort-list");
const text = 0;
// Hàm hiển thị các icon theo hàng ngang
function showIconsHorizontal() {
  iconContainer.classList.add("horizontal");
  iconContainer.classList.remove("vertical");
  publicContainer.innerHTML = publicData
    .map((data) => {
      return `
  <div class="tab-content-icon-item">
    <img src="${data.Image}" alt="" class="content-icon-img"/>
    <h5 class="icon-heading">${data.title}</h5>
    <p class="public-content">${data.content}</p>
  </div>
</div>
  `;
    })
    .join("");

  privateContainer.innerHTML = privateData
    .map((data) => {
      return `
  <div class="private-content-item">
    <img src="${data.Image}" alt="" class="private-img"/>
    <h5 class="private-heading">${data.title}</h5>
    <p class="private-content">${data.content}</p>   
  </div>
</div>
  `;
    })
    .join("");
}

// Hàm hiển thị các icon theo hàng dọc
function showIconsVertical() {
  iconContainer.classList.add("vertical");
  iconContainer.classList.remove("horizontal");
  const iconItems = document.querySelectorAll(".tab-content-icon-item");
  const image = document.querySelectorAll(".tab-content-icon-item img");
  const iconheading = document.querySelectorAll(".icon-heading");
  const publicContent = document.querySelectorAll(".public-content");

  const privateItem = document.querySelectorAll(".private-content-item");
  const privateImg = document.querySelectorAll(".private-content-item img");
  const privateHeading = document.querySelectorAll(".private-heading");
  const privateContent = document.querySelectorAll(".private-content");

  iconItems.forEach((item) => {
    item.style.width = "1400px";
    item.style.height = "60px";
  });
  iconheading.forEach((item) => {
    item.style.marginLeft = "65px";
    item.style.marginTop = "-50px";
  });
  image.forEach((item) => {
    item.style.width = "50px";
    item.style.height = "50px";
    item.style.marginTop = "-5px";
    item.style.border = "5px solid #e5e5e5";
  });
  publicContent.forEach((item) => {
    item.style.marginLeft = "65px";
  });

  privateItem.forEach((item) => {
    item.style.width = "1400px";
    item.style.height = "60px";
  });
  privateHeading.forEach((item) => {
    item.style.marginLeft = "65px";
    item.style.marginTop = "-50px";
  });
  privateImg.forEach((item) => {
    item.style.width = "50px";
    item.style.height = "50px";
    item.style.marginTop = "-5px";
    item.style.border = "5px solid #e5e5e5";
  });
  privateContent.forEach((item) => {
    item.style.marginLeft = "65px";
  });
}

// click "sort-icon"
sortIconButton.addEventListener("click", () => {
  showIconsHorizontal();
  var isContentIsVisible = true;
  isContentIsVisible = !isContentIsVisible;
});

// click "sort-list"
sortListButton.addEventListener("click", () => {
  showIconsVertical();
});

//filter;
var searchInput = document.querySelector("#myInput");
searchInput.addEventListener("input", function (e) {
  let txtSearch = e.target.value.trim();
  let listPublicDOM = document.querySelectorAll(".tab-content-icon-item");
  listPublicDOM.forEach((item) => {
    if (item.innerText.includes(txtSearch)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
  let listPrivateDOM = document.querySelectorAll(".private-content-item");
  listPrivateDOM.forEach((item) => {
    if (item.innerText.includes(txtSearch)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});

//event tab
var privateContainer = document.getElementById("private-container");
var publicContainer = document.getElementById("public-container");
const publicButton = document.querySelector(".public");
const privateButton = document.querySelector(".private");

privateButton.onclick = () => {
  privateContainer.style.display = "flex";
  publicContainer.style.display = "none";
  privateButton.classList.add("active");
  publicButton.classList.remove("active");
};
publicButton.onclick = () => {
  privateContainer.style.display = "none";
  publicContainer.style.display = "flex";
  privateButton.classList.remove("active");
  publicButton.classList.add("active");
};
