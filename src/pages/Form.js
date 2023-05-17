import {
    Card,
    Button,
    Typography,
    Select, 
    Option,
    Textarea
} from "@material-tailwind/react";

import Footer from '../components/Footer';

const Form = () => {
    return ( 
        <div className="min-h-screen flex flex-col justify-center">
            <Card color="transparent" shadow={false} className="mt-auto">
                <Typography variant="h4" color="black" className="text-center md:text-3xl lg:text-4xl">
                    Silakan Berikan Penilaian Anda
                </Typography>
                <Typography color="black" className="mt-1 font-normal text-center md:text-md lg:text-lg">
                    Informasi yang Anda berikan akan kami jaga
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg md:w-[35rem] lg:w-[60rem] mx-auto">
                    <div className="mb-4 flex flex-col gap-6">

                        {/* Select Option */}
                        <Select variant="outlined" label="Pilih Loket">
                            <Option>Budi</Option>
                            <Option>Kemala</Option>
                        </Select>

                        {/* Rating */}
                        <Select variant="outlined" label="Pilih Rating">
                            <Option>1</Option>
                            <Option>2</Option>
                            <Option>3</Option>
                            <Option>4</Option>
                        </Select>

                        {/* Advice */}
                        <Textarea color="blue" variant="outlined" label="Saran" />
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