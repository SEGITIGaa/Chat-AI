import { useFetchAnswer } from "../functions/func";
import FormInput from "../components/FormInput";

const Home = () => {
 const {Submited, answer} = useFetchAnswer()
  return (
    <div className="flex flex-col py-10 items-center bg-neutral-900 h-screen justify-end px-5">
        <div className="flex items-start justify-start w-full gap-5 h-[584px] overflow-scroll">
            <img src="/icon.jpeg" alt="" className="h-10 w-10 rounded-full"/>
            <div className="max-w-96 rounded-xl p-5 bg-neutral-700">
                <p className="text-white text-lg font-regular">{answer}</p>
            </div>
        </div>
        <FormInput Submited={Submited}/>
    </div>
  );
};

export default Home;
