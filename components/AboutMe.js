import myInfo from "../constants/info";

export default function AboutMe() {
  return (
    <section>
      <div calssName="max-w-6xl mx-auto h-48">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-left md:text-center">
          About Me.
        </h1>
      </div>
      <div className="-mt-10">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}>
            {myInfo.about.title}.
          </p>
        </div>
      </div>
    </section>
  );
}
