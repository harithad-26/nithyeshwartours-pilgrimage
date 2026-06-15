"use client";

import { useState } from "react";
import { Step1Destination } from "./steps/Step1Destination";
import { Step2Dates } from "./steps/Step2Dates";
import { Step3Travelers } from "./steps/Step3Travelers";
import { Step4Budget } from "./steps/Step4Budget";
import { Step5Summary } from "./steps/Step5Summary";
import { StepIndicator } from "./StepIndicator";

export type FormData = {
  destination: string;
  destinationType: "Domestic" | "International" | "Spiritual";
  month: string;
  duration: number;
  travelers: number;
  groupType: "solo" | "couple" | "family" | "group";
  budget: string;
  accommodation: "budget" | "standard" | "luxury";
  inclusions: string[];
};

const INITIAL_DATA: FormData = {
  destination: "",
  destinationType: "Spiritual",
  month: "",
  duration: 7,
  travelers: 2,
  groupType: "couple",
  budget: "",
  accommodation: "standard",
  inclusions: [],
};

export function TripBuilderForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const totalSteps = 5;

  const updateFormData = (field: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...field }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full">
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      
      <div className="mt-12">
        {currentStep === 1 && (
          <Step1Destination
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
          />
        )}
        {currentStep === 2 && (
          <Step2Dates
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {currentStep === 3 && (
          <Step3Travelers
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {currentStep === 4 && (
          <Step4Budget
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {currentStep === 5 && (
          <Step5Summary
            data={formData}
            onBack={prevStep}
          />
        )}
      </div>
    </div>
  );
}
