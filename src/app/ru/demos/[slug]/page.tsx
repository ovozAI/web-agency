import DemoDetailPage from "@/components/DemoDetailPage";

export default function DemoDetailRu({ params }: { params: { slug: string } }) {
  return <DemoDetailPage locale="ru" slug={params.slug} />;
}
