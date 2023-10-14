const Movie = require('../model/movie');

const movie1 = async (req, res) => {
    try {
        let movie = new Movie();
        movie.title = "Avatar";
        movie.class = "G";
        movie.image = "https://i0.wp.com/hipertextual.com/wp-content/uploads/2016/10/avatar-poster-01-600x886.jpg?resize=600%2C886&quality=50&strip=all&ssl=1";
        
        const findMovie = await Movie.findOne({ title: movie.title });
        if (findMovie) return console.log("this movie #1 has alreddy exists");
        movie = await movie.save();
        if (!findMovie) return console.log("movie #1 is not readdy!");
        return console.log("movie #1 is readdy !");
    } catch (err) {
        throw new Error(err);
    }

};
const movie2 = async (req, res) => {
    try {
        let movie = new Movie();
        movie.title = "The Truman Show";
        movie.class = "PG";
        movie.image = "https://i0.wp.com/hipertextual.com/wp-content/uploads/2016/10/redesigns-movie-poster-day-peter-majarich-97-57fde5a2ed60a__700-600x750.jpg?resize=600%2C750&quality=50&strip=all&ssl=1";
        
        const findMovie = await Movie.findOne({ title: movie.title });
        if (findMovie) return console.log("this movie #2 has alreddy exists");
        movie = await movie.save();
        if (!findMovie) return console.log("movie #2 is not readdy!");
        return console.log("movie #2 is readdy !");
    } catch (err) {
        throw new Error(err);
    }

};

const movie3 = async (req, res) => {
    try {
        let movie = new Movie();
        movie.title = "The simpsons";
        movie.class = "all public";
        movie.image = "https://i0.wp.com/hipertextual.com/wp-content/uploads/2016/10/redesigns-movie-poster-day-peter-majarich-1-57fde49fc422f__700-600x749.jpg?resize=600%2C749&quality=50&strip=all&ssl=1";
        
        const findMovie = await Movie.findOne({ title: movie.title });
        if (findMovie) return console.log("this movie #3 has alreddy exists");
        movie = await movie.save();
        if (!findMovie) return console.log("movie #3 is not readdy!");
        return console.log("movie #3 is readdy !");
    } catch (err) {
        throw new Error(err);
    }

};

const movie4 = async (req, res) => {
    try {
        let movie = new Movie();
        movie.title = "El Padrino";
        movie.class = "PG-13";
        movie.image = "https://i0.wp.com/hipertextual.com/wp-content/uploads/2016/10/redesigns-movie-poster-day-peter-majarich-6-57fde4b1c864d__700-600x600.jpg?resize=600%2C600&quality=50&strip=all&ssl=1"
        
        const findMovie = await Movie.findOne({ title: movie.title });
        if (findMovie) return console.log("this movie #4 has alreddy exists");
        movie = await movie.save();
        if (!findMovie) return console.log("movie #4 is not readdy!");
        return console.log("movie #4 is readdy !");
    } catch (err) {
        throw new Error(err);
    }

};
const movie5 = async (req, res) => {
    try {
        let movie = new Movie();
        movie.title = "Batman vs SuperMan";
        movie.class = "all public";
        movie.image = "https://i0.wp.com/hipertextual.com/wp-content/uploads/2016/10/redesigns-movie-poster-day-peter-majarich-5-57fde4af84b51__700-600x600.jpg?resize=600%2C600&quality=50&strip=all&ssl=1"
        
        const findMovie = await Movie.findOne({ title: movie.title });
        if (findMovie) return console.log("this movie #5 has alreddy exists");
        movie = await movie.save();
        if (!findMovie) return console.log("movie #5 is not readdy!");
        return console.log("movie #5 is readdy !");
    } catch (err) {
        throw new Error(err);
    }

};

const getMovies = async (req = request, res = response) => {

    const movieList = await Promise.all([
        Movie.countDocuments(),
        Movie.find()
    ]);
    
    res.json({
        msg: 'get Api - get Movies',
        movieList
    });


}

module.exports = {
    movie1,
    movie2,
    movie3,
    movie4,
    movie5,
    getMovies
}

