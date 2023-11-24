import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxioPublic";
import blogImg from '../../../assets/images/blog.jpg'

const Blog = () => {
    const axiosPublic = useAxiosPublic()
    const { data: blogs = [] } = useQuery({
        queryKey: "blog",
        queryFn: async () => {
          const res = await axiosPublic.get("/blogs");
          return res.data;
        },
      });
    return (
        <div className="max-w-7xl mx-auto">
            <SectionTitle title={'Blog'} description={'Highlights of recent blogs.'}/>
            <div className="flex items-start gap-2">
                <div className="flex-1 h-[800px]">
                    <img src={blogImg} className="w-full h-full rounded-md" alt="" />
                </div>
                <div className="flex-1 grid grid-cols-2 gap-3">
                    {
                        blogs.map(blog => <div key={blog._id} className="card border hover:border-[#fe1313]">
                        <div className="card-body">
                          <div className="flex items-center justify-between">
                          <div className="flex items-center justify-center gap-4">
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img src={blog?.author_pic} />
                        </div>
                      </div>
                     
                        <div>
                        <h2 className="text-xl font-bold">{blog?.author}</h2>
                        <h2 className="text-[#fe1313]">{blog?.date}</h2>
                        </div>
                      
                    </div>
                    
                          </div>
                          <h1 className="font-medium">{blog?.category}</h1>
                          <h2 className="card-title">{blog?.title}</h2>
                          <p>{blog?.description}</p>
                         
                          <div className="card-actions justify-center">
                            <button className="link link-error text-xl">Read More...</button>
                          </div>
                        </div>
                      </div>)
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Blog;