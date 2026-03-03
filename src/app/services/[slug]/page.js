import { servicesData } from "@/data/servicesData";
import ServiceSidebar from "@/components/Services/ServiceSidebar";
import ServiceDetailContent from "@/components/Services/ServiceDetailContent";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) return notFound();

  return (
   <>
    <PageHero
    image="/images/about-us-2.jpg"
    imageAlt="Aluminox services — facade and glazing solutions"
    title={service.title}
    text={service.shortDescription}
  />
    <div className="bg-page subtle-grid-bg min-h-screen">
        
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 grid lg:grid-cols-3 gap-12">
        <ServiceSidebar currentSlug={slug} />
        <ServiceDetailContent service={service} />
      </div>
    </div>
    <Footer />
   </>
  );
}