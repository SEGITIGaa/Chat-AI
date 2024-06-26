import React from "react";

const FormInput = ({ Submited }) => {
  return (
    <form action="" onSubmit={Submited} className="flex items-center gap-4 w-full">
      <input
        type="search"
        name=""
        id=""
        placeholder="ask to usep"
        className="font-semibold text-neutral-900 bg-neutral-700 w-full p-4 outline-none rounded-xl"
      />
      <button
        type="submit"
        className="bg-neutral-200 rounded-xl p-3 ring-2 ring-white text-lg text-neutral-900 font-semibold"
      >
       <img width="32" height="32" src="https://img.icons8.com/fluency-systems-filled/96/sent.png" alt="sent" className="-rotate-45"/>
      </button>
    </form>
  );
};

export default FormInput;
