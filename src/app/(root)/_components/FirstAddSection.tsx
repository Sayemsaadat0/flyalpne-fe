import Image from 'next/image';

const FirstAddSection = () => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row gap-5 items-center ">
        <div className="overflow-hidden rounded-[15px] w-full h-full cursor-pointer">
          <Image
            src="/add.png"
            alt="Luxa Dark Chocolate"
            width={800}
            height={400}
            className=" scale-110 hover:scale-100 w-full object-cover aspect-[2/1] transition-all duration-700"
          />
        </div>
        <div className="overflow-hidden rounded-[15px] w-full h-full cursor-pointer">
          <Image
            src="/add.png"
            alt="Luxa Dark Chocolate"
            width={800}
            height={400}
            className=" scale-110 hover:scale-100 w-full object-cover aspect-[2/1] transition-all duration-700"
          />
        </div>
        <div className="overflow-hidden rounded-[15px] w-full h-full cursor-pointer">
          <Image
            src="/add.png"
            alt="Luxa Dark Chocolate"
            width={800}
            height={400}
            className=" scale-110 hover:scale-100 w-full object-cover aspect-[2/1] transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstAddSection;
