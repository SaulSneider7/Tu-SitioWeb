import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import pricingConfig from "../../pricing-config.json";

export const CountdownBanner = () => {
    const { discount } = pricingConfig;
    const targetDate = new Date(discount.endDate).getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
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

    const isoDate = new Date(discount.endDate).toISOString();

    return (
        <aside
            className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-900 via-purple-600 to-blue-900 text-white h-[96px] md:h-[48px] flex items-center z-[70] overflow-hidden border-b border-white/10"
            aria-label="Promoción por tiempo limitado"
        >
            <div className="max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center animate-pulse" aria-hidden="true">
                        <FontAwesomeIcon icon={faBolt} className="text-yellow-400" />
                    </div>
                    <strong className="font-black text-xs md:text-sm uppercase tracking-wider text-center md:text-left">
                        Oferta de Lanzamiento: <span className="text-yellow-400">{discount.percentage}% de Descuento</span> en Desarrollo Web
                    </strong>
                </div>

                {/* CONTADOR COMPLETO */}
                <div
                    className="flex items-center gap-4 font-mono text-sm md:text-lg"
                    aria-label={`La oferta termina en ${timeLeft.days} días, ${timeLeft.hours} horas y ${timeLeft.minutes} minutos`}
                >
                    {/* Días */}
                    <div className="flex flex-col items-center">
                        <span className="font-black leading-none">{timeLeft.days}</span>
                        <span className="text-[10px] uppercase opacity-60">Días</span>
                    </div>
                    <span className="opacity-40" aria-hidden="true">:</span>

                    {/* Horas - AGREGADO */}
                    <div className="flex flex-col items-center">
                        <span className="font-black leading-none">{timeLeft.hours}</span>
                        <span className="text-[10px] uppercase opacity-60">Hrs</span>
                    </div>
                    <span className="opacity-40" aria-hidden="true">:</span>

                    {/* Minutos - AGREGADO */}
                    <div className="flex flex-col items-center">
                        <span className="font-black leading-none">{timeLeft.minutes}</span>
                        <span className="text-[10px] uppercase opacity-60">Min</span>
                    </div>
                    <span className="opacity-40" aria-hidden="true">:</span>

                    {/* Segundos */}
                    <div className="flex flex-col items-center">
                        <span className="font-black leading-none">{timeLeft.seconds}</span>
                        <span className="text-[10px] uppercase opacity-60">Seg</span>
                    </div>
                </div>

                <div className="hidden lg:block text-[10px] font-bold bg-black/30 px-3 py-1 rounded-full border border-white/10">
                    Expira el: <time dateTime={isoDate}>
                        {new Date(discount.endDate).toLocaleDateString('es-PE', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}
                    </time>
                </div>
            </div>
        </aside>
    );
};
