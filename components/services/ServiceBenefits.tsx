"use client";

export default function ServiceBenefits({ benefits }: { benefits: any[] }) {
  return (
    <section className="relative px-6 py-12 md:px-10 lg:px-14 min-h-screen flex flex-col justify-center max-h-[120vh] overflow-hidden">
      <div className="mb-10 pt-10">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#6B6B67]">
          Core Benefits
        </p>
        <h2 className="max-w-4xl text-[10vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[6vw] lg:text-[5vw]">
          WHY CHOOSE
          <br />
          THIS SERVICE?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full flex-grow pb-10">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            style={{ backgroundColor: benefit.color, color: benefit.textColor }} 
            className="flex flex-col justify-between overflow-hidden rounded-3xl border border-black/10 p-6 shadow-sm md:p-8"
          >
            <div className="text-[3rem] font-medium leading-none tracking-[-0.09em] opacity-20 md:text-[4rem] mb-4">
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
