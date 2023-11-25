import { useQuery } from "@tanstack/react-query";
import SectionHelmet from "../../Components/SectionHelmet";
import useAxiosPublic from "../../Hooks/useAxioPublic";
import CommunityNavber from "./CommunityNavber";
import { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { SiVirustotal } from "react-icons/si";
import Modal from "./Modal";
import Loader from "../../Shared/Loader/Loader";

const Community = () => {
  const axiosPublic = useAxiosPublic();
  const [like, setLike] = useState({});
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(6);
//   const [count, setCount]= useState(0)
  const count = 8;
// console.log(count);
  const numberOfPages = Math.ceil(count / itemPerPage)
  const pages = [...Array(numberOfPages).keys()]

  const {
    data: posts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: "post",
    queryFn: async () => {
      const res = await axiosPublic.get(`/community?page=${currentPage}&size=${itemPerPage}`);
      return res.data;
    },
    
  });

//   useEffect(()=>{
//     fetch('http://localhost:5600/pageCount')
//     .then(res => res.json())
//     .then(data => setCount(data))
//   },[])
  // console.log(posts);

  const handleLike = (id) => {
    if (like[id]) {
      setLike((prevlike) => ({
        ...prevlike,
        [id]: prevlike[id] - 1,
      }));
    } else {
      setLike((prevlike) => ({
        ...prevlike,
        [id]: (prevlike[id] || 0) + 1,
      }));
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  const handleItemsPerPage = e => {
    const val = parseInt(e.target.value);
    // console.log(val);
    setItemPerPage(val);
    setCurrentPage(0);
}
  return (
    <div>
      <SectionHelmet title={"Strong | Community"} />
      <CommunityNavber />
      <div className="flex items-center justify-evenly max-w-5xl mx-auto shadow-lg p-6">
        <button
          onClick={() => navigate("/")}
          className="btn lowercase text-xl border border-red-300">
          <IoArrowBack /> Back to Home
        </button>
        <Modal refetch={refetch} />
        <h2 className="text-2xl font-bold btn">
          <SiVirustotal /> Total Post: {posts?.length}
        </h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-5 mt-5">
        {posts.map((post) => (
          <div key={post._id} className="p-5 border rounded-md">
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
            <h5 className="font-medium my-5">{post?.description}</h5>

            <div>
              <img src={post?.image ? post?.image : ""} alt="" />
            </div>

            {/* react  */}

            <button
              onClick={() => handleLike(post?._id)}
              className="btn mt-5 text-xl">
              <AiFillLike />
              {like[post?._id] || 0}
            </button>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="join flex justify-center my-5 bg-slate-500 max-w-5xl mx-auto py-2 space-x-2">
        {
            pages.map(page => <button onClick={()=> setCurrentPage(page)} className={`btn text-xl ${currentPage === page ? 'bg-red-500 text-white border-none' : undefined}` } key={page}>{page}</button>)
        }
         <select className="input" value={itemPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
      </div>
    </div>
  );
};

export default Community;
