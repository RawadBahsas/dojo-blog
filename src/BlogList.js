import { Link, useHistory } from 'react-router-dom';
const BlogList = ({ blogs, title }) => {

    const history = useHistory();
    // const handleDelete = (id) => {

    //     fetch('http://localhost:8000/blogs/' + id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         console.log('blabla')
    //         history.go('0');
    //     })
    // }

    return (
        <div className="blog-list" >
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </Link>
                        {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
                    </div>
                ))
            }
        </div >
    );
}

export default BlogList;