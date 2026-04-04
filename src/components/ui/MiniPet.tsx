import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const MiniPet = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const [isHit, setIsHit] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const lastPlayRef = useRef(0);

    // Inicializar audio
    useEffect(() => {
        audioRef.current = new Audio("/ouch.mp3");
        audioRef.current.volume = 0.7;
    }, []);

    // Movimiento automático
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

    // Click (golpe + sonido)
    const handleHit = () => {
        if (isDragging) return;

        const now = Date.now();
        if (now - lastPlayRef.current < 400) return; // evita spam

        lastPlayRef.current = now;

        setIsHit(true);

        // AUDIO
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => { });
        }

        // Vibración en móvil (opcional PRO)
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }

        setTimeout(() => setIsHit(false), 800);
    };

    if (!isVisible) return null;

    return (
        <motion.div
            drag
            dragConstraints={{
                left: 0,
                right: typeof window !== "undefined" ? window.innerWidth - 80 : 0,
                top: 0,
                bottom: typeof window !== "undefined" ? window.innerHeight - 80 : 0
            }}
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
                    ? { x: [position.x, position.x - 10, position.x + 10, position.x] }
                    : isDragging ? undefined : { x: position.x, y: position.y }
            }
            transition={
                isHit ? { duration: 0.4 } : isDragging ? { duration: 0 } : { duration: 4, ease: "linear" }
            }
            className="fixed top-0 left-0 z-[200] group cursor-grab active:cursor-grabbing"
            style={{ touchAction: "none" }}
            // SEO: Elemento decorativo invisible para lectores de pantalla y bots
            role="presentation"
            aria-hidden="true"
        >
            <div className="relative p-4">
                {/* BOTÓN CERRAR: Añadimos título para accesibilidad aunque esté oculto para bots */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsVisible(false);
                    }}
                    title="Cerrar mascota"
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10"
                >
                    <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                </button>

                <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300 
                        ${isHit ? 'bg-red-500/20 border-red-500 scale-110' : 'glow-purple border border-purple-400/30'}`}
                    >
                        {/* SEO: alt="" vacío indica que la imagen es decorativa */}
                        <img
                            src={isHit ? "/pet_sad.png" : "/pet_happy.png"}
                            alt=""
                            loading="lazy"
                            className="w-full h-full object-cover pointer-events-none"
                        />
                    </div>

                    <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-2 bg-black/40 blur-sm rounded-full transition-all 
                        ${isHit ? 'w-14 opacity-60' : 'w-10 opacity-100'}`}
                    ></div>

                    {/* BURBUJA: Usamos un span para evitar etiquetas pesadas */}
                    <span className={`absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-purple-100 
                        ${isHit ? 'hidden' : ''}`}
                    >
                        ¡Soy Castor-Bot! 🦫
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                    </span>
                </div>
            </div>
        </motion.div>
    );
};