import { LuLayoutTemplate } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import TemplateCard from "@/components/TemplateCard";

const templates = [
  {
    title: "Inventory Web App",
    description: "Dashboard template for inventory management",
    image: "/images/templates/inventory.jpg",
    isDesktop: true,
    isPro: true
  },
  {
    title: "Wireframe Cycle Tracking App",
    description: "Mobile app template for cycle tracking",
    image: "/images/templates/cycle-app.jpg",
    isMobile: true,
    isPro: true
  },
  {
    title: "Real Estate Web",
    description: "Modern real estate website template",
    image: "/images/templates/real-estate.jpg",
    isMobile: true,
    isPro: true
  },
  {
    title: "Wireframe Pizza Delivery Web",
    description: "Food delivery website template",
    image: "/images/templates/pizza.jpg",
    isDesktop: true,
    isPro: true
  },
  {
    title: "Secret Santa",
    description: "Holiday themed landing page",
    image: "/images/templates/santa.jpg",
    isDesktop: true,
    isPro: true
  },
  {
    title: "Google Material Design Template",
    description: "Material Design 3 components",
    image: "/images/templates/material.jpg",
    isMobile: true,
    isPro: true
  },
  {
    title: "Food UI Kit",
    description: "Complete UI kit for food apps",
    image: "/images/templates/food-kit.jpg",
    isDesktop: true,
    isPro: true
  },
  {
    title: "Material Design 3 UI Kit",
    description: "Modern Material Design components",
    image: "/images/templates/material-kit.jpg",
    isDesktop: true,
    isPro: true
  }
];

export default function TemplatePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-box p-8 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Find the best template for your project</h1>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="input input-bordered w-full pr-10 bg-base-100/10 backdrop-blur border-white/20 text-white placeholder-white/70"
            />
            <FiSearch className="absolute right-3 top-3 w-5 h-5 text-white/70" />
          </div>
          
          <div className="mt-4 text-white/90">
            Can't find the template you're looking for?{" "}
            <Link href="#" className="btn btn-sm bg-white/20 hover:bg-white/30 border-0 gap-2 ml-2">
              Generate it with Autodesigner
              <span className="badge badge-sm">Beta</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">All Templates</h2>
          <div className="flex gap-2">
            <button className="btn btn-sm btn-primary">All Devices</button>
            <button className="btn btn-sm btn-ghost">Desktop</button>
            <button className="btn btn-sm btn-ghost">Tablet</button>
            <button className="btn btn-sm btn-ghost">Mobile</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <TemplateCard 
              key={index}
              {...template}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 