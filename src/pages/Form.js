import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

import Footer from '../components/Footer';

const Form = () => {
    return ( 
        <div className="min-h-screen flex flex-col justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="white" className="text-center">
                    Silakan Berikan Penilaian Anda
                </Typography>
                <Typography color="white" className="mt-1 font-normal text-center">
                    Informasi yang Anda berikan akan kami jaga
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input color="white" size="lg" label="Name" />
                        <Input color="white" size="lg" label="Email" />
                        <Input color="white" type="password" size="lg" label="Password" />
                    </div>
                    <Button className="mt-6" fullWidth>
                        Submit
                    </Button>
                </form>
                </Card>
            <Footer />
        </div>
    );
}
 
export default Form;