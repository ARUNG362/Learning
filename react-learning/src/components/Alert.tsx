import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props  {
    children: ReactNode
}

function Alert({ children } : Props){
    const [message, setMessage] = useState(null);
    useEffect(() => {
        const abortFetch = new AbortController();
        setTimeout(() => {
            fetch("https://dog.ceo/api/breeds/list/all", { signal: abortFetch.signal })
            .then((data) => data.json().then(res => {
                console.log(res);
                setMessage(res.status)
            }))
            .catch(err => {
                if(err.name == "AbortError"){
                    console.log("err0r",err)
                }
            })
        }, 5000)
        
        return () => abortFetch.abort("Pagination");
    }, [])
    return (
        <div className="alert alert-secondary" role="alert">
            {children}
            {message}
            <Link to="/about">About</Link>
        </div>
    )
}

export default Alert;