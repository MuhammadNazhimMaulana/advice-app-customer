import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
    // Navigation
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
          // Redirect back to default page
          navigate('/', { replace: true });
        }, 3000);
      }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <span className="text-4xl text-center md:text-6xl lg:text-7xl">Terima Kasih</span>
            <span className="text-lg md:text-xl lg:text-2xl text-center">Data yang Anda Kirimkan Telah Tercatat</span>
        </div>
    );
}
 
export default Thanks;