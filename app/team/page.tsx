"use client"
import Image from "next/image";
import PageHeader from "@/components/header";
import Footer from "@/components/footer";
export default function Team() {
    const leaderData = [
        {
            imageUrl: 'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752744668/Phuong-e1722413304584_hhzcmm.webp',
            name: 'TA THI MY PHUONG',
            title: 'Chairwoman & CEO'
        },
        {
            imageUrl: 'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752748548/Minh-e1722413210603_kkokao.webp',
            name: 'Dr. MAI HUU MINH',
            title: 'Founder, Datascience, Technology, Finance'
        },
        {
            imageUrl: 'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752744667/beqholdings-Profile-e1722413264683_ibtwas.webp',
            name: 'VO DINH QUOC HUY',
            title: 'Founder, BOD, Leader of Financial & Investment'
        }
    ];

    const teamData = [
        {
            imageUrl: 'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752748914/OLIVIER-JACCQUOT_ybzzyb.webp',
            name: 'OLIVIER JACCQUOT',
            title: 'CMO Founder, All Sport Business and Thilleon'
        },
        {
            imageUrl: 'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752749610/af9d835a2e5b9e05c74a-e1742804257699-1024x819_xdt5dw.webp',
            name: 'PHAM TRUNG HIEU',
            title: 'Co-Founder, Chief Technology Officer'
        },
        {
            imageUrl: 'https://res.cloudinary.com/dyavs1cdn/image/upload/v1752748914/anh_thanh_mxg5ke.webp',
            name: 'TRAN HUY THANH',
            title: 'Co-Founder, Chief Operating Officer'
        }
    ];

    return (
        <div className="flex flex-col w-full">
            <div className="w-full flex relative mt-5">
                <div className="w-full flex flex-col items-center justify-center absolute top-0 z-20">
                    <PageHeader />
                </div>
            </div>
            <div className="flex md:py-24 py-12 w-full">
                <div className="md:text-[72px] text-[48px] font-bold mx-auto">Team</div>
            </div>
            <div className="flex flex-col max-w-[1300px] w-full mx-auto md:px-[63px] gap-10">
                <div className="flex flex-col w-full">
                    <div className="md:text-[36px] text-[32px] font-bold mx-auto mb-10">Our Leaders</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
                        {leaderData.map((leader, index) => (
                            <div key={index} className="flex flex-col md:w-[300px] mx-auto">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={leader.imageUrl}
                                        alt={`${leader.name} profile`}
                                        width={300}
                                        height={300}
                                        className="rounded-sm w-[300px] h-[300px] max-md:w-[350px] max-md:h-[350px]"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-1/9 duration-500 hover:h-1/5 bg-gradient-to-t from-[rgba(17,16,19,0.65)] via-[rgba(17,16,19,0.4)] to-transparent"></div>
                                </div>
                                <div className="p-4 text-white text-center md:mt-5">
                                    <div className="text-base font-bold text-[#BF9B30] hover:underline hover:cursor-pointer">
                                        <a href="">{leader.name}</a>
                                    </div>
                                    <p className="text-sm font-medium whitespace-nowrap">{leader.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-full"> 
                    <div className="md:text-[36px] text-[32px] font-bold mx-auto mb-10">Our Team</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
                        {teamData.map((leader, index) => (
                            <div key={index} className="flex flex-col md:w-[300px] mx-auto">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={leader.imageUrl}
                                        alt={`${leader.name} profile`}
                                        width={300}
                                        height={300}
                                        className="rounded-sm w-[300px] h-[300px] max-md:w-[350px] max-md:h-[350px]"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-1/9 duration-500 hover:h-1/5 bg-gradient-to-t from-[rgba(17,16,19,0.65)] via-[rgba(17,16,19,0.4)] to-transparent"></div>
                                </div>
                                <div className="p-4 text-white text-center md:mt-5">
                                    <div className="text-base font-bold text-[#BF9B30] hover:underline hover:cursor-pointer">
                                        <a href="">{leader.name}</a>
                                    </div>
                                    <p className="text-sm font-medium whitespace-nowrap">{leader.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}