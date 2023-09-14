import { Comment } from "../models/Comments.js";

const saveComments = async (req, res) => {
  //Validating

  const { name, email, comment } = req.body;

  const errors = [];

  if (name.trim() === "") {
    errors.push({ comment: "Empty Name" });
  }

  if (!email.includes("@") || email.trim() === "") {
    errors.push({ comment: "Email invalid" });
  }

  if (comment.trim() === "") {
    errors.push({ comment: "Empty Comment" });
  }

if (errors.length > 0) {
    
    //Consult existing comments
    const comments = await Comment.findAll();

  res.render("Comments", {
    page: "Comments",
    errors,
    name,
    email,
    comment,
    comments
  });
}
    //Save on DB
else{
    try {
        await Comment.create({
            name,
            email,
            comment
        })

        res.redirect('/Comments')
    } catch (error) {
        console.log(error)
    }
}
}

export { saveComments };