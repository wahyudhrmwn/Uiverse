import React from 'react';
import Link from 'next/link';

interface ComponentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ComponentCard({ title, description, icon }: ComponentCardProps) {
  return (
    <Link href={`/components/${title.toLowerCase()}`} className="card bg-base-100 hover:shadow-xl transition-shadow">
      <div className="card-body">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-primary text-xl">
            {icon}
          </div>
          <h3 className="card-title">{title}</h3>
        </div>
        <p className="text-sm text-base-content/70">{description}</p>
      </div>
    </Link>
  );
} 