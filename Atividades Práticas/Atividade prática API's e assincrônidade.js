const URL_base = "https://thatcopy.pw/catapi/rest/";
const catimg = document.getElementById('change-cat');
const catbtn = document.getElementById('cat');


const get_cats = async() => {
    try{
        const data = await fetch(URL_base);
        const json = await data.json();

        return json.webpurl;


    } catch(e) {

        console.log(e.message);

    }

} ;

const loadingimg = async => {
    catimg.src = await get_cats
}

catbtn.addEventListener('click', loadingimg);

loadingimg();