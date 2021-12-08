const { mongooesToObject } = require("../../util/mongoose")
const Course = require("../models/Course")

class CourseController {
    // [GET] courses/:slug

    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then((course) => {
                res.render('courses/show', {course: mongooesToObject(course)})
            })
            .catch(next)
        // res.send('Course detail - ' + req.params.slug);
    }

     // [GET] courses/create
    create(req, res, next){
        res.render('courses/create')
    }

    // [POST] courses/store
    store(req, res, next){
        const formData = req.body;
        formData.image = `https://cdn.fullstack.edu.vn/f8-learning/courses/1.png`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            })
    }

    // [GET] courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', {course: mongooesToObject(course)});
            })
            .catch(next);
    }

    // [PUT] courses/:id
    update(req, res, next){
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE]
    destroy(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
} 
module.exports = new CourseController();