import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import ContainerBlock from "../components/ContainerBlock";

export default function Home() {
  return (
    <>
      <ContainerBlock
        title="Hongbin's Space"
        description="This is Hongbin's personal website">
        <Hero />
      </ContainerBlock>
    </>
  );
}
