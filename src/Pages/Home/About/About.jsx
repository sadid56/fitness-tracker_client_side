import aboutImg from '../../../assets/images/about.png'
const About = () => {
    return ( 
        <div className='flex items-center gap-5 max-w-6xl mx-auto mt-10'>
            <div className='flex-1 p-4 border-l-red-500 border-b-red-500 border-l-2 border-b-2'>
                <img src={aboutImg} className='w-full' alt="" />
            </div>
            <div className='flex-1 space-y-5'>
            <div className="flex items-center gap-4">
            <div className="border border-[#fe1313] w-[60px]"></div>
            <p className="text-xl font-medium text-[#fe1313] uppercase">About our gym</p>
          </div>
          <h2 className='text-4xl font-bold'>SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!</h2>
          <p className='text-gray-500'>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
          <p className='text-gray-500'>Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
          <button className="bg-[#fe1313] px-6 py-2 rounded-md font-medium text-white p-2 text-xl hover:bg-[#c20505]">
            Classes
          </button>
            </div>
        </div>
     );
}
 
export default About;