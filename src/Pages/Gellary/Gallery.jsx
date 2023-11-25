import { useQuery } from "@tanstack/react-query";
import SectionHelmet from "../../Components/SectionHelmet";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxioPublic";
import bannerImg from "../../assets/images/gallery.png";
import "./gallery.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import Cover from "../../Components/Cover";

const Gallery = () => {
  const axiosPublic = useAxiosPublic();

  const fetchGallery = async ({ pageParams = 1 }) => {
    const res = await axiosPublic.get(`/gallery?page=${pageParams}`);
    return res.data;
  };
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: "gallery",
    queryFn: fetchGallery,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.nextPage;
    },
  
  });
  const useContainerRef = useRef(null);
  const handleScroll = () => {
    const container = useContainerRef.current;
    if (
      container &&
      container.scrollHeight - container.scrollTop === container.clientHeight &&
      hasNextPage &&
      !isFetching
    ) {
      fetchNextPage();
    }
  };
  
  useEffect(()=>{
    const container = useContainerRef.current;
    container.addEventListener('scroll', handleScroll)
    return () => {
        container.removeEventListener("scroll", handleScroll);
      };
  },[])

  return (
    <div    ref={useContainerRef}
    style={{ overflowY: "auto", maxHeight: "100vh" }}
    onScroll={handleScroll}>
      <SectionHelmet title={"Strong | Gallery"} />
   
    <Cover img={bannerImg} title={'Our Gallery'}/>

      <SectionTitle title={"Our Gallery Images"} />
        {isFetching && <p className="text-center">Loading...</p>}
      <div className="grid grid-cols-4 gap-3 gap-y-3 max-w-6xl mx-auto">
      {data?.pages?.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((img) => (
              <div key={img?._id} className="w-full">
                <img
                  src={img?.gallery_img}
                  className="w-full h-[250px]"
                  alt=""
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Gallery;