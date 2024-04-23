var i = 0 // Start Image
let slide = document.getElementById("slide")
let right = document.getElementById("right")
let left = document.getElementById("left")
let imgArray = [
    'https://i.pinimg.com/236x/bb/f8/dd/bbf8ddeaebae32c3fe7a56b37b0e7979.jpg',
    'https://i.pinimg.com/236x/0a/7e/ec/0a7eeca2f2bfc812b18f52232951e931.jpg',
    'https://i.pinimg.com/236x/91/b6/57/91b657a785ed815d50506824b033072a.jpg',
    'https://i.pinimg.com/236x/48/c9/5f/48c95f0a3cb53048c242c7465d05bf7d.jpg'
]
let time = 3000

slide.src = imgArray[i]

right.addEventListener("click", () => {
    slide.src = imgArray[i];
    i++;
    if(i >= imgArray.length) i = 0;
})

left.addEventListener("click", () => {
    slide.src = imgArray[i];
    i--;
    if(i < 0) i = imgArray.length - 1;
})

console.log(i)