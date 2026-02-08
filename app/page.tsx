import { getAllSentences } from "@/lib/data";
import Timeline from "@/components/Timeline";

export default async function Home() {
  const sentences = await getAllSentences();

  return <Timeline initialSentences={sentences} />;
}
