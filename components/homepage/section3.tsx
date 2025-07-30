'use client';
import { ChatTextIcon, CirclesThreePlusIcon, SelectionAllIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const HomeSection3 = () => {

    const { t } = useTranslation()

    return (
        <section className="px-8 py-8 md:py-16 flex flex-col md:flex-row w-full max-w-[1400px] mx-auto gap-28">
            <div className="md:w-5/12 w-full">
                <h6 className="text-[.9rem] font-thin mb-4 capitalize">
                    {t('section3_tag')}
                </h6>
                <h2 className="md:text-[3.25rem] text-[3rem] font-bold mb-2"
                    style={{
                        lineHeight: '3.5rem',
                    }}
                >
                    {t('section3_main_title')}
                </h2>

            </div>
            <div className="md:w-7/12 w-full ">
                <h6 className="text-[.9rem] font-thin mb-4 capitalize">
                    {t('section3_tag_2')}
                </h6>
                <div className="flex flex-col md:flex-row items-start justify-between w-full gap-4">

                    <div className="flex flex-col items-start justify-center w-full md:w-1/2 gap-8 text-start text-[#82838A]">

                        <div className="flex flex-col items-start justify-center w-full gap-4 text-start">
                            <div className="flex flex-col items-start justify-center w-full gap-1 text-start">
                                <SelectionAllIcon size={36} />
                                <h5 className="text-[1.25rem] font-bold text-[#BF9B30]">
                                    {t('section3_article_1_title')}
                                </h5>
                            </div>
                            <p>
                                {t('section3_article_1_des')}
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-4 text-start text-[#82838A]">
                            <div className="flex flex-col items-start justify-center w-full gap-1 text-start">
                                <CirclesThreePlusIcon size={36} />
                                <h5 className="text-[1.25rem] font-bold  text-[#BF9B30]">
                                    {t('section3_article_2_title')}
                                </h5>
                            </div>
                            <p>
                                {t('section3_article_2_des')}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full md:w-1/2 gap-4 text-start text-[#82838A]">
                        <div className="flex flex-col items-start justify-center w-full gap-1 text-start">
                            <ChatTextIcon size={36} />
                            <h5 className="text-[1.25rem] font-bold  text-[#BF9B30]">
                                {t('section3_article_3_title')}
                            </h5>
                        </div>

                        <div className="flex flex-col items-start justify-center w-full gap-2 text-start">
                            <p className="text-[1.025rem] font-bold ">
                                {t('section3_article_3_sub_title_1')}
                            </p>
                            <p className="text-[1.025rem] font-bold">
                                {t('section3_article_3_sub_title_2')}
                            </p>

                            <p className="text-[1.025rem] ">
                                {t('section3_article_3_des_1')}
                            </p>
                            <p className="text-[1.025rem]">
                                {t('section3_article_3_des_2')}
                            </p>
                            <p className="text-[1.025rem]">
                                {t('section3_article_3_des_3')}                            </p>
                            <p className="text-[1.025rem] mb-2">
                                {t('section3_article_3_des_4')}                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
export default HomeSection3;