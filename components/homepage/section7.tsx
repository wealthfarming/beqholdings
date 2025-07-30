import { IntersectSquareIcon, StackIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const HomeSection7 = () => {
  const { t } = useTranslation()
  return (
    <section className="w-full mx-auto flex flex-col items-center justify-between py-12 md:py-24 px-12">
      <div className="flex flex-col md:flex-row lg:w-5/6 w-full gap-24">
        <div className="flex flex-col gap-16 md:w-[40%] w-full">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="inline-flex">
              <IntersectSquareIcon size={48} color="#BF9B30" />
              <h4
                className="md:text-[3.5rem] text-[2.5rem] font-bold mb-3 ml-3"
                style={{ lineHeight: "3.5rem" }}
              >
                40+
              </h4>
            </div>
            <p className="text-[1.25rem] font-bold text-[#82838A]">
              {t('section7_yoe')}
            </p>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <h6 className="text-[1.1rem] font-thin mb-6 capitalize">
              {t('section7_tag')}
            </h6>
            <h4
              className="md:text-[2.75rem] text-[2.25rem] font-bold mb-3"
              style={{ lineHeight: "1.15" }}
            >
              {t('section7_title_1')}
            </h4>
          </div>
          <p className="text-[1.5rem] font-bold text-[#82838A]">
            {t('section7_des_1')}
          </p>
        </div>
        <div className="flex flex-col gap-16 md:w-[50%] w-full">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="inline-flex">
              <StackIcon size={48} color="#BF9B30" />
              <h4
                className="md:text-[3.5rem] text-[2.5rem] font-bold mb-3 ml-3"
                style={{ lineHeight: "3.5rem" }}
              >
                22889 +
              </h4>
            </div>
            <p className="text-[1.25rem] font-bold text-[#82838A]">
              {t('section7_index')}
            </p>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <h6 className="text-[1.1rem] font-thin mb-6 capitalize">
              {t('section7_tag')}
            </h6>
            <h4
              className="md:text-[2.75rem] text-[2.25rem] font-bold mb-3"
              style={{ lineHeight: "1.15" }}
            >
              {t('section7_title_2')}
            </h4>
          </div>
          <p className="text-[1.5rem] font-bold text-[#82838A]">
            {t('section7_des_2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection7;