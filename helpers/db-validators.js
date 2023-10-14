
const User = require("../model/User");


//Este archivo maneja validaciones personalizadas

const emailExists = async (correo = "") => {

  const existeEmail = await User.findOne({ correo });

  if (existeEmail) {
    throw new Error(
      `email: ${correo} exists in DB`
    );
  }
};

const existsUserById = async (id) => {
  //Verificar si el ID existe
  const existeUser = await User.findById(id);

  if (!existeUser) {
    throw new Error(` id ${id} does not exists in Db`);
  }
};

module.exports = {
  emailExists,
  existsUserById,
};
