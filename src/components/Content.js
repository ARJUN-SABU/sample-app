//packages
import { useEffect, useState } from "react";

//data
import blogsData from "../data/blogs.json";

//components
import BlogCard from "./BlogCard";

function Content() {
  const [blogs, setBlogs] = useState(blogsData);

  const handleBlogRemoval = (id) => {
    setBlogs(blogs.filter((blog) => blog.id != id));
  };

  // useEffect(async () => {
  //   console.log("Inside the callback function of useEffect");

  //   let res = await fetch("http://localhost:8000/blogs");
  //   let data = await res.json();
  //   console.log(data);
  // }, []);
  // useEffect(() => {
  //   console.log("Inside the callback function of useEffect");
  //   async function getData() {
  //     let res = await fetch("http://localhost:8000/blogs");
  //     let data = await res.json();
  //     console.log(data);
  //   }
  //   getData();
  // }, []);
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Hello I am the content!</h1>
      <p>Here is the list of blogs!</p>

      <div>
        {blogs.map((blog) => (
          <BlogCard
            id={blog.id}
            name={blog.name}
            isMale={blog.male}
            key={blog.id}
            handleDelete={handleBlogRemoval}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
