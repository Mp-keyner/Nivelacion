import React from "react";
import '../Compo.css'

export const Imagenes = () => {
    const imagen1 = "https://media.geeksforgeeks.org/wp-content/uploads/20211110154408/DSwithCPPWorkshopthumbnail.png"
    const imagen2 = "https://media.geeksforgeeks.org/wp-content/uploads/20211110154413/getplacedseries1thumbnail.png"
    const imagen3 = "https://media.geeksforgeeks.org/wp-content/uploads/20211110154416/systemdesignworkshoplivethumbnail.png"
    const imagen4 = "https://media.geeksforgeeks.org/wp-content/uploads/20211110154411/fullstacknodereactworkshopthumbnail.png"


    const img1 = () => {
        console.log("imagen 1")
        var y = document.getElementById("img-Box");
        y.src = imagen1;
    }
    const img2 = () => {
        console.log("imagen 2")
        var y = document.getElementById("img-Box");
        y.src = imagen2;
    }
    const img3 = () => {
        console.log("imagen 3")
        var y = document.getElementById("img-Box");
        y.src = imagen3;
    }
    const img4 = () => {
        console.log("imagen 4")
        var y = document.getElementById("img-Box");
        y.src = imagen4;
    }



    return (<>
        <div className="myProducts">
            <div className="myProducts-gallery">
                <img src={imagen1} alt="imagen1" onClick={img1} />
                <img src={imagen2} alt="imagen2" onClick={img2} />
                <img src={imagen3} alt="imagen3" onClick={img3} />
                <img src={imagen4} alt="imagen4" onClick={img4} />
            </div>
            <div class="image-container">
                <img id="img-Box"
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20211110154408/DSwithCPPWorkshopthumbnail.png"
                    alt="click here" />
            </div>
        </div>
    </>)
}

// const myImageFunction = (x) => {
//
// }
