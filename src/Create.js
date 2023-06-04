import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const[isPending,setisPending]=useState(false);
  const history = useHistory();
const handlSubmit = (e)=>{
e.preventDefault();
const blog = {title,body,author};
setisPending(true);
fetch('http://localhost:8000/blogs',{
  method:'post',
  headers:{"content-type":"application/json"},
  body:JSON.stringify(blog)
}).then(()=>{
  console.log('new blog add')
  setisPending(false);
 // history.go(1);
 history.push('/');
})

}
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handlSubmit}>
        <label>Blog title:</label>
        <input type="text"required value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label>Blog body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog author:</label>
        <input value={author}onChange={(e) => setAuthor(e.target.value)}></input>
       { !isPending &&<button>Add Blog</button>}
       { isPending &&<button disabled>Adding Blog ......</button>}
      </form>
    </div>
  );
}
 
export default Create;