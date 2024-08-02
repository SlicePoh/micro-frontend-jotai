import React, {  useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";

export const TextReveal = () => {
    // const [loading, setLoading] = useState(true);
    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null)
    const quote = useRef(null)
    const wholeText = useRef(null)
    const blueText = useRef(null)
    const cursor = useRef(null)
    const animatedText = useRef(null)
    

    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger);
    const text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."

    const words= [
        "GSAP",
        "Framer Motion",
        "AOS",
        "Three.js",
        "Anime.js"
    ]
    const { contextSafe } = useGSAP(() => {
        gsap.registerPlugin(TextPlugin)
        gsap.to(cursor.current,{
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: "power2.inOut"
        })

        let masterTL= gsap.timeline({repeat: -1})
        words.forEach((word) => {
            let textTL= gsap.timeline({repeat: 1, yoyo : true});
            textTL.to("#animatedText",{
                duration: 1,
                text: word,
            })
            masterTL.add(textTL)
        });
        gsap.to(
            lettersRef.current, {
            scrollTrigger: {
                trigger: triggerRef.current,
                scrub: true,
                start: "top 20%",
                end: "bottom 50%",
                // markers: true
            },
            color: "#2A2A2A",
            duration: 5,
            stagger: 1.5,
        }
        )

    },{scope: wholeText.current});

    const textShine=contextSafe(()=>{
        console.log("hey1");
        gsap.to(blueText.current,{
            color: "rgb(12 74 110 1)",
            duration: 0.5,
            ease: "power2.inOut"
        })
    })
    const textShrink=contextSafe(()=>{
        console.log("hey2");
        gsap.to(blueText.current,{
            color: "rgb(14 165 233 1)",
            duration: 0.5,
            ease: "power2.inOut"
        })
    })

    return (
        <div className="bg-[#FEF852] font-sans min-h-screen w-full flex flex-col gap-5 justify-center items-center">
            <div ref={wholeText}>
                <div ref={blueText} onMouseEnter={textShine} onMouseLeave={textShrink} className="reveal bg-gradient-to-r from-sky-100 to-sky-300 p-40 flex items-center justify-center text-center text-sky-500 font-extrabold text-6xl">
                    <div ref={quote} id="quote" className="reveal-text mr-2 ">
                        Show Case :  
                    </div>
                    <div ref={animatedText} id="animatedText" className="reveal-text"> </div>
                    <div ref={cursor} className="">_</div>
                </div>
                <div className="spacing-small h-[30vh]"></div>
                <div className="reveal bg-[#FFFC94]  p-28 flex items-center justify-center text-center">
                    <div ref={triggerRef}>
                        {text.split("").map((text, index) => (
                            <span className="reveal-text font-extrabold text-8xl text-[#FEF852]" key={index} ref={setlettersRef}>
                                {text}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="spacing h-screen"></div>
            </div>
        </div>
    )
}
