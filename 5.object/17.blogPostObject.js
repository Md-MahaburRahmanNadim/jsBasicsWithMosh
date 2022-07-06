/* create an object lettreal which have 
title,body,author,views,comments(author,body),isLIve(true or false)
*/

const blogPostObj = {
  title: "How  to wriht object in js",
  body: " by using {}",
  author: "Md. Mahabur ",
  views: 234,
  comments: {
    author: "Commenter Name(hasan)",
    body: " I love  your blog post it help me a lot",
  },
  isLive: true,
};
console.log(blogPostObj);
