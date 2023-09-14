import { Travel } from "../models/Travels.js";
import { Comment } from "../models/Comments.js";

const homePage = async (req, res) => {

  //Consult 3 Travels


    const promiseDB = [];

    promiseDB.push(Travel.findAll({limit: 3}));
    promiseDB.push(Comment.findAll({limit: 3}));


  try {
    const result = await Promise.all(promiseDB)
    res.render("Home", {
      page: "Home",
      clase: "home",
      travels: result[0],
      comments: result[1]
    });
  } catch (error) {
    console.log(error)
  }
};

const aboutUsPage = (req, res) => {
  res.render("AboutUs", {
    page: "About Us",
  });
};

const commentsPage = async (req, res) => {
  try {
    const comments = await Comment.findAll();

    res.render("Comments", {
      page: "Comments",
      comments,
    });
  } catch (error) {
    console.log(error);
  }
};

const travelsPage = async (req, res) => {
  // DB Consult
  const travels = await Travel.findAll();

  res.render("Travels", {
    page: "Next Travels",
    travels,
  });
};

//Show travel by slug

const travelDetailPage = async (req, res) => {
  const { slug } = req.params;

  try {
    const travel = await Travel.findOne({ where: { slug } });

    res.render("travel", {
      page: "Travel Info",
      travel,
    });
  } catch (error) {
    console.log(error);
  }
};

export { homePage, aboutUsPage, commentsPage, travelDetailPage, travelsPage };
