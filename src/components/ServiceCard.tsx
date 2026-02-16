import { Link } from 'react-router-dom';

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  slug: string;
};

export default function ServiceCard({ image, title, description, slug }: ServiceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px] shadow-lg bg-[#1A2C47] w-full h-[319px] lg:w-[296px] lg:h-[399px] flex flex-col justify-end group">
      <div className="absolute inset-0 bg-gray-200">
        <img
          src={`${image}?w=800&q=75`}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={(e) => {
            const img = e.target as HTMLImageElement;
            img.style.opacity = '1';
          }}
          style={{ opacity: 0 }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(2, 7, 13, 0.70) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
      <div className="relative z-10 p-[20px]">
        <h3 className="text-white text-[16px] lg:text-[18px] font-medium mb-[8px] leading-[24px]">
          {title}
        </h3>
        <p className="text-[14px] text-white leading-[20px] lg:leading-[21px] mb-[10px] flex-grow opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
          {description}
        </p>
        <Link to={`/services/dynamic/${slug}`} className="inline-block">
          <button className="border border-white rounded-full px-[60px] py-[10px] text-white font-medium transition hover:bg-white/10">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}