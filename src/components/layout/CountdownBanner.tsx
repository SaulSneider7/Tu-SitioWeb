import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import pricingConfig from "../../pricing-config.json";

export const CountdownBanner = () => {
    const { discount } = pricingConfig;
    const targetDate = new Date(discount.endDate).getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!discount.enabled) return null;

    return (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-900 via-purple-600 to-blue-900 text-white h-[96px] md:h-[48px] flex items-center z-[70] overflow-hidden border-b border-white/10">
            <div className="max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center animate-pulse">
                        <FontAwesomeIcon icon={faCode} className="text-yellow-400" />
                    </div>
                    <p className="font-black text-sm md:text-base uppercase tracking-wider">
                        ¡OFERTA ESPECIAL! <span className="text-yellow-400">{discount.percentage}% OFF</span> EN TODOS LOS PLANES
                    </p>
                </div>

                <div className="flex items-center gap-4 font-mono text-sm md:text-lg">
                    <div className="flex flex-col items-center">
                        <span className="font-black leading-none">{timeLeft.days}</span>
                        <span className="text-[10px] uppercase opacity-60">Días</span>
                    </div>
                    <span className="opacity-40">:</span>
                    <div className="flex flex-col items-center">
                        <span className="font-black leading-none">{timeLeft.hours}</span>
                        <span className="text-[10px] uppercase opacity-60">Hrs</span>
                    </div>
                    <span className="opacity-40">:</span>
                    <div className="flex flex-col items-center">
                        <span className="font-black leading-none">{timeLeft.minutes}</span>
                        <span className="text-[10px] uppercase opacity-60">Min</span>
                    </div>
                    <span className="opacity-40">:</span>
                    <div className="flex flex-col items-center">
                        <span className="font-black leading-none">{timeLeft.seconds}</span>
                        <span className="text-[10px] uppercase opacity-60">Seg</span>
                    </div>
                </div>

                <div className="hidden lg:block text-xs font-bold bg-black/30 px-3 py-1 rounded-full border border-white/10">
                    Válido hasta el {new Date(discount.endDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}
                </div>
            </div>
        </div>
    );
};
