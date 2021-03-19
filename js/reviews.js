
// array of reviews
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// get dom elements
const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
let currentIndex = 0;

// set the dom elements whem they are loaded
// load the current review
window.addEventListener("DOMContentLoaded", function () {
  const reviewItem = reviews[currentIndex];
  img.src = reviewItem.img;
  author.textContent = reviewItem.name;
  job.textContent = reviewItem.job;
  info.textContent = reviewItem.text;
});

//fn to show review, passing in the index for the reviews array
function showReview(review) {
  const reviewItem = reviews[review];
  img.src = reviewItem.img;
  author.textContent = reviewItem.name;
  job.textContent = reviewItem.job;
  info.textContent = reviewItem.text;
}

// previous button clicked event
// reduce the currentIndex by 1
// if the currentIndex is less than 0, set the currentIndex to the last index of the array

prevBtn.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = reviews.length - 1;
  }
  showReview(currentIndex);
});

// next button clicked event
// increase the currentIndex by 1
// if the currentIndex is greater than than the array lenght, set the current index to 0
nextBtn.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex > reviews.length - 1) {
    currentIndex = 0;
  }
  showReview(currentIndex);
});

// select a random review
randomBtn.addEventListener("click", function () {
  currentIndex = Math.floor(Math.random() * reviews.length);
  showReview(currentIndex);
});
