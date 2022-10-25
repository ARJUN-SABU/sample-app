function BlogCard({ id, name, isMale, handleDelete }) {
  return (
    <div>
      <p>I am the blog card!</p>
      <p>{name}</p>
      <p>{`Is Male ? ${isMale}`}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default BlogCard;
