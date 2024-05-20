import { useState, useEffect } from "react";

export function useFetchAnswer(){
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState();
  
    const fetching = async () => {
      const response = await fetch(
        `https://groqapi-man.vercel.app/?q=${question}`
      );
      const data = await response.json();
     validation(data.answer)
    };
  
    useEffect(() => {
      fetching();
    }, [question]);
  
    const Submited = (e) => {
      e.preventDefault();
      const value = e.target.querySelector("input").value;
      setQuestion(value);
    };

    const validation = (e) => {
        if (e === 'tambahkan ?q= untuk memberikan pertanyaan' ) {
            setAnswer('haiii kamu gimana kabarnya? mau nanya apa nihh 😘');
        }else {
          setAnswer(e);
        }
    }

    return {Submited, answer}
}