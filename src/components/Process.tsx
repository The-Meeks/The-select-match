"use client";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="bg-gradient-to-br from-zinc-800 to-black rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-amber-500/30 transition-all">
      <div className="text-3xl sm:text-4xl font-serif text-amber-400/30 mb-3 sm:mb-4">{number}</div>
      <h4 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 text-white">{title}</h4>
      <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">{description}</p>
    </div>
  );
}

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Complete a confidential profile form and schedule your private consultation with a professional matchmaker"
    },
    {
      number: "02",
      title: "Vetting",
      description: "We verify identities, perform background and marital checks, and review preferences to ensure compatibility and safety"
    },
    {
      number: "03",
      title: "Match Curation",
      description: "Your matchmaker selects and personally screens potential matches based on your preferences and lifestyle"
    },
    {
      number: "04",
      title: "The First Date",
      description: "We handle every detail — booking, menu, timing — at a premium restaurant. You simply show up and enjoy"
    },
    {
      number: "05",
      title: "Feedback & Follow-Up",
      description: "After your date, we collect private feedback to refine future matches. Platinum and Lifetime members receive ongoing coaching"
    }
  ];

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent px-4">
            Your Journey With Us
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            A meticulously crafted process designed for exceptional results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}