import { ChatsIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const HomeSection11 = () => {
    const { t } = useTranslation()
    return (
        <section className="w-full mx-auto flex flex-col items-center justify-between py-8 md:py-8">
            <div className="h-[30vh] md:h-[550px] w-full overflow-hidden relative">
                <Image src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752457607/shutterstock_311313911-1_pibshj.jpg"
                    alt="Section11-top Image"
                    fill
                    className="object-fill w-full h-[20%] "
                />
            </div>
            <div className="flex flex-col md:flex-row w-full justify-center items-center bg-[#BF9B30]">
                <div className="h-[30vh] md:h-[480px] md:w-1/2 w-full relative">
                    <Image src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752457636/TongTheNgay02_R4_Vuong_dl6yq3.jpg"
                        alt="Section11-left Image"
                        fill
                        className="object-fill w-full "
                    />
                </div>
                <div className="flex flex-col gap-8 md:w-1/2 md:px-16 px-8 py-8 w-full z-10">
                    <div className="flex flex-col gap-4 ">
                        <p className=" w-16 h-16 bg-[#9690a226] p-4 rounded-full flex items-center justify-center">
                            <ChatsIcon size={32} weight="fill" className="rounded-md" />
                        </p>
                        <h4 className="md:text-[1.25rem] text-[calc(1.25rem + 0 * ((100vw - 576px) / 864))] font-bold mb-2"
                            style={{ lineHeight: '1.05' }}>
                            {t('section11_title')}
                        </h4>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[1.025rem] font-thin mb-4 w-full">
                            <p >
                                {t('section11_addr')}                            </p>
                            <strong>{t('section11_country')}</strong>
                        </span>
                        <span className="text-[1.025rem] font-thin mb-4 w-full">
                            {t('section11_phone')}
                        </span>
                        <span className="text-[1.025rem] font-thin mb-4 w-full">
                            {t('section11_email')}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeSection11;