

export const videoHome = (req, res) => {
  res.render("home");
}

export const uploadVideo = (req, res) => {
  res.render("upload");
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