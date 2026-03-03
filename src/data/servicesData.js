import {
    Calculator,
    Search,
    ClipboardCheck,
    ShieldAlert,
    Briefcase,
    DraftingCompass,
    Building,
    ShoppingCart,
  } from "lucide-react";
  
  export const servicesData = [
    {
      slug: "cost-consultancy",
      title: "Cost Consultancy",
      shortDescription:
        "Expert financial planning and cost control to ensure construction projects stay within budget.",
      intro:
        "Strategic financial planning and cost management ensuring every project remains financially controlled from inception to completion.",
      overview:
        "Our cost consultancy services are designed to align construction objectives with financial efficiency. We develop structured budgeting frameworks, perform detailed cost evaluations, and implement proactive cost control strategies. By continuously monitoring financial performance, we minimize overruns and enhance project value without compromising quality.",
      image: "/images/services/service-1.jpg",
      icon: Calculator,
      subServices: [
        "Budgeting",
        "Cost Engineering",
        "Value Engineering",
        "Estimation",
        "Cost Control",
      ],
    },
  
    {
      slug: "facade-inspection",
      title: "Façade Inspection",
      shortDescription:
        "Comprehensive façade inspections to ensure safety, compliance, and long-term structural performance.",
      intro:
        "Detailed façade evaluations ensuring structural integrity, compliance, and long-term durability.",
      overview:
        "We conduct thorough façade inspections to assess structural stability, environmental resistance, and performance efficiency. Our reports provide actionable insights that improve building safety, enhance energy efficiency, and maintain regulatory compliance. Through systematic inspections, we help extend the lifespan of building exteriors.",
      image: "/images/services/service-2.jpg",
      icon: Search,
      subServices: [
        "Conditional Survey",
        "Snag List Preparation",
        "Leakage Inspection",
        "Thermal Inspection",
        "Acoustic Inspection",
        "Structural Evaluation",
      ],
    },
  
    {
      slug: "quantity-survey",
      title: "Quantity Survey",
      shortDescription:
        "Accurate material estimation and financial forecasting for efficient project execution.",
      intro:
        "Precise quantity assessment ensuring accurate budgeting and transparent cost control.",
      overview:
        "Our quantity surveying services provide accurate material take-offs, cost documentation, and financial forecasting. We ensure clarity in resource allocation and minimize discrepancies during project execution. By maintaining financial transparency, we support better decision-making and optimized resource utilization.",
      image: "/images/services/service-3.jpg",
      icon: ClipboardCheck,
      subServices: [
        "Material Take Off",
        "Site Measurements",
        "Bill of Quantity",
        "Bill of Materials",
        "Glass Take Off",
      ],
    },
  
    {
      slug: "risk-assessment",
      title: "Risk Assessment",
      shortDescription:
        "Identifying potential risks in projects and implementing preventive strategies.",
      intro:
        "Proactive risk identification ensuring secure and stable project execution.",
      overview:
        "Our risk assessment services systematically identify vulnerabilities across project phases. We evaluate potential threats, categorize risk levels, and provide actionable mitigation plans. This structured approach ensures operational continuity, regulatory compliance, and minimized disruptions.",
      image: "/images/services/service-4.jpg",
      icon: ShieldAlert,
      subServices: [
        "Risk Identification",
        "MSRA Preparation",
        "Risk Categorisation",
      ],
    },
  
    {
      slug: "risk-management",
      title: "Risk Management",
      shortDescription:
        "Strategic planning and monitoring to minimize project risks and maximize safety.",
      intro:
        "Comprehensive risk strategies designed to maintain safety and protect project objectives.",
      overview:
        "We implement structured risk management frameworks that monitor and control potential threats throughout the construction lifecycle. Our services ensure compliance with regulatory standards while maintaining safety, financial control, and operational efficiency.",
      image: "/images/services/risk-management-service.jpg",
      icon: Briefcase,
      subServices: [
        "Risk Assessment Implementation",
        "MSRA Compliance",
        "Risk Mitigation",
        "Risk Containment",
        "Regulatory Compliance",
      ],
    },
  
    {
      slug: "procurement-advise",
      title: "Procurement Advise",
      shortDescription:
        "Guidance on efficient procurement processes to ensure timely acquisition of quality materials.",
      intro:
        "Strategic procurement planning ensuring timely sourcing and cost efficiency.",
      overview:
        "Our procurement advisory services optimize supply chains and vendor coordination. We focus on negotiation strategies, alternate sourcing, and material prioritization to prevent delays and maintain construction momentum. This approach enhances quality control while reducing procurement risks.",
      image: "/images/services/service-6.jpg",
      icon: ShoppingCart,
      subServices: [
        "Supply Chain Identification",
        "Material Sourcing",
        "Negotiation",
        "Alternate Material Identification",
        "Procurement Prioritization",
      ],
    },
  
    {
      slug: "design-and-engineering",
      title: "Design & Engineering",
      shortDescription:
        "Innovative architectural and engineering solutions for modern construction challenges.",
      intro:
        "Integrated design and engineering solutions combining creativity with structural precision.",
      overview:
        "From concept development to advanced structural calculations, our design and engineering services ensure functional, safe, and sustainable outcomes. We provide detailed drawings, BIM modelling, and technical documentation to support seamless project execution.",
      image: "/images/services/design-and-engineering.jpg",
      icon: DraftingCompass,
      subServices: [
        "Concept Development",
        "Shop Drawing Preparation",
        "Structural Calculations",
        "Fabrication Drawings Preparation",
        "As Built Drawing Preparation",
        "BIM Modelling",
        "Thermal Calculations",
        "Acoustic Calculations",
      ],
    },
  
    {
      slug: "project-management",
      title: "Project Management",
      shortDescription:
        "Professional project coordination ensuring timely delivery and quality results.",
      intro:
        "End-to-end project coordination ensuring efficient planning, execution, and delivery.",
      overview:
        "Our project management services integrate timeline supervision, documentation control, and stakeholder coordination. We ensure projects are delivered on time, within scope, and in compliance with quality standards. Through active site supervision and consistent communication, we maintain transparency and accountability throughout the project lifecycle.",
      image: "/images/services/project-management-service.jpg",
      icon: Building,
      subServices: [
        "Project Planning",
        "Sample Submissions",
        "Document Submissions",
        "Site Supervision",
        "Liaising with Clients",
      ],
    },
  ];