import {
    useNavigate, 
    useParams,
} from 'react-router-dom';
import {useState} from 'react';
import {
    Card,
    Button,
    Typography,
    Textarea
} from "@material-tailwind/react";
import StarRating from '../components/StarRating';
import Footer from '../components/Footer';

const Form = () => { 
    // Preparing Navigation
    const navigate = useNavigate();

    // For Advice
    const [advice, setAdvice] = useState('');

    const handleChange = event => {
        // Set New Advice Value
        setAdvice(event.target.value);

    };
      
    // Redirecting To Thanks
    const handleSubmit = async (event) => {
        // No reset
        event.preventDefault();

        let employee_id = event.target.employee_id.value;
        let score = event.target.rating.value;

        // Body
        const data = { advice, employee_id, score };

        // Second argument define request
        const response = await fetch('http://localhost:8000/api/form-submit', {
            method: 'POST',
            headers: { "Content-Type" : "application/json",
                        "accept" : "application/json"},
            body: JSON.stringify(data)
        })

        // Fetching Result
        await response.json();

        // Rating
        // console.log('value is:', event.target.employee_id.value);

        // redirect to /contacts
        navigate('/thanks');

    };

    // Parameter
    const params = useParams();

    return ( 
        <div className="min-h-screen flex flex-col justify-center">
            <Card color="transparent" shadow={false} className="mt-auto">
                <Typography variant="h4" color="black" className="text-center md:text-3xl lg:text-4xl">
                    Silakan Berikan Penilaian Anda
                </Typography>
                <Typography color="black" className="mt-1 font-normal text-center md:text-md lg:text-lg">
                    Informasi yang Anda berikan akan kami jaga
                </Typography>
                <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg md:w-[35rem] lg:w-[60rem] mx-auto">
                    <div className="mb-4 flex flex-col gap-6">

                        {/* Select Option */}
                        {/* <Select variant="outlined" label="Pilih Loket">
                            <Option>Budi</Option>
                            <Option>Kemala</Option>
                        </Select> */}

                        {/* Rating */}
                        <StarRating />

                        {/* Hidden */}
                        <input type="hidden" value={params.id} name="employee_id" />

                        {/* Advice */}
                        <Textarea onChange={handleChange} className="text-black" name="advice" value={advice} color="blue" variant="outlined" label="Kritik/Saran"/>
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>
                        Submit
                    </Button>
                </form>
            </Card>
            <Footer />
        </div>
    );
}
 
export default Form;