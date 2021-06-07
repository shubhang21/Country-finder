import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

import SearchBox from "../components/SearchBox";
import CountryTable from "../components/CountryTable";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchBox />
      <CountryTable />
    </div>
  );
}
