import gsap from "gsap"
import { motion } from "motion/react";
import { useRef, useState } from "react";

const Limited_Discount = () => {
    const box = useRef(null);
    const notification = useRef(null);
    const icon_cross = useRef(null);
    const icon_discount = useRef(null);
    
    const [ opened, set_opened ] = useState(false);

    const handleOpen = () => {
        if ( !box?.current ) {
            return ;
        }
        const gtl = gsap.timeline();
        gtl.to(
            box?.current,
            {
                scale: 1,
                opacity: 1,
                duration: 0.2,
            },
            "ek"
        ).to(
           ".velocity_text",
            {
                delay: 0.1,
                translateX: 0,
                ease: "elastic.out(1.2,0.6)",
                duration: 0.6
            },
            "ek"
        ).to(
            [ icon_cross?.current ],
            {
                scale: 1,
                duration: 0.2,
            },
            "ek"
        ).to(
            [notification?.current, icon_discount?.current],
            {
                scale: 0,
                duration: 0.2,
            },
            "ek"
        )
    }
    const handleClose = () => {
        if ( !box?.current ) {
            return ;
        }
        const gtl = gsap.timeline();
        gtl.to(
            box?.current,
            {
                scale: 0,
                opacity: 0,
                duration: 0.2,
            },
            "ek"
        ).to(
            ".velocity_text",
            {
                translateX: 40,
            },
            "ek"
        ).to(
            [ icon_cross?.current],
            {
                scale: 0,
                duration: 0.2
            },
            "ek"
        ).to(
            [icon_discount?.current, notification?.current],
            {
                scale: 1,
                duration: 0.2,
            },
            "ek"
        )
    }

    const handleClick = () => {
        if ( opened ) {
            set_opened(false);
            handleClose();
        } else {
            set_opened(true);
            handleOpen();
        }
    }

    return (
        <div className="relative">
            <div ref={box} className="absolute overflow-hidden flex justify-between items-center p-[10px] sm:gap-[10px] -translate-y-full -top-[8px] sm:-top-[30px] rounded-[12px] right-0 w-[400px] max-sm:w-[300px] bg-zinc-100 shadow-sm shadow-gray-400 opacity-0 scale-0 origin-bottom-right ">
                <div className="col-span-3 velocity_text translate-x-[40px] text-neutral-600 max-sm:text-[16px] text-[24px] flex justify-center items-center h-[40px] sm:h-[60px]  sm:pl-[4px]">
                    10 % OFF with code 
                </div>
                <div className="bg-neutral-400 velocity_text translate-x-[40px] font-semibold text-[16px] sm:text-[20px] flex flex-row justify-center items-center h-[40px] sm:h-[60px] max-sm:px-2 px-[8px] text-neutral-600 col-span-2 rounded-[8px] ">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
                    &nbsp;
                    VELOCITY
                </div>
            </div>
            <div className="rounded-[12px] bg-zinc-300 p-[10px] w-[300px] flex flex-col gap-[10px] ">
                <div className="grid grid-cols-4 gap-[10px]  ">
                    <div className="col-span-3 shadow-sm shadow-gray-400 h-[60px] rounded-[12px]  bg-red-600">

                    </div>
                    <motion.div 
                        whileTap={{
                            scale: 0.85
                        }}
                        transition={{
                            duration: 0.2,
                            ease: 'easeIn'
                        }}
                        onClick={handleClick} className="col-span-1 relative shadow-sm h-[60px] cursor-pointer shadow-gray-400 text-red-600 flex justify-center items-center rounded-[12px] bg-zinc-100 "
                    >
                        <div ref={notification} className="absolute -top-[8px] -right-[8px] bg-red-600 h-[26px] w-[26px] rounded-full text-white font-bold flex justify-center items-center font-mono">1</div>
                        <svg ref={icon_discount}  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler absolute icons-tabler-filled icon-tabler-rosette-discount"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.01 2.011c.852 0 1.668 .34 2.267 .942l.698 .698a1.2 1.2 0 0 0 .845 .349h1a3.2 3.2 0 0 1 3.2 3.2v1c0 .316 .126 .62 .347 .843l.698 .698a3.2 3.2 0 0 1 .002 4.536l-.698 .698a1.2 1.2 0 0 0 -.349 .845v1a3.2 3.2 0 0 1 -3.2 3.2h-1a1.2 1.2 0 0 0 -.843 .347l-.698 .698a3.2 3.2 0 0 1 -4.536 .002l-.698 -.698a1.2 1.2 0 0 0 -.845 -.349h-1a3.2 3.2 0 0 1 -3.2 -3.2v-1a1.2 1.2 0 0 0 -.347 -.843l-.698 -.698a3.2 3.2 0 0 1 -.002 -4.536l.698 -.698a1.2 1.2 0 0 0 .349 -.845v-1l.005 -.182a3.2 3.2 0 0 1 3.195 -3.018h1a1.2 1.2 0 0 0 .843 -.347l.698 -.698a3.2 3.2 0 0 1 2.269 -.944m2.49 10.989a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m1.207 -4.707a1 1 0 0 0 -1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6 -6a1 1 0 0 0 0 -1.414m-6.207 -.293a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3" /></svg>
                        <svg style={{ scale: 0 }} ref={icon_cross}  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler absolute icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </motion.div>
                </div>
                <div className="grid grid-cols-4 gap-[10px]">
                    <div className="col-span-1 h-[60px] rounded-[12px]  bg-transparent">

                    </div>
                    <div className="col-span-3 shadow-sm shadow-gray-400 h-[60px] rounded-[12px] bg-zinc-100 ">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Limited_Discount