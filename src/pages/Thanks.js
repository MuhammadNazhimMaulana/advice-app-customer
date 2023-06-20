import { useEffect } from "react";
import { useNavigate, useLocation  } from "react-router-dom";

const Thanks = () => {
    // Navigation
    const navigate = useNavigate();

    // Location
    const location = useLocation();

    // Retrieve data 
    const data = JSON.parse(location.state);

    useEffect(() => {
        setTimeout(() => {
          // Redirect back to default page
          navigate('/form/' + data.employee_id, { replace: true });
        }, 3000);
      });

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <span className="text-4xl text-center md:text-6xl lg:text-7xl">Terima Kasih</span>
            <span className="text-lg md:text-xl lg:text-2xl text-center">Data yang Anda Kirimkan Telah Tercatat</span>
        </div>
    );
}
 
export default Thanks;