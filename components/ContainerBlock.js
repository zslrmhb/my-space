import Head from "next/head";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Scene from "./Scene";
import { useRouter } from "next/router";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Hongbin's Personal Space",
    description: "Hongbin's Website",
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="w-screen h-screen">
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

      <main className="relative flex flex-col h-full p-9">
        <Scene />
        <Navbar />

        <div className="relative flex flex-row h-full z-10">
          <Sidebar />

          <div className=" w-4/6 flex h-full">{children}</div>
        </div>
      </main>
    </div>
  );
}
