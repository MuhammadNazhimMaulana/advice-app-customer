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
        <div className="relative h-full w-full">
            <button className="absolute top-0 right-0 h-16 w-16 " onClick={handleOpen}><FaInfoCircle /></button>
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
          <DialogHeader>Informasi</DialogHeader>
          <DialogBody divider>
            The key to more success is to have a lot of pillows. Put it this way, it took me
            twenty five years to get these plants, twenty five years of blood sweat and tears, and
            I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
            luv.
          </DialogBody>
          <DialogFooter>

            {/* Close Button */}
            <Button
              color="black"
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