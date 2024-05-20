import { useState, useEffect } from "react";

export function useFetchAnswer(){
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState();
  
    const fetching = async () => {
      const response = await fetch(
        `https://groqapi-man.vercel.app/?q=${question}`
      );
      const data = await response.json();
      setAnswer(data.answer === 'tambahkan ?q= untuk memberikan pertanyaan' ? "haloo" : data.answer);
      console.log(data);
    };
  
    useEffect(() => {
      fetching();
    }, [question]);
  
    const Submited = (e) => {
      e.preventDefault();
      const value = e.target.querySelector("input").value;
      setQuestion(value);
    };

    return {Submited, answer}
}