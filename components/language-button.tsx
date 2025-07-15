"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const LanguageChange = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="space-x-2 fixed bottom-4 right-4 rounded bg-black z-[500]">
            <Select onValueChange={changeLanguage} defaultValue={i18n.language} >
                <SelectTrigger className="w-32 rounded-[4px] !ring-0 hover:ring-1 focus:ring-1 bg-black text-white">
                    <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">{t('en')}</SelectItem>
                    <SelectItem value="vi">{t('vi')}</SelectItem>
                    <SelectItem value="fr">{t('fr')}</SelectItem>
                    <SelectItem value="de">{t('de')}</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
export default LanguageChange;