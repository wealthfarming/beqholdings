"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        newsletter: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        let checkedValue: boolean | undefined;

        if (type === "checkbox") {
            checkedValue = (e.target as HTMLInputElement).checked;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checkedValue : value,
        }));
    };

    return (
        <div className="flex flex-col w-full items-center">
            <div
                className="w-full md:h-[500px] max-md:h-[366px] "
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/dyavs1cdn/image/upload/v1752744668/oh__img93_utatxd.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="mt-5 flex justify-center">
                    <Header />
                </div>
                <div className="flex md:w-[1260px] md:px-5 mx-auto md:py-24 h-full">
                    <div className="flex flex-col max-md:mx-5 max-md:py-12 h-full justify-end">
                        <div className="text-[72px] max-md:text-[48px] font-bold tracking-[-3.24px]">Contact us</div>
                        <div className="text-white opacity-75 text-[17px]">
                            Leave us a little info, and we’ll be in touch.
                        </div>
                        <div className="bg-[#BF9B30] px-3 py-1 text-base font-bold mt-5 rounded size-max">
                            Send Us an email
                        </div>
                    </div>
                </div>
                <div className="bg-[#111111] max-md:rounded-2xl max-md:pt-[-120px]">
                    <div>
                        <Image
                            src={"https://res.cloudinary.com/dyavs1cdn/image/upload/v1752827000/TongTheNgay02_R4_Vuong_tmvaxu.webp"}
                            alt=""
                            width={1000}
                            height={1072}
                            className="md:w-full md:h-[1072px] w-[390px] h-[219px] md:mt-[177px] mt-[110px]"
                        >
                        </Image>
                    </div>
                    <div className=" text-white py-[10px] mt-[70px]">
                        <form className="md:max-w-[1260px] mx-auto space-y-6">
                            {/* Desktop Layout */}
                            <div className="max-md:hidden md:grid md:grid-cols-3 gap-6">
                                <div className="p-5">
                                    <label className="block mb-2">Name (required)</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-[#1c1b1d] rounded"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="p-5">
                                    <label className="block mb-2">Company (required)</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-[#1c1b1d] rounded"
                                        placeholder="Your company name"
                                        required
                                    />
                                </div>
                                <div className="p-5">
                                    <label className="block mb-2">Email (required)</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-[#1c1b1d] rounded"
                                        placeholder="Your working email"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Mobile Layout */}
                            <div className="grid md:grid-cols-3 md:hidden">
                                <div className="p-5">
                                    <label className="block mb-2">Name (required)</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-[#1c1b1d] rounded"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="p-5">
                                    <label className="block mb-2">Company (required)</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-[#1c1b1d] rounded"
                                        placeholder="Your company name"
                                        required
                                    />
                                </div>
                                <div className="p-5">
                                    <label className="block mb-2">Email (required)</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-[#1c1b1d] rounded"
                                        placeholder="Your working email"
                                        required
                                    />
                                </div>
                                <div className="p-5">
                                    <label className="block mb-2">Phone (optional)</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-[#1c1b1d] rounded"
                                        placeholder="Your actual phone number"
                                    />
                                </div>
                                <div className="p-5">
                                    <label className="block mb-2">Email Subject (optional)</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-[#1c1b1d] rounded"
                                        placeholder="Choose a subject"
                                    />
                                </div>
                                <div></div>
                            </div>
                            <div className="p-5">
                                <label className="block mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-[#1c1b1d] rounded h-32"
                                    placeholder="Anything specific you want to know or inform us about?"
                                />
                            </div>
                            <div className="flex items-center p-5">
                                <input
                                    type="checkbox"
                                    name="newsletter"
                                    checked={formData.newsletter}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <span>I want to receive news and product emails.</span>
                            </div>


                            <button className="bg-[#BF9B30] h-[48px] w-[94px] px-4 rounded flex items-center justify-center ml-5">
                                <div className="text-base font-bold">Submit</div>
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}