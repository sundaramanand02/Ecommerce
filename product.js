const mainImg = document.querySelector('#mainImg');
const smallImg = document.querySelectorAll('.smallImg');

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        mainImg.src = smallImg[i].src;
    }
}

const addbtn = document.querySelector('#addtocart');

addbtn.onclick = (e) => {
    e.preventDefault();
    const number = document.querySelector('#number').value;
    console.log(number);
    // document.querySelector('input[name="item01"]').value = number;
    const added = document.getElementById('pro-add');
    if (number == 1) added.innerHTML = `<h4 style="color:green;">${number} item added</h4>`;
    else added.innerHTML = `<h4 style="color:green;">${number} items added</h4>`;
    setTimeout(() => added.textContent = "", 3000);

}