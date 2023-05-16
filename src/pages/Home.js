import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return ( 
        <div className="flex items-center justify-center h-screen">
            <button onClick={() => navigate("/form")} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Klik Disini
            </button>
        </div>
    );
}
 
export default Home;