import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const MiniPet = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const [isHit, setIsHit] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Random movement logic
    useEffect(() => {
        if (!isVisible || isDragging || isHit) return;

        const movePet = () => {
            const maxX = window.innerWidth - 100;
            const maxY = window.innerHeight - 100;

            const newX = Math.max(0, Math.min(Math.random() * maxX, maxX));
            const newY = Math.max(0, Math.min(Math.random() * maxY, maxY));

            setPosition({ x: newX, y: newY });
        };

        const interval = setInterval(movePet, 5000);
        return () => clearInterval(interval);
    }, [isVisible, isDragging, isHit]);

    const handleHit = () => {
        if (isDragging) return;
        setIsHit(true);
        // Reset hit state after 800ms (duration of the hit animation/gif)
        setTimeout(() => setIsHit(false), 800);
    };

    if (!isVisible) return null;

    return (
        <motion.div
            ref={containerRef}
            drag
            dragConstraints={{ left: 0, right: window.innerWidth - 80, top: 0, bottom: window.innerHeight - 80 }}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info) => {
                setIsDragging(false);
                setPosition(prev => ({
                    x: prev.x + info.offset.x,
                    y: prev.y + info.offset.y
                }));
            }}
            onClick={handleHit}
            animate={
                isHit
                    ? { x: [position.x, position.x - 10, position.x + 10, position.x - 10, position.x + 10, position.x] }
                    : isDragging ? undefined : { x: position.x, y: position.y }
            }
            transition={
                isHit
                    ? { duration: 0.4, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }
                    : isDragging ? { duration: 0 } : { duration: 4, ease: "linear" }
            }
            className="fixed top-0 left-0 z-[200] group cursor-grab active:cursor-grabbing"
            style={{ touchAction: "none" }}
        >
            <div className="relative p-4">
                {/* Close Button - Visible on hover */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsVisible(false);
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10"
                >
                    <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                </button>

                {/* Pet Body */}
                <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300 ${isHit ? 'bg-red-500/20 border-red-500 scale-110' : ' glow-purple border border-purple-400/30'}`}>
                        <img
                            src={isHit
                                ? "/pet_sad.png"
                                : "/pet_happy.png"}
                            alt="Mascota"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>

                    {/* Shadow */}
                    <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-2 bg-black/40 blur-sm rounded-full transition-all ${isHit ? 'w-14 opacity-60' : 'w-10 opacity-100'}`}></div>

                    {/* Speech Bubble */}
                    <div className={`absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-purple-100 ${isHit ? 'hidden' : ''}`}>
                        ¡Soy Castor-Bot! 🦫
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
