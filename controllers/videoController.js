import Video from "../models/Video";
import User from "../models/User";
import routes from "../routes";

export const videoHome = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { videos });
  }
  catch (error) {
    console.log(error);
    res.render("home", { videos: [] });
  }
}

export const getUploadVideo = (req, res) => {
  res.render("upload");
}

export const postUploadVideo = async (req, res) => {
  const { user: { id }, body: { videoName, description }, file: { path } } = req;

  try {
    const newVideo = await Video.create({
      title: videoName,
      description: description,
      fileUrl: path
    });

    const user = await User.findById(id);
    user.videos.push(newVideo._id);
    user.save();

    res.redirect(routes.videoDetail(newVideo._id));
  }
  catch (error) {
    res.redirect(`/videos${routes.upload}`);
  }
}

export const search = (req, res) => {
  const { query: search } = req;
  res.render("search", search);
}

export const videoDetail = (req, res) => {
  res.render("videoDetail");
  console.log(req.params);
}

export const editVideo = (req, res) => {
  res.render("editVideo");
}

export const deleteVideo = async (req, res) => {
  const {
    user,
    params: { id }
  } = req;
  try {
    console.log(req.user);
    await Video.findByIdAndRemove(id);

    const user = await User.findById(user.id);
    user.videos.pull(id);
    user.save();

    res.redirect(routes.home);

  } catch (error) {
    console.log(error);
    res.redirect(routes.editVideo(id));
  }

}


/*
export const search = async (req, res) => {
    const {
      query: { term: searchingBy },
    } = req;
    let videos = [];
    try {
      videos = await Video.find({
        title: { $regex: searchingBy, $options: "i" },
      });
    } catch (error) {
      console.log(error);
    }
    //const searchingBy = req.query.term;
    res.render("search", {
      pageTitle: `Search: '${searchingBy}'`,
      searchingBy,
      videos,
    });
  };
  */