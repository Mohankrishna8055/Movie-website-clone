let movies =[

    {
        MovieName: "Split",
        RealeaseYear : "2020",
        Rating :7.1,
        poster:"https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-split-700x1082.jpg",
        src:"https://www.youtube-nocookie.com/embed/84TouqfIsiI?si=dqcLKQjoc2D5x0u8"
    },
    {
        MovieName: "Cars 3",
        RealeaseYear : "2006",
        Rating :8.5,
        poster:"https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-cars3-700x1037.jpg",
        src:"https://www.youtube-nocookie.com/embed/ZuaseSovWDY?si=75_Y6Xb0oVGUV08G"
    },
    {
        MovieName: "Justice Leauge",
        RealeaseYear : "2005",
        Rating :7.4,
        poster:"https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-justiceleague-700x1038.jpg",
        src:"https://www.youtube-nocookie.com/embed/oTXrl8H6luI?si=mSAaUaKHxOtYwbFW"
    },
    {
        MovieName: "Blade Runner",
        RealeaseYear : "2012",
        Rating :6.1,
        poster:"https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-bladerunner2049-700x1038.jpg",
        src:"https://www.youtube-nocookie.com/embed/dZOaI_Fn5o4?si=y9BC4zqG9bt0qMRZ"
    },
    {
        MovieName: "Star Wars",
        RealeaseYear : "2016",
        Rating :7.1,
        poster:"https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-starwarslastjedi-700x1038.jpg",
        src:"https://www.youtube-nocookie.com/embed/sGbxmsDFVnE?si=8ZD80cDH1XZT9Yij"
    },
    {
        MovieName: "Thor ",
        RealeaseYear : "2021",
        Rating :9.1,
        poster:"https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-thorragnarok-700x1038.jpg",
        src:"https://www.youtube-nocookie.com/embed/JOddp-nlNvQ?si=i2OeNyKKC17NnHrO"
    },
    {
        MovieName: "Zombie reddy",
        RealeaseYear : "2021",
        Rating :8.1,
        poster:"https://i0.wp.com/chitrambhalare.in/wp-content/uploads/2020/10/Zombie-Reddy-telugu-movie-first-look-poster.jpg?w=723&ssl=1",
        src:"https://www.youtube-nocookie.com/embed/qCUrcgcXDtE?si=O-20rFC_ydPsJE5q"
    },
    {
        MovieName: "Sahooo",
        RealeaseYear : "2021",
        Rating :10,
        poster:"https://2.bp.blogspot.com/-wUjYQryFhgs/We4gy11q4zI/AAAAAAAAqOU/x2_WvejTNGYG8kkU6TE_VNCzNU0jkQdOQCLcBGAs/s320/saaho-first.jpg",
        src:"https://www.youtube-nocookie.com/embed/Jln4eyvzMNg?si=9yMfzPkFIQavmi9B"
    },
    {
        MovieName: "Mirchi ",
        RealeaseYear : "2021",
        Rating :9.7,
        poster:"https://wallpapercave.com/dwp1x/wp6685147.jpg",
        src:"https://www.youtube-nocookie.com/embed/I6QLMyeC1n8?si=GJf1I9Ce9Q1Jtjtc"
    },
    {
        MovieName: "Leo ",
        RealeaseYear : "2024",
        Rating :9.8,
        poster:"https://w0.peakpx.com/wallpaper/986/538/HD-wallpaper-thalapathy-vijay-master-vijay-thalapathy-thumbnail.jpg",
        src:"https://www.youtube.com/embed/qN3wfuPYTI4"
    },
    {
        MovieName: "Project K",
        RealeaseYear : "2025",
        Rating :9.1,
        poster:"https://cdn.123telugu.com/content/wp-content/uploads/2022/10/ProjectK.jpg",
        src: "https://www.youtube-nocookie.com/embed/mkHMQ4RGqGg?si=n-eZU-m0nLbRTmip"
    }
    
];





function Moviesdisplay(data) {
    
    for (let i = 0; i < data.length; i++) {
        let moviesSec = document.getElementById("movies");
        let movie = data[i];
        let maindiv = document.createElement("div");
        maindiv.classList.add("maindiv")

        maindiv.innerHTML = `
            <img class="poster" src="${movie.poster}" alt="${movie.MovieName}">
            <div class="overlay">
                <div class="youtube">
                    <iframe
                        src="${movie.src}"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
                <div class="details">
                    <h2>Movie Name: ${movie.MovieName}</h2>
                    <h4>Release Year: ${movie.RealeaseYear}</h4>
                    <h4>IMDB Rating: ${movie.Rating}</h4>
                </div>
            </div>
        `;
        moviesSec.appendChild(maindiv);
    }
}


Moviesdisplay(movies);










































































































































// function Moviesdisplay() {

//     for (let i = 0; i < movies.length; i++) {

//         let moviesSection = document.getElementById("movies");
//         let movie = movies[i];
//         let maindiv =document.createElement("div")


//         let imgDiv = document.createElement("img");
//         imgDiv.classList.add("poster");
//         imgDiv.src = movie.poster;

//         console.log(imgDiv);
//         let overlayDiv = document.createElement("div");
//         overlayDiv.classList.add("overlay");
//         // let youtubeDiv = document.createElement("div");
//         // youtubeDiv.classList.add("youtube");    
//         let detailsDiv = document.createElement("div");
//         detailsDiv.classList.add("details");

//         let Name = document.createElement("h1")
//         Name.textContent = "Movie Name: " + movie.MovieName;
//         let releaseYear = document.createElement("h3")
//         releaseYear.textContent= "Release Year: " + movie.RealeaseYear;
//         let Rating = document.createElement("h3")
//         Rating.textContent = "IMDB Rating: "+ movie.Rating


       
//         detailsDiv.appendChild(Name);
//         detailsDiv.appendChild(releaseYear);
//         detailsDiv.appendChild(Rating);

//         // overlayDiv.appendChild(youtubeDiv);+
//         overlayDiv.appendChild(detailsDiv)
//         maindiv.appendChild(imgDiv);
//         maindiv.appendChild(overlayDiv);
        
       
        
//     }

    
// }

// Moviesdisplay();