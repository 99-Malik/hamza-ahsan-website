import { Metadata } from "next";
import { AppliancePage } from "@/components/AppliancePage";
import { services, siteConfig } from "@/config/siteConfig";

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}): Promise<Metadata> {
  const { serviceId } = await params;
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const title = `${service.name} in ${siteConfig.locations} | Appliance Masters UAE`;
  const description = `Professional ${service.name.toLowerCase()} services in ${siteConfig.locations}. Same-day service, certified technicians, genuine parts. Call ${siteConfig.phoneNumber} for expert repair.`;

  return {
    title,
    description,
    keywords: [
      `${service.name.toLowerCase()}`,
      `${service.name.toLowerCase()} repair`,
      `${service.name.toLowerCase()} service`,
      `appliance repair ${siteConfig.locations}`,
      `${service.name.toLowerCase()} ${siteConfig.locations}`,
      "appliance repair Dubai",
      "appliance repair Abu Dhabi",
      ...service.commonIssues.map(issue => `${service.name.toLowerCase()} ${issue.toLowerCase()}`),
    ].join(", "),
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_AE",
    },
    alternates: {
      canonical: `/appliance/${serviceId}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;
  return <AppliancePage serviceId={serviceId} />;
}

