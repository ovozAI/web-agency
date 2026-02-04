import DemoDetailPage from "@/components/DemoDetailPage";

export default function DemoDetail({ params }: { params: { slug: string } }) {
  return <DemoDetailPage locale="uz" slug={params.slug} />;
}
