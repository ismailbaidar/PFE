import "../styles/loading.css"
export default function Loading(){
    return <div className="loading-wrapper">
        {/* <div className="image"></div> */}
        <div className="loading">
            <img src="../images/pixel.gif" alt="" className="image"  />
            <div className="circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
            </div>
        </div>

    </div>
}
