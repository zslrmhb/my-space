import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Scene from "./Scene";
import Footer from "./Footer";
import profilePic from "public/profile.png";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Hongbin Miao's Space",
    description: "Hongbin's Website",
    image: profilePic,
    type: "website",
    ...customMeta,
  };

  return (
    <div className>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Hongbin" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      {/* <main className="relative  flex flex-col p-9 w-screen h-screen"></main> */}
      <main className="w-full">
        <Navbar />
        {/* <Scene /> */}
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
