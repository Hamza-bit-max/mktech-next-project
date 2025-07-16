// import { HeroSection } from "@/components/blocks/HeroSection";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
async function loader() {
    const data = await getHomePage();
    if (!data) notFound();
    console.log(data);
    return { ...data.data };
}

export default async function Home() {
    const data = await loader();
    const blocks = data?.blocks || [];
    console.log(data);
    return (
    <div>
     <h1>{data.Title}</h1>
     <p>{data.description}</p>
     <HeroSection {...blocks[0]} />
    </div>
 );
}