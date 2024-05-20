import React from "react";

const FormInput = ({ Submited }) => {
  return (
    <form action="" onSubmit={Submited} className="flex items-center gap-6">
      <input
        type="search"
        name=""
        id=""
        placeholder="Ask me anything"
        className="font-semibold text-white w-full px-4 py-2 ring-2 outline-none bg-neutral-900 ring-neutral-950 rounded-lg"
      />
      <button
        type="submit"
        className="bg-white rounded-lg px-4 py-2 text-lg text-neutral-900 font-semibold"
      >
        tanyain
      </button>
    </form>
  );
};

export default FormInput;
