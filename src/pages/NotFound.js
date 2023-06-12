import { useNavigate  } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const NotFound = () => {
    // Navigate
    const navigate = useNavigate();

    return ( 
        <div className="flex flex-col items-center justify-center h-screen">

            {/* Image */}
            <img className="w-52 h-52 md:h-64 md:w-64 lg:w-96 lg:h-96" src={process.env.PUBLIC_URL+"/Images/404.png"} alt="Not Found"/>

            {/* Writing or Text */}
            <span className="text-xs md:text-xl lg:text-2xl text-center mt-3">Halaman yang Anda Cari Tidak Tersedia</span>

            {/* Button */}
            <Button onClick={() => navigate(-1)} className="mt-6">Kembali</Button>
        </div>
     );
}
 
export default NotFound;