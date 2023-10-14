const { Schema, model } = require('mongoose');

const MovieSchema = Schema({
    title: {
        type: String,
        required: [true, 'you must put a title']
    },
    image: {
        type: String,
        required: [true, 'you must put an image' ],
    },
    class: {
        type: String,
        required: [true, 'you must put a class' ],
        default: "All public"
    }
    
});


module.exports = model('Movie', MovieSchema);