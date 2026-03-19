import { Hero } from "../components/sections/Hero";
import { PromoSection } from "../components/sections/PromoSection";
import { Services } from "../components/sections/Services";
import { Process } from "../components/sections/Process";
import { Pricing } from "../components/sections/Pricing";
import { AdditionalServices } from "../components/sections/AdditionalServices";
import { BeatQuote } from "../components/sections/BeatQuote";
import { FAQ } from "../components/sections/FAQ";
import { Reveal } from "../components/ui/Reveal";

export const HomePage = () => {
    return (
        <main>
            <Hero />
            <Reveal><PromoSection /></Reveal>
            <Reveal><Services /></Reveal>
            <Reveal><Process /></Reveal>
            <Reveal><Pricing /></Reveal>
            <Reveal><AdditionalServices /></Reveal>
            <Reveal><FAQ /></Reveal>
            <Reveal><BeatQuote /></Reveal>
        </main>
    );
};
