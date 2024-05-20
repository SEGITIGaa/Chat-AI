import { useFetchAnswer } from "../functions/func";
import FormInput from "../components/FormInput";

const Home = () => {
 const {Submited, answer} = useFetchAnswer()
  return (
    <div className="flex flex-col items-center h-max justify-start px-2 gap-4 pt-4 bg-neutral-900">
    <h1 className="text-neutral-200 font-semibold font-clash">Usep AI</h1>
        <div className="flex items-start p-1 justify-start w-full gap-5 h-[634px] pt-5 overflow-scroll">
            <img src="/icon.jpeg" alt="" className="h-10 w-10 rounded-full object-cover ring-2"/>
            <div className="max-w-72 rounded-xl p-5 bg-neutral-700">
                <p className="text-white text-sm md:text-lg font-regular">{answer}</p>
            </div>
        </div>
        <FormInput Submited={Submited}/>
    </div>
  );
};

export default Home;
