const myInput = document.getElementById("myInput");
myInput.addEventListener("change", () => {
  console.log(myInput.value);
});

const public = [
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

const myContent = document.querySelector(".tab-content");

const showInHtml = public.map((project, index) => {
  return `
                  <div class="tab-content-icon-item">
                  <img src=${project.Image} alt="" class="content-icon-img"/>
                  <h5 class="icon-heading"> ${project.title}</h5>
                  <div id="hide">
                    <p class="content">${project.content}</p>
                  </div>
                </div> `;
});

myContent.innerHTML = showInHtml;
const iconContainer = document.querySelector(".tab-content");
const sortIconButton = document.querySelector(".sort-icon");
const sortListButton = document.querySelector(".sort-list");

// Hàm hiển thị các icon theo hàng ngang
function showIconsHorizontal() {
  iconContainer.classList.add("horizontal");
  iconContainer.classList.remove("vertical");

  const showInHtml = public.map((project, index) => {
    return `

                  <div class="tab-content-icon-item">
                    <img src=${project.Image} alt="" class="content-icon-img"/>
                    <h5 class="icon-heading"> ${project.title}</h5>
                  <p class="content">${project.content}</p>
                  </div> `;
  });

  myContent.innerHTML = showInHtml;
}

// Hàm hiển thị các icon theo hàng dọc
function showIconsVertical() {
  iconContainer.classList.add("vertical");
  iconContainer.classList.remove("horizontal");
  const iconItems = document.querySelectorAll(".tab-content-icon-item");
  const image = document.querySelectorAll(".tab-content-icon-item img");
  const iconheading = document.querySelectorAll(".icon-heading");

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
}

// click "sort-icon"
sortIconButton.addEventListener("click", () => {
  showIconsHorizontal();
});

// click "sort-list"
sortListButton.addEventListener("click", () => {
  showIconsVertical();
});

//filter
var searchInput = document.querySelector("#myInput");
searchInput.addEventListener("input", function (e) {
  let txtSearch = e.target.value.trim();
  let listProductDOM = document.querySelectorAll(".tab-content-icon-item");
  listProductDOM.forEach((item) => {
    // console.log(item.innerText);
    if (item.innerText.includes(txtSearch)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});
