"use client";

export default function ServiceBenefits({ 
  benefits,
  title = "WHY CHOOSE<br />THIS SERVICE?",
  subtitle = "Core Benefits"
}: { 
  benefits: any[],
  title?: string,
  subtitle?: string
}) {
  return (
    <section className="relative px-6 py-6 md:px-10 lg:px-14 min-h-screen flex flex-col justify-center">
      <div className="mb-6 pt-16">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
          {subtitle}
        </p>
        <h2 
          className="max-w-5xl text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.9] tracking-[-0.04em]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full flex-grow pb-10">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            style={{ backgroundColor: benefit.color, color: benefit.textColor }} 
            className="flex flex-col justify-between overflow-hidden rounded-3xl border border-black/10 p-6 shadow-sm"
          >
            <div className="text-[2.5rem] font-medium leading-none tracking-[-0.09em] opacity-20 md:text-[3rem] mb-3">
              {benefit.number}
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium tracking-[-0.05em] md:text-2xl">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-70 md:text-base">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
