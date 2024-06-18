import './BlogsPage.scss';
import { useSelector } from 'react-redux';
import Blogcard from '../../components/Blog/Blogcard'
function BlogsPage() {
  const blogPosts = useSelector((state) => state.blogs);
  return (
    <div className="blogs__page__wrapper">
    <h1 className="blogs__page__title">Blogs</h1>
    <ul>
       {blogPosts.map((blog) => {
                        const blogData = blog.attributes;
                        return (
                          <div key={blog.id}>
                            <Blogcard
                                
                                title={blogData.title}
                                description={
                                    blogData.body.substring(0, 100) + "..."
                                }
                                date={blogData.createdat}
                                img={blogData.thumbnail.data.attributes.url}
                            />
                            <button>Read more</button>
                            </div>
                        );
                    })}
    </ul>
    <button>Load more</button>
  </div>
  )
}

export default BlogsPage
