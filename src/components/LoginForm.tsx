import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckboxWithText } from "./CheckBox";
import Phone from "./Phone";
import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { LuLifeBuoy } from "react-icons/lu";
import { CiUser } from "react-icons/ci";

export function LoginForm() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild className="cursor-pointer">
          <div className="flex flex-col leading-tighty items-center justify-center ">
            <CiUser className="size-6 " />
            <div>Login</div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[480px] max-h-[493px] flex flex-col items-center bg-zinc-800  ">
          <div className="">{<Logo />}</div>
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center text-xl text-white">
              Login with mobile number
            </DialogTitle>
            <DialogDescription className="text-gray-400 ">
              Please select your country and enter mobile number
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 w-[300px] ">
            <Phone />
          </div>
          <div>
            <CheckboxWithText />
          </div>
          <DialogFooter className="">
            <Button className="w-[400px] bg-[#E11D48] text-xs" type="submit">
              Continue
            </Button>
          </DialogFooter>
          <div className="grid grid-cols-3 w-auto gap-3  items-center">
            <div className="border-b "></div>
            <div className="text-xs text-gray-400">Or continue with</div>
            <div className="border-b"></div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Button className="bg-transparent border  border-zinc-700 hover:bg-zinc-700">
              <FcGoogle />
              Google
            </Button>
            <Button className="bg-transparent border  border-zinc-700 hover:bg-zinc-700">
              <FaFacebook className="text-blue-500" /> Facebook
            </Button>
            <Button className="bg-transparent border  border-zinc-700 hover:bg-zinc-700">
              <MdEmail className="text-blue-500 " />
              Email
            </Button>
          </div>
          <div className="flex justify-end items-center text-xs  w-full p-4 text-gray-400 gap-0.5 ">
            <LuLifeBuoy /> Help
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
