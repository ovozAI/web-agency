import { Metadata } from "next";
import DemoDetailPage from "@/components/DemoDetailPage";
import { demos } from "@/content/demos";
import { siteConfig } from "@/content/site";

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const demo = demos.find((d) => d.slug === params.slug);
  if (!demo) return {};

  const title = demo.title.uz;
  const description = demo.description.uz;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.baseUrl}/demos/${params.slug}`,
      languages: {
        uz: `${siteConfig.baseUrl}/demos/${params.slug}`,
        ru: `${siteConfig.baseUrl}/ru/demos/${params.slug}`,
      },
    },
    openGraph: {
      title: `${title} | pixel24`,
      description,
      url: `${siteConfig.baseUrl}/demos/${params.slug}`,
      ...(demo.preview && {
        images: [{ url: demo.preview, alt: title }],
      }),
    },
  };
}

export default function DemoDetail({ params }: { params: { slug: string } }) {
  return <DemoDetailPage locale="uz" slug={params.slug} />;
}
