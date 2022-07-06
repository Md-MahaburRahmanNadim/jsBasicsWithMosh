const BlogPost = function (title, body, author, views, comments, isLive) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = views;
  this.comments = [comments];
  this.isLive = isLive;
};

const newBlogPost = new BlogPost("a", "b", "c", 0, "no comment", false);
console.log(newBlogPost);
