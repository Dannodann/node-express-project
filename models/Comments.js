import Sequelize from "sequelize";
import db from "../config/db.js";

export const Comment = db.define('comments', {
    name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    comment:{
        type: Sequelize.STRING
    }
   
});