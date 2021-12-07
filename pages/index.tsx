import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Sidebar />
    </div>
  );
};

export default Home;
