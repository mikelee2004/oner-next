import Catalog from "@/components/Catalog";
import "./globals.css";
import { Banner } from "@/components/Banner/Banner";


export default function Home() {
  return (
    <div>
      <Banner />
      <Catalog />
    </div>
      
  );
}
