const Course = require("../models/Course")

const { mutipleMongooseToObject } = require("../../util/mongoose")

class SiteController {
  home(req, res) {
    // Course.find({}, function (err, courses, next) {
    //   // docs.forEach
    //   if (!err){
    //     res.json(courses);  
    //   }
    //   else{
    //     next(err)
    //     res.status(400).jsonp({error: 'Co loi xay ra'});
    //   }
    // });

    Course.find({})
      .then(courses => {
        mutipleMongooseToObject(courses);
        res.render('home',{ 
          courses: mutipleMongooseToObject(courses)
        })
      })
      .catch(error => next(error));
  }

  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
