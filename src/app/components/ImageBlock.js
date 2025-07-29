import Image from 'next/image';

export default function ImageBlock({ src, alt }) {
  return (
    <div className="my-10">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <Image 
          src="https://sp.yimg.com/ib/th/id/OIP.1gz6xJgY9mtSy5dR_27s3wHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1" 
          alt={alt} 
          width={800} 
          height={500} 
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
      </div>
      {alt && (
        <p className="text-center text-gray-600 mt-4 text-lg italic font-medium">
          {alt}
        </p>
      )}
    </div>
  );
}
