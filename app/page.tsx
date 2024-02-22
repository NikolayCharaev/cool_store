import Image from "next/image";
import Provider from "@/components/Provider";
import Header from "@/components/Header";
export default function Home() {
  return (
    <Provider>
      <Header/>
    </Provider>
  );
}
