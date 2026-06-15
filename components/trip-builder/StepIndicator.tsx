interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const STEP_LABELS = [
  "Destination",
  "Travel Dates",
  "Travelers",
  "Budget & Preferences",
  "Review & Confirm",
];

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="w-full">
      {/* Mobile: Simple progress bar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          <span className="font-sans text-sm font-medium text-midnight">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="font-sans text-sm text-midnight/60">
            {STEP_LABELS[currentStep - 1]}
          </span>
        </div>
        <div className="h-1 bg-midnight/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold-dark transition-all duration-500"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop: Full step indicators */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          {STEP_LABELS.map((label, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;

            return (
              <div key={stepNumber} className="flex items-center flex-1">
                <div className="flex flex-col items-center w-full">
                  {/* Step circle */}
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      isCompleted
                        ? "bg-gold-dark border-gold-dark text-white"
                        : isCurrent
                        ? "bg-white border-gold-dark text-gold-dark shadow-lg scale-110"
                        : "bg-white border-midnight/20 text-midnight/40"
                    }`}
                  >
                    {isCompleted ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <span className="font-serif text-lg font-medium">
                        {stepNumber}
                      </span>
                    )}
                  </div>

                  {/* Step label */}
                  <span
                    className={`mt-3 font-sans text-xs font-medium text-center transition-colors duration-300 ${
                      isCurrent
                        ? "text-midnight"
                        : isCompleted
                        ? "text-midnight/70"
                        : "text-midnight/40"
                    }`}
                  >
                    {label}
                  </span>
                </div>

                {/* Connector line */}
                {index < STEP_LABELS.length - 1 && (
                  <div className="flex-1 h-0.5 mx-2 -mt-8">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isCompleted ? "bg-gold-dark" : "bg-midnight/10"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
