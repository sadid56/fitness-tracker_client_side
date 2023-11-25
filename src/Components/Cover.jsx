/* eslint-disable react/prop-types */

const Cover = ({img, title}) => {
    return ( 
        <div
        className="hero h-[70vh]"
        style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-content">
          <h2 className="text-7xl text-center font-bold text-white">
            {title}
          </h2>
        </div>
      </div>
     );
}
 
export default Cover;