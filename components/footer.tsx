"use client";
import FooterData from "@/data/footer.json";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { API_URL } from "@/lib/config";
import { toast } from "sonner";

interface ErrorResponse {
  errors?: Array<{
    name: string;
    data: {
      collection: string;
      errors: Array<{
        field: string;
        message: string;
      }>;
    };
    message: string;
  }>;
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/contact`, { email });
      toast.success(t("submit_contact"));
      setEmail("");
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      console.error(
        "Error submitting form:",
        axiosError.response?.data ||
          axiosError.message ||
          "An unexpected error occurred"
      );

      if (axiosError.response && axiosError.response.data) {
        const errorData = axiosError.response.data;

        if (errorData.errors && Array.isArray(errorData.errors)) {
          const error = errorData.errors[0];
          if (error.message === "The following field is invalid: email") {
            toast.error(t("email_invalid"));
            return;
          }
        }
      }
      toast.error(t("submit_error"));
    }
  };

  return (
    <footer className="bg-inherit text-white px-5 md:px-10 lg:px-40 pt-16 lg:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <Image
            alt="BEQ Holdings Logo"
            src="https://beqholdings.com/wp-content/uploads/2023/04/BEQ-HOLDINGS-logo-dark.png"
            width={100}
            height={100}
            className="mb-2"
          />
        </div>

        {/* Company Address Section */}
        <div className="flex flex-col gap-4">
          <div className="text-white font-bold text-base pb-2">{FooterData.companyName}</div>
          {FooterData?.address.map((address, index) => (
            <div key={index} className="flex flex-col justify-start text-base">
              <div className="text-[#BF9B30] font-bold">{address.region}:</div>
              <div className="text-white/80">{address.details}</div>
            </div>
          ))}
        </div>

        {/* Work Inquiries Section */}
        <div className="flex flex-col gap-4">
          <div className="text-white font-bold text-base pb-2">{t("work_inquiries")}</div>
          <div className="text-base">
            <div className="text-white/80">{t("work_with_us")}</div>
            <a href={`mailto:${FooterData.email}`} className="text-[#BF9B30] hover:underline">
              {FooterData.email}
            </a>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="flex flex-col gap-4">
          <div className="text-white font-bold text-base pb-2">{t("sign_up_for")}</div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex space-x-2">
              <Input
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[#9690A214] border-none text-white placeholder:text-white/50 focus:ring-0 focus:ring-offset-0"
              />
              <Button
                type="submit"
                className="bg-[#9690A214] hover:bg-[#9690A20F] text-white"
              >
                {t("sign_up")}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="py-8 border-t border-white/10 text-sm text-white/70">
        © 2016-2023 <span className="text-[#BF9B30]">BeQ Holdings.</span> All rights reserved
      </div>
    </footer>
  );
}