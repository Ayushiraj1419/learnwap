 import "./Bigadd.css";
const Bigadd = ()=>{
    const design = (
     <>
         <div className="video-box">
        <video width="100%" autoPlay muted loop>
            <source src="video.mp4"></source>
        </video>
        <div className="overlay d-flex justify-content-center align-items-center">
            <div>
                <h3 className="text-light">Introducing</h3>
                <h1 className="text-white large-text">React Tutorial</h1>
                <h3 className="text-light">By Ayushi Raj Patel</h3>
                <button className="btn btn-primary py-2 px-4 mt-4">Learn More</button>
            </div>
        </div>
     </div>
     </>
    );
    return design;
}
export default Bigadd;