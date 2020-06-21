import "./styles/style.css";

const konten = document.querySelector('.view');

// if you want to custom page : const url = "https://api.pexels.com/v1/search?query=nature&page=1";
const url = "https://api.pexels.com/v1/search?query=";
const headerOption = {
    headers: {
        'Authorization': '563492ad6f91700001000001561aadc5a7564c339f788b9f06fc104b'
    }
};

const keyword = document.getElementById('keyword');
document.querySelector('button').addEventListener('click', (e) => {
    if (keyword.value) {
        fetch(url + keyword.value, headerOption)
            .then(res => res.json())
            .then(data => {
                konten.innerHTML = '';
                data.photos.forEach((val, key) => {
                    konten.innerHTML += `
                    <div>
                        <img src="${val.src.original}" /> <br>by : ${val.photographer}
                    </div>
                    `;
                })
            })
            .catch(err => console.error(err));
    }
}, false);


//  lifecycle component 

class AppBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h1>&#128527; Photopie</h1>`;
    }
}

customElements.define("app-bar", AppBar);



// <h1>&#128527; Photopie</h1>