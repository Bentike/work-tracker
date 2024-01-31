import Image from "next/image";
import clock from "../../assets/images/clock.png";
import SignUp from "@/components/signup";

const Home = () => {
  return (
    <div className="bg-[#F1EAEB] h-[100vh]">
      <div className="pt-20 text-center flex justify-center">
        <Image src={clock} alt="clock"/>
        <h1 className="text-black self-center font-bold text-4xl ml-2">WorkTracker</h1>
      </div>
      <SignUp/>
    </div>
  );
};

export default Home;
