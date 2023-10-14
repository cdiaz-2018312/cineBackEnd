const Function = require('../model/Function');

const Function1 = async (req, res) => {
    try {
        let funct1 = new Function();
        funct1.date= "10/09/2023-19:00";
        funct1.movie = "6528ecc8380b613a002b12df";
        
        const findFunct = await Function.findOne({ date: funct1.date });
        if (findFunct) return console.log("this function #1 has alreddy exists");
        funct1 = await funct1.save();
        if (!user) return console.log("function #1 is not readdy!");
        return console.log("Function #1 is readdy !");
    } catch (err) {
        throw new Error(err);
    }

};
const Function2 = async (req, res) => {
    try {
        let funct1 = new Function();
        funct1.date= "23/11/2023-15:00";
        funct1.movie = "6528ecc8380b613a002b12df";
        
        const findFunct = await Function.findOne({ date: funct1.date });
        if (findFunct) return console.log("this function #2 has alreddy exists");
        funct1 = await funct1.save();
        if (!user) return console.log("function #2 is not readdy!");
        return console.log("Function #2 is readdy !");
    } catch (err) {
        throw new Error(err);
    }

};

const Function3 = async (req, res) => {
    try {
        let funct1 = new Function();
        funct1.date= "27/12/2023-09:00";
        funct1.movie = "6528ecc8380b613a002b12e0";
        
        const findFunct = await Function.findOne({ date: funct1.date });
        if (findFunct) return console.log("this function #3 has alreddy exists");
        funct1 = await funct1.save();
        if (!findFunct) return console.log("function #3 is not readdy!");
        return console.log("Function #3 is readdy !");
    } catch (err) {
        throw new Error(err);
    }

};

const Function4 = async (req, res) => {
    try {
        let funct1 = new Function();
        funct1.date= "11/12/2023-20:00";
        funct1.movie = "6528ecc8380b613a002b12e0";
        
        const findFunct = await Function.findOne({ date: funct1.date });
        if (findFunct) return console.log("this function #4 has alreddy exists");
        funct1 = await funct1.save();
        if (!findFunct) return console.log("function #4 is not readdy!");
        return console.log("Function #4 is readdy !");
    } catch (err) {
        throw new Error(err);
    }

};
const Function5 = async (req, res) => {
    try {
        let funct1 = new Function();
        funct1.date= "19/09/2023-12:00";
        funct1.movie = "6528edb339a5733d9f3dd7c0";
        
        const findFunct = await Function.findOne({ date: funct1.date });
        if (findFunct) return console.log("this function #5 has alreddy exists");
        funct1 = await funct1.save();
        if (!findFunct) return console.log("function #5 is not readdy!");
        return console.log("Function #5 is readdy !");
    } catch (err) {
        throw new Error(err);
    }

};
const Function6 = async (req, res) => {
    try {
        let funct1 = new Function();
        funct1.date= "05/10/2023-13:00";
        funct1.movie = "6528edb339a5733d9f3dd7c0";
        
        const findFunct = await Function.findOne({ date: funct1.date });
        if (findFunct) return console.log("this function #6 has alreddy exists");
        funct1 = await funct1.save();
        if (!findFunct) return console.log("function #6 is not readdy!");
        return console.log("Function #6 is readdy !");
    } catch (err) {
        throw new Error(err);
    }

};
const Function7 = async (req, res) => {
    try {
        let funct1 = new Function();
        funct1.date= "21/09/2023-23:00";
        funct1.movie = "6528edb339a5733d9f3dd7c3";
        
        const findFunct = await Function.findOne({ date: funct1.date });
        if (findFunct) return console.log("this function #7 has alreddy exists");
        funct1 = await funct1.save();
        if (!findFunct) return console.log("function #7 is not readdy!");
        return console.log("Function #7 is readdy !");
    } catch (err) {
        throw new Error(err);
    }
};

const Function8 = async (req, res) => {
    try {
        let funct1 = new Function();
        funct1.date= "28/09/2023-20:00";
        funct1.movie = "6528edb339a5733d9f3dd7c3";
        
        const findFunct = await Function.findOne({ date: funct1.date });
        if (findFunct) return console.log("this function #8 has alreddy exists");
        funct1 = await funct1.save();
        if (!findFunct) return console.log("function #8 is not readdy!");
        return console.log("Function #8 is readdy !");
    } catch (err) {
        throw new Error(err);
    }
};
const Function9 = async (req, res) => {
    try {
        let funct1 = new Function();
        funct1.date= "15/01/2024-19:00";
        funct1.movie = "6528eddcc2acf256545c4e50";
        
        const findFunct = await Function.findOne({ date: funct1.date });
        if (findFunct) return console.log("this function #9 has alreddy exists");
        funct1 = await funct1.save();
        if (!findFunct) return console.log("function #9 is not readdy!");
        return console.log("Function #9 is readdy !");
    } catch (err) {
        throw new Error(err);
    }
};

const Function10 = async (req, res) => {
    try {
        let funct1 = new Function();
        funct1.date= "15/01/2024-10:00";
        funct1.movie = "6528eddcc2acf256545c4e50";
        
        const findFunct = await Function.findOne({ date: funct1.date });
        if (findFunct) return console.log("this function #10 has alreddy exists");
        funct1 = await funct1.save();
        if (!findFunct) return console.log("function #10 is not readdy!");
        return console.log("Function #10 is readdy !");
    } catch (err) {
        throw new Error(err);
    }
};


const getFunctions = async (req = request, res = response) => {

    const functionList = await Promise.all([
        Function.find()
    ]);
    
    res.json({
        msg: 'get Api - get functions',
        functionList
    });


}

module.exports = {
    getFunctions,
    Function1,
    Function2,
    Function3,
    Function4,
    Function5,
    Function6,
    Function7,
    Function8,
    Function9,
    Function10
}

