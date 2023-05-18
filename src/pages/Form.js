import {useNavigate} from 'react-router-dom';
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
    const handleSubmit = event => {
        // No reset
        event.preventDefault();

        // Sending Data
        // Rating
        // console.log('value is:', event.target.rating.value);

        // advice
        // console.log('value is:', advice);

        // redirect to /contacts
        navigate('/thanks');
    };

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

                        {/* Advice */}
                        <Textarea onChange={handleChange} className="text-black" name="advice" value={advice} color="blue" variant="outlined" label="Saran"/>
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