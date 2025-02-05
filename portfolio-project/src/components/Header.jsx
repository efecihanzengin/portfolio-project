function Header() {
  const { translate } = useLanguage();
  const hero = translate("hero");
  return (
    <>
      <header className="font-Inter text-left pt-24 duration-500 bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B]">
        <div className="px-[18vw]">
          <div className="w-32 h-32 bg-[#D9D9D9] rounded-full -mt-36 ml-24"></div>
          <div className="flex flex-row justify-self-end mb-10">
            <ModeComponent />
            <p className="font-semibold mx-2 self-center">|</p>
            <LanguageChanger />
          </div>

          <div className="flex flex-col flex-wrap ">
            <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap justify-between lg:justify-self-start">
              <div className="bg-[#E92577] pt-4 pl-4 rounded-2xl max-w-64 min-w-56 min-h-44 max-h-64 flex m-10  ">
                <img
                  src={hero.profileImg}
                  className="rounded-2xl ms-1 -mb-2"
                ></img>
              </div>

              <div className="w-45">
                <h1 className="font-normal text-3xl leading-9 tracking-wide">
                  {hero.greeting}
                </h1>
                <div className="border-b-[24px] -ml-4 rounded-lg border-solid w-48 mt-16 border-[#E92577]"></div>
                <p className="text-5xl -mt-16 font-medium leading-snug tracking-normal">
                  {hero.profileName}
                  {hero.intro}
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-10">
              <a href={hero.linkedInLink}>
                {" "}
                <img
                  src={hero.linkedInSVG}
                  className="dark:stroke-[#2A262B] dark:fill-[#2A262B] mr-5"
                ></img>
              </a>
              <a href={hero.githubLink}>
                {" "}
                <img
                  src={hero.githubSVG}
                  className="dark:stroke-[#2A262B] dark:fill-[#2A262B]"
                ></img>
              </a>
            </div>
            <p className="mt-5 ">{hero.heroFooter}</p>
            <p>
              {hero.heroFooter2}
              <a
                className="text-[#E92577]"
                href={`mailto:${hero.heroFooterMail}`}
              >
                {hero.heroFooterMail}
              </a>
            </p>
          </div>
        </div>
        <div className="w-32 h-16  bg-[#EA2678] rounded-l-full place-self-end"></div>
        <div className="w-32 h-32 border-[16px] border-solid border-[#D9D9D9] rounded-full place-self-end mr-[25vw] -mb-16"></div>
      </header>
    </>
  );
}

export default Header;
