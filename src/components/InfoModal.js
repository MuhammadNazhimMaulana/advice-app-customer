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