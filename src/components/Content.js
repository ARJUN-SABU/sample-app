//packages
import { useEffect, useState } from "react";
import GetFetch from "./GetFetch";

//data
import blogsData from "../data/blogs.json";

//components
import BlogCard from "./BlogCard";

function Content() {
  const [blogs, setBlogs] = useState(blogsData);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  // const [loading, setLoading] = useState(true);

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
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("http://localhost:8000/blogs")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLoading(false);
  //         console.log(data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, 3000);
  // }, []);
  let { pending, data } = GetFetch("http://localhost:8000/blogs");

  function handleSubmit(e) {
    e.preventDefault();
    let blogData = {
      title,
      body,
      author,
    };

    console.log(blogData);
  }

  return (
    <div>
      <h1>Hello I am the content!</h1>
      <p>Here is the list of blogs!</p>
      {pending && <h1>Loading...</h1>}
      {data && <p>{data.toString()}</p>}
      {/* <div>
        {blogs.map((blog) => (
          <BlogCard
            id={blog.id}
            name={blog.name}
            isMale={blog.male}
            key={blog.id}
            handleDelete={handleBlogRemoval}
          />
        ))}
      </div> */}

      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            padding: "10px 10px",
          }}
          onSubmit={handleSubmit}
        >
          <label>Blog Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>

          <label>Blog Content</label>
          <textarea
            style={{ height: "200px" }}
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>

          <label>Author</label>
          <select
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option value="Arjun">Arjun</option>
            <option value="Brad">Brad</option>
            <option value="John">John</option>
            <option value="Muhammed">Muhammed</option>
          </select>

          <button>Submit</button>

          <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p>
        </form>
      </div>
    </div>
  );
}

export default Content;
