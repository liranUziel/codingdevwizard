import "./Blog.scss";
import Blogcard from "./Blogcard";
import { useSelector } from 'react-redux';


function Blog() {
    const blogPosts = useSelector((state) => state.blogs);
    return (
        <div className="Blog__wrapper">
            <div className="header">
                <span className="header__title">Recent posts</span>
                <a href="/blogs">View All</a>
            </div>
            <div className="blogs">
                <ul>
                    {blogPosts.map((blog) => {
                        const blogData = blog.attributes;
                        return (
                            <Blogcard
                                key={blog.id}
                                title={blogData.title}
                                description={
                                    blogData.body.substring(0, 100) + "..."
                                }
                                date={blogData.createdat}
                                img={blogData.thumbnail.data.attributes.url}
                            />
                        );
                    })}
                   
                </ul>
            </div>
        </div>
    );
}

export default Blog;
