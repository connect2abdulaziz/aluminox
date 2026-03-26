import { servicesData } from "@/data/servicesData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Aluminox",
      description:
        "The requested Aluminox service page could not be found.",
    };
  }

  return {
    title: `${service.title} | Aluminox`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailLayout({ children }) {
  return children;
}
