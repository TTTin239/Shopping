import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

function ScrollToTop() {
    const [showButton, setShowButton] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300){
                setShowButton(true)
            }
            else {
                setShowButton(false)
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            {showButton && (
                <button style={{
                    position:'fixed', bottom: '40px',
                    background: 'orange', right: '20px',
                    fontSize: '3rem', cursor: 'pointer',
                    borderRadius: '100%', border: 'none',
                    color: 'white', boxShadow: '0 5px 10px #ccc',
                }}
                    onClick={scrollToTop}
                >
                    <FaArrowCircleUp/>
                </button>
            )}
        </>
    );
}

export default ScrollToTop;