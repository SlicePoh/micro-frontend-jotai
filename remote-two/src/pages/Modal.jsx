import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap'
import { RxCross2 } from "react-icons/rx";

export const Modal = () => {
    const container = useRef();
    const modal = useRef();
    const show = useRef();
    const zoom = useRef();
    const flip = useRef();
    const [modalShow, setModalShow] = useState(false)

    const { contextSafe } = useGSAP(() => {
        gsap.registerPlugin(Draggable);
        Draggable.create(show.current, {
            type: 'x',
            dragResistance: 0.6,
            inertia: true,
        });
        Draggable.create(zoom.current, {
            type: 'rotation',
            inertia: true,
        });
        Draggable.create(flip.current, {
            type: 'scroll',
            inertia: true,
        });
        
    }, { scope: container });

    const hoverEnter = contextSafe(() => {
        console.log("cross enter");
        gsap.to(".cross", {
            scale: 1.4,
            duration: 0.6,
            ease: 'power3.inOut',
            rotate: 90
        })
    })

    const hoverLeave = contextSafe(() => {
        console.log("cross leave");
        gsap.to(".cross", {
            scale: 1,
            duration: 0.6,
            ease: 'power3.inOut',
            rotate: -90
        })
    })

    const danceText = contextSafe(() => {

        const boxes = document.querySelectorAll('.box');
        const tl = gsap.timeline();

        boxes.forEach((box, index) => {
            tl.to(box, {
                y: -40,
                duration: 0.5,
                opacity: 0.8,
                ease: 'power3.inOut',
                stagger: 0.1,
                onComplete: () => {
                    // Reset the position after the animation
                    gsap.to(box, {
                        y: 10,
                        duration: 0.5,
                        opacity: 1,
                        ease: 'power3.out',
                    });
                },
            }, index * 0.1);
        });
    });

    const slideIn = contextSafe(() => {

        setModalShow(!modalShow);

        let rotatetl = gsap.timeline();
        rotatetl.fromTo(modal.current, {
            opacity: 0,
            x: -1000,
        }, {
            opacity: 0.8,
            x: 0,
            ease: "power2.inOut",
            duration: 1.5,
            zIndex: 20
        })
            .to('.box', {
                duration: 0.8,
                rotation: 360,
                opacity: 1,
                stagger: 0.1,
                ease: 'power2.out',

            });
        gsap.to(show.current, {
            zIndex: 0
        })

        // Clear the rotation property before applying the new animation
        gsap.set('.box', { clearProps: 'rotation' })
    })

    const zoomIn = contextSafe(() => {

        setModalShow(!modalShow)

        let zoomtl = gsap.timeline();
        zoomtl.fromTo(modal.current, {
            css: {
                opacity: 0,
                width: "100px",
                height: "100px"
            },

        }, {
            duration: 1.5,
            css: {
                opacity: 0.8,
                width: "600px",
                height: "450px",
                zIndex: 20,
            },

            ease: "back.out"
        })
            .to('.box', {
                duration: 0.8,
                rotation: 360,
                stagger: 0.1,
                ease: 'sine.inOut',
                force3D: true,
            });
        gsap.to(zoom.current, {
            zIndex: 0
        })
        // Clear the rotation property before applying the new animation
        gsap.set('.box', { clearProps: 'rotation' });

    })
    
    const flipIn = contextSafe(() => {

        setModalShow(!modalShow)

        let fliptl = gsap.timeline();
        fliptl.fromTo(modal.current, {
            css: {
                rotationY: 90,
                opacity: 0,
            },

        }, {

            duration: 1.5,
            css: {
                opacity: 0.8,
                zIndex: 20,
                rotationY: 0
            },
            ease: "back.out"
        })
            .to('.box', {
                duration: 0.8,
                rotation: 360,
                opacity: 1,
                stagger: 0.1,
                ease: 'sine.inOut',
                force3D: true,
            })
            .to(flip.current, {
                zIndex: 0
            })

        // Clear the rotation property before applying the new animation
        gsap.set('.box', { clearProps: 'rotation' });

    })



    return (
        <div ref={container} className=" min-h-screen w-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex gap-5 justify-center items-center">
            <div ref={modal} style={{ display: !modalShow ? 'none' : 'flex' }} className="fixed z-10 justify-between flex-col items-center modal w-[600px] h-[450px] text-4xl rounded-xl bg-green-300 pb-20 p-5 text-center">
                <div className=" w-full flex justify-end">
                    <RxCross2 onClick={() => setModalShow(!modalShow)} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave} className='cross' />
                </div>
                <div onClick={danceText} className=" text-5xl font-bold flex gap-1">
                    <div className="box ">M</div>
                    <div className="box ">y</div>
                    <div className="box ml-2">M</div>
                    <div className="box ">o</div>
                    <div className="box ">d</div>
                    <div className="box ">a</div>
                    <div className="box ">l</div>
                </div>
            </div>
            <div ref={show} onClick={slideIn} className="cursor-pointer z-0 rounded-2xl font-semibold text-2xl h-24 w-36 bg-gray-800 text-white flex justify-center items-center text-center shadow-white shadow-inner">Slide in</div>
            <div ref={zoom} onClick={zoomIn} className="cursor-pointer z-0 rounded-2xl font-semibold text-2xl h-24 w-36 bg-gray-800 text-white flex justify-center items-center text-center shadow-white shadow-inner">Zoom in</div>
            <div ref={flip} onClick={flipIn} className="cursor-pointer z-0 rounded-2xl font-semibold text-2xl h-24 w-36 bg-gray-800 text-white flex justify-center items-center text-center shadow-white shadow-inner">Flip in</div>
        </div>
    )
}