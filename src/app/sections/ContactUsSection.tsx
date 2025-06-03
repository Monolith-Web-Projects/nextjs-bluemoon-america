import Image from "next/image";

export default function ContactUsSection() {
  return (
    <section>
      <div className="grid grid-cols-1 grid-rows-2 justify-items-center gap-5 px-5 sm:grid-cols-2 sm:grid-rows-1 sm:gap-5 md:gap-7 lg:gap-8 lg:px-52">
        <div className="row-start-2 flex flex-col justify-center p-5 text-center sm:col-start-1 sm:row-start-1 sm:text-left">
          <h3 className="text-3xl font-extrabold italic">You need help?</h3>
          <h4 className="mb-5 text-2xl font-semibold">
            Contact us and we will support you.
          </h4>
          <p className="mb-5 text-xl">
            You can find support through our customer ervice hotline or online
            chat. We also have a comprehensive FAQ section on our website. Our
            team is dedicated to assisting you with any inquiries.
          </p>
          <p className="text-1xl font-semibold">Contacts</p>
        </div>

        <div className="row-start-1 h-auto w-[350px] p-5 sm:col-start-2">
          <Image
            className="w-screen self-center overflow-hidden object-cover"
            src="/assets/lady_assistant.png"
            alt="hero01.png"
            width="2000"
            height="759"
          ></Image>
        </div>
      </div>
    </section>
  );
}
