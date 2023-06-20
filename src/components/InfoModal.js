import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { FaInfoCircle } from 'react-icons/fa';

const InfoModal = () => {
    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);
   
    return (
      <Fragment>

        {/* Set Up The Button */}
        <div className="flex h-full w-full justify-end mb-3">
            <p className="hover:cursor-pointer" onClick={handleOpen}><FaInfoCircle /></p>
        </div>


        {/* Information */}
        <Dialog 
          className="w-screen min-w-[60%] max-w-[60%]"
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader className="text-center">Informasi</DialogHeader>
          <DialogBody divider>

            {/* Kalimat Informasi */}
            <p className="text-black mb-5 text-justify">Penilaian yang dilakukan sebatas pelayanan dari petugas loket kami, berikut gambaran lebih jelasnya mengenai setiap pilihan yang ada:</p>

            {/* Table Informasi */}
            <table className="w-full text-black">
            <tbody>
                <tr>
                  <td>&#128526; (Recommended)</td>
                  <td className="text-center">Sangat Puas</td>
                </tr>
                <tr>
                  <td>&#128537; (Memuaskan)</td>
                  <td className="text-center">Memuaskan</td>
                </tr>
                <tr>
                  <td>&#128513; (Sesuai Janji)</td>
                  <td className="text-center">Cukup Puas</td>
                </tr>
                <tr>
                  <td>&#128557; (Tidak Puas)</td>
                  <td className="text-center">Tidak Puas</td>
                </tr>
                <tr>
                  <td>&#128561; (Kriminal)</td>
                  <td className="text-center">Sangat Tidak Puas</td>
                </tr>
              </tbody>
            </table>
          </DialogBody>
          <DialogFooter>

            {/* Close Button */}
            <Button
              onClick={handleOpen}
              className="mr-1 w-full"
            >
              <span>Tutup</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    );
}
 
export default InfoModal;