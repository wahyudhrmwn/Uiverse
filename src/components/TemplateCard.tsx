interface TemplateCardProps {
  title: string;
  description: string;
  image: string;
  isDesktop?: boolean;
  isMobile?: boolean;
  isPro?: boolean;
}

export default function TemplateCard({ 
  title, 
  description, 
  image,
  isDesktop,
  isMobile,
  isPro = false
}: TemplateCardProps) {
  return (
    <div className="card bg-base-100 hover:shadow-xl transition-shadow">
      <figure className="relative aspect-[4/3] w-full overflow-hidden bg-base-200">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {isPro && (
          <div className="absolute top-2 right-2">
            <span className="badge badge-primary">Pro</span>
          </div>
        )}
        <div className="absolute bottom-2 left-2 flex gap-1">
          {isDesktop && (
            <span className="badge badge-sm badge-ghost bg-base-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
              </svg>
            </span>
          )}
          {isMobile && (
            <span className="badge badge-sm badge-ghost bg-base-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
              </svg>
            </span>
          )}
        </div>
      </figure>
      <div className="card-body p-4">
        <h3 className="font-medium text-base">{title}</h3>
        <p className="text-sm text-base-content/70">{description}</p>
      </div>
    </div>
  );
} 