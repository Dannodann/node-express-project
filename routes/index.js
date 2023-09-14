import express from "express";
import {  homePage, 
          aboutUsPage, 
          commentsPage, 
          travelsPage, 
          travelDetailPage } 
    from "../controllers/pageController.js";
import { saveComments } from "../controllers/commentController.js";


const router = express.Router();

router.get("/", homePage);

router.get("/AboutUs", aboutUsPage );

router.get("/Comments", commentsPage);
router.post("/Comments", saveComments);

router.get("/Travels", travelsPage);
router.get("/Travels/:slug", travelDetailPage);

export default router;
