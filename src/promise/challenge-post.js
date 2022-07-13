import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data)
{
    const response = fetch(urlApi, 
    {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers:
        {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Sofa NFT",
    "price": 9999999,
    "description": "Willyrex: Ha oido habla sobre lo nft?",
    "categoryId": 3,
    "images": [
        "https://i.imgur.com/ceVYF9m.png"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))