import Image from "next/image"

const HomeSection6 = () => {
    return (
        <section className="w-full mx-auto flex flex-col md:flex-row items-center justify-between py-8 md:py-16 h-[600px]">
            <div className="md:w-[60%] w-full h-[480px] relative">
                <Image src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752202482/oh__img136_cqhfo3.jpg"
                    alt="Section6_l Image"
                    fill
                    className="object-cover w-full h-[480px] md:w-1/2 md:h-[480px] z-0"
                />
            </div>
            <div className="md:w-[40%] w-full h-[480px] relative hidden md:block">
                <Image src="https://res.cloudinary.com/drkr1i9yz/image/upload/v1752202515/wceo_012_1200_80pc-1024x576_a5rhct.jpg"
                    alt="Section6_r Image"
                    fill
                    className="object-cover w-full h-[480px] md:w-1/2 md:h-[480px] z-0"
                />
            </div>
        </section>
    )
}
export default HomeSection6;