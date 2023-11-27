export default function Menu() {
    return (
        <>
            <div className="w-[1440px] h-[87px] relative flex-col justify-start items-start inline-flex">
                <div className="w-[1440px] h-[87px] bg-white" />
                <div className="w-[66px] h-[60.66px] relative">
                    <div className="w-[59.57px] h-[52.29px] left-[3.15px] top-[8.37px] absolute text-center text-red-700 text-5xl font-bold font-['Roboto']">S</div>
                    <div className="w-[66px] h-[60.42px] left-0 top-0 absolute text-center text-black text-6xl font-bold font-['Roboto']">M</div>
                </div>
                <div className="w-[146px] h-[43px] text-black text-4xl font-light font-['Blinker'] tracking-widest">portfólio</div>
            </div>
        </>
    )
}