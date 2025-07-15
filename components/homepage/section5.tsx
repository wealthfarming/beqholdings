import { useState } from "react";
import { Progress } from "../ui/progress";
import { useEffect } from "react";

const project = [
    {
        lable: "Cloud Computing Platform for Research (CCPR)",
        value: 65,
    },
    {
        lable: "Cloud Computing Platform for Investment (CCPI)",
        value: 60,
    },
    {
        lable: "Cloud Computing Platform for Strategies (CCPS)",
        value: 30,
    },
    {
        lable: "Cloud Computing Platform for Education (CCPE)",
        value: 25,
    },
    {
        lable: "Cooperation, technology transfer and research",
        value: 20,
    },
]
const toppic = [
    "Data Center",
    "Web Services",
    "Cloud Computing",
    "Research",
    "Investment",
    "Strategies",
    "Education",
    "Society",
]
const HomeSection5 = () => {
    return (
        <section className="w-full mx-auto flex flex-col items-center justify-between py-8 md:py-16">
            <div className="flex flex-col md:flex-row w-7/8 md:w-6/8 mx-auto gap-16">
                <div className="md:w-[65%] w-full text-start items-start justify-center flex flex-col gap-8">
                    <h2 className="text-[3rem] font-bold mb-2 text-center"
                        style={{
                            lineHeight: '3.5rem',
                        }}
                    >
                        Big Data
                    </h2>
                    <h6 className="text-[1.025rem] font-bold text-[#82838A] text-start mb-4">
                        BeQ Holdings with over 40 years of experience understands big data, data science, data analytics, financial markets and business intelligence to help you make informed investment decisions.
                    </h6>
                    <div className="flex flex-col items-start justify-center w-[85%]     gap-4">
                        {project.map((item, index) => (
                            <ProjectRate key={index} lable={item.lable} value={item.value} />
                        ))}
                    </div>
                </div>
                <div className="md:w-[35%] w-full flex flex-col items-start justify-center gap-5">
                    {toppic.map((item, index) => (
                        <div key={index} className="flex flex-col items-start justify-start w-full gap-4 text-start text-[#82838A]">
                            <h4 className="text-[1.75rem] font-bold mb-2 text-start text-[#BF9B30]"
                                style={{
                                    lineHeight: '1.75rem',
                                }}
                            >
                                {item}
                            </h4>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
export default HomeSection5;


const ProjectRate = ({ lable, value }: { lable: string, value: number }) => {
    const [processValue, setProcessValue] = useState(value);
    useEffect(() => {
        let start = 0;
        const stepTime = 50;
        const increment = 2;

        const interval = setInterval(() => {
            start += increment;
            if (start >= value) {
                setProcessValue(value);
                clearInterval(interval);
            } else {
                setProcessValue(Math.round(start));
            }
        }, stepTime);

        return () => clearInterval(interval);
    }, [value]);
    return (
        <div className="flex flex-col items-start justify-center w-full gap-2">
            <h6 className="text-[1.025rem] font-bold text-[#82838A]">
                {lable}
            </h6>
            <div className="w-full flex flex-row items-center justify-between gap-4">
                <Progress value={processValue} />
                <span className="text-[1.025rem] font-bold text-[#82838A]">
                    {processValue}%
                </span>
            </div>
        </div>
    );
}