import { useQuery } from "@tanstack/react-query";
import SectionHelmet from "../../Components/SectionHelmet";
import useAxiosPublic from "../../Hooks/useAxioPublic";
import CommunityNavber from "./CommunityNavber";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";

const Community = () => {
    const axiosPublic = useAxiosPublic()
    const [like,setLike] = useState({})
    const {data: posts = []} = useQuery({
        queryKey: 'post',
        queryFn: async()=>{
            const res = await axiosPublic.get('/community')
            return res.data
        }
    })
    // console.log(posts);

    const handleLike = (id)=>{
       if(like[id]){
        setLike((prevlike)=>({
            ...prevlike, [id]: prevlike[id]  - 1
        }))
       }
       else{
        setLike((prevlike)=>({
            ...prevlike, [id]: (prevlike[id] || 0) + 1
        }))
       }
    }

    return ( 
        <div>
            <SectionHelmet title={'Strong | Community'}/>
            <CommunityNavber/>
            <div className="flex items-center justify-evenly max-w-5xl mx-auto shadow-lg p-6">
                <button className="btn lowercase text-xl border border-red-300">Back to Home</button>
                <button className="btn lowercase text-xl">Post</button>
                <h2 className="text-2xl font-bold">Total Post: {posts?.length}</h2>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-2 gap-5 mt-5">
                {
                    posts.map(post => <div key={post._id} className="p-5 border rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img src={post?.profile_image} />
                        </div>
                      </div>
                      <div>
                      <h3 className="text-xl font-medium">{post?.name}</h3>
                      <p className="text-sm text-gray-500">{post?.date}</p>
                      </div>
                    </div>
                    <h5 className="font-medium my-5">
                      {post?.description}
                    </h5>

                    <div>
                        <img src={post?.image ? post?.image : ''} alt="" />
                    </div>
              
                  {/* react  */}
                  
                      <button onClick={()=> handleLike(post?._id)} className="btn mt-5 text-xl"><AiFillLike/>{like[post?._id] || 0}</button>
                      
                  
              
                  </div>)
                }
            </div>
        </div>
     );
}
 
export default Community;