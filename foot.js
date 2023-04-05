const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c8a6645594msh467917bc834ddabp15b29ejsne9981e03d876',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
};


let container = document.querySelector(".container");


fetch('https://api-football-v1.p.rapidapi.com/v3/timezone', options)
    .then(response => response.json())
    .then(response => {

        console.log(response);

        // container.innerHTML += `
        //         <div class="card">

        //             <div>
        //                   <h3>${}</h3>
        //             </div>

        //             <div>
        //                 <h3>${}</h3>
        //             </div>

        //         </div>
        //     `;
    })

    .catch(err => console.error(err));




