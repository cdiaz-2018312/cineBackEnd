const { Schema, model,  } = require('mongoose');

const FunctionSchema = Schema({
    date: {
        type: String,
        required: true
    },
    movie: {
        type: Schema.Types.ObjectId,
        ref: "Movie",
        required: true
    }
});

module.exports = model('Function', FunctionSchema);
