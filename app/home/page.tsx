'use client';
import LanguageChange from '@/components/language-button';
import { useTranslation } from 'react-i18next';
import HomeSection1 from '@/components/homepage/section1';
import HomeSection2 from '@/components/homepage/section2';
import HomeSection3 from '@/components/homepage/section3';
import HomeSection4 from '@/components/homepage/section4';
import HomeSection5 from '@/components/homepage/section5';
import HomeSection6 from '@/components/homepage/section6';
import HomeSection7 from '@/components/homepage/section7';
import HomeSection8 from '@/components/homepage/section8';
import HomeSection9 from '@/components/homepage/section9';
import HomeSection10 from '@/components/homepage/section10';
import HomeSection11 from '@/components/homepage/section11';
import HomeSection12 from '@/components/homepage/section12';
const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
            <LanguageChange />
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
            <HomeSection5 />
            <HomeSection6 />
            <HomeSection7 />
            <HomeSection8 />
            <HomeSection9 />
            <HomeSection10 />
            <HomeSection11 />
            <HomeSection12 />
        </div>
    );
}

export default HomePage;