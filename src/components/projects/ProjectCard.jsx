import { ArrowUpRight } from "lucide-react";
export default function ProjectCard({ project }) {
    return (
        <div className="grid lg:grid-cols-2 gap-10 items-center rounded-lg border border-white/20">
            {/* Left Content */}
            <div className="p-8">
                <span className="inline-block mb-3 py-1  text-sm font-bold bg-[#31572C]/10 text-[#31572C]">
                    {project.category}
                </span>

                <h2 className="text-3xl font-bold mb-6">
                    {project.title.toUpperCase()}
                </h2>

                <ul className="space-y-2 text-sm mb-6 list-disc pl-5 marker:text-[#31572C]">
                    <li>
                        <span className="font-semibold">Client:</span> {project.client}
                    </li>
                    <li>
                        <span className="font-semibold">Location:</span> {project.location}
                    </li>
                    <li>
                        <span className="font-semibold">Budget:</span> {project.budget}
                    </li>
                </ul>

                <p className="text-zinc-400 mb-8">
                    {project.description}
                </p>

                {/* <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#31572C] text-white font-medium hover:bg-[#254622] transition">
                    Learn More
                    <ArrowUpRight size={16} />
                </button> */}
            </div>

            {/* Right Image */}
            <div className="h-[420px] bg-gray-200">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}