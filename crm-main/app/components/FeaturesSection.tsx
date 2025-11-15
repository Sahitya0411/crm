import React from 'react';
import { Lightbulb, CalendarCheck, Clock, Search } from 'lucide-react'; // Using lucide-react for icons

type IconType = React.ElementType | { default: React.ElementType };

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const IconComp = (icon as any)?.default ?? icon;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="text-blue-600 mb-4"><IconComp size={48} /></div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Lightbulb}
            title="Intuitive Simplicity"
            description="Say goodbye to cluttered interfaces. Our clean design makes managing tasks a breeze."
          />
          <FeatureCard
            icon={CalendarCheck}
            title="Smart Automation"
            description="Auto-collect tasks and prevent conflicts by syncing with your calendars and apps."
          />
          <FeatureCard
            icon={Clock}
            title="Boost Your Focus"
            description="Timely nudges, manageable steps, and smart predictions help you conquer procrastination."
          />
          <FeatureCard
            icon={Search}
            title="Powerful Insights"
            description="Track every step, predict task times, and search all your content with ease."
          />
        </div>
      </div>
    </section>
  );
}