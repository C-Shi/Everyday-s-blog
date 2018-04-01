var methodOverride = require("method-override"),
    express        = require("express"),
    app            = express(),
    mongoose       = require("mongoose"),
    bodyParser     = require("body-parser");
    
//CONFIG APP
mongoose.connect("mongodb://localhost/blog_app");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

//CONFIG mongoose
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type:Date, default: Date.now()}
})

var blogs = mongoose.model("blog", blogSchema);

//ROUTES -- ADD ALL ROUTES UNDER
// *******************************************************

app.get("/", function(req,res){
    res.redirect("/blogs");
})


//INDEX routes
app.get("/blogs", function(req,res){
    blogs.find({}, function(err, blogs){
        if(!err){
            res.render("index", {blogs: blogs})
        }
    })
})


// NEW routes - render new form
app.get("/blogs/new", function(req,res){
    res.render("new");
})


// CREATE routes - submit post to /blogs
app.post("/blogs", function(req,res){
    blogs.create(req.body.blogs, function(err, blogs){
        if (err){
            res.redirect("/blogs/new");
        }else {
            res.redirect("/blogs")
        }
    })
})

// SHOW routes - show detailed info of each individual item
app.get("/blogs/:id", function(req, res){
    blogs.findById(req.params.id, function(err, blogs){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("show", {blogs:blogs});
        }
    })
})

// EDIT routes - show edit form and collect existing data
app.get("/blogs/:id/edit", function(req,res){
    blogs.findById(req.params.id, function(err, blogs){
        if(err){
            res.send("An Error Occurs!");
        }else{
            res.render("edit", {blogs:blogs});
        }
    })
})

// UPDATE routes - take data from EDIT routes form and post to database
app.put("/blogs/:id", function(req, res){
    // this method take 3 arguments: id, newData, callback
    blogs.findByIdAndUpdate(req.params.id, req.body.blogs, function(err, blogs){
        if (err){
            res.send("An Error Occurs!");
        }else{
            res.redirect("/blogs");
        }
    })
})

// DELETE routes - remove blog from database
app.delete("/blogs/:id", function(req,res){
    blogs.findByIdAndRemove(req.params.id, function(err){
        if (err){
            res.send("You are unable to delete this post");
        }else{
            res.redirect("/blogs");
        }
    })
})
// *******************************************************

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server start!");
})
