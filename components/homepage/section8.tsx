import Image from "next/image";

const linkLogo = [
    {
        link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227425/BEQ-HOLDINGS-logo-dark-768x713_bk9h40.webp",
        address: "",
    },
    {
        link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227423/BeQNFT-den_adrc58.webp",
        address: "",
    },
    {
        link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227422/BeShareShare_l3hfni.webp",
        address: "",
    },
    {
        link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227422/CCPR-nen-trang_q8ynec.webp",
        address: "",
    },
    {
        link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227421/CCPI-logo-Copy_lum9ps.webp",
        address: "",
    },
    {
        link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227420/CCPS-final-768x572_aocpkr.webp",
        address: "",
    },
    {
        link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227418/logoFire_mysjmb.webp",
        address: "",
    },
    {
        link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227417/TheIPOTimes-logo_l9uu5u.webp",
        address: "",
    },
    {
        link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227416/logo_beq_family-removebg-preview_tcecqs.webp",
        address: "",
    },
    {
        link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227415/IFRC_duoplz.webp",
        address: "",
    },
    {
        link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227415/TheXMagic_ss5omq.webp",
        address: "",
    },
    {
        link: "https://res.cloudinary.com/drkr1i9yz/image/upload/v1752227415/womenceo-Million-Dream-Font-RGB_pfyk3y.png",
        address: "",
    }
]
const HomeSection8 = () => {
    return (
        <section className="py-8 w-full mx-auto">
            <h2 className="text-center text-[3.25rem] font-bold mb-8"
                style={{
                    lineHeight: '3.5rem',
                }}
            >
                Our Group
            </h2>
            <div 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 w-full max-w-[1400px] mx-auto max-h-[800px] overflow-y-scroll lg:overflow-clip">
                {
                    linkLogo.map((item, index) => (
                        <LogoContainer key={index} link={item.link} address={item.address} />
                    ))
                }
            </div>
        </section>
    )
}

export default HomeSection8;

const LogoContainer = ({ link , address}: { link: string , address: string }) => {
    return (
        <div 
        onClick={() => {
            if (address) {
                window.open(address, '_blank');
            }
        }}
        className="flex cursor-pointer items-center justify-center w-[75px] h-[75px] md:w-[150px] md:h-[150px] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500">
            <Image src={link} alt="Group Logo" width={150} height={150} className="object-cover" />
        </div>
    )
}