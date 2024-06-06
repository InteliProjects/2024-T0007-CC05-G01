import { Dashboard } from "@/components/dashboard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ValeMax</title>
      </Head>
      <main className="relative flex justify-center items-center h-screen w-screen bg-gray-50">
        <div className="container h-full py-8">
          <div className="hidden h-full flex-col md:flex overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
            <Dashboard />
          </div>
        </div>
      </main>
    </>
  );
}
