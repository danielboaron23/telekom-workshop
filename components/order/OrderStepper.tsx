/* Order wizard stepper — Figma "wizard" row inside 2958:206268 */

export const orderSteps = ["Order items", "Delivery method", "Equipment IDs", "Billing details", "Summary"];

export function OrderStepper({ active = 0 }: { active?: number }) {
  return (
    <div className="flex w-full items-start gap-6">
      {orderSteps.map((step, i) => (
        <div key={step} className="flex items-start">
          <div className="flex items-center gap-2">
            {i === active ? (
              <span className="flex size-6 items-center justify-center rounded-full bg-brand">
                <span className="text-center text-xs leading-4 font-bold text-white">{i + 1}</span>
              </span>
            ) : (
              <span className="flex size-6 items-center justify-center rounded-full border border-ink">
                <span className="text-center text-xs leading-4 font-medium text-black/87">{i + 1}</span>
              </span>
            )}
            <p
              className={`text-sm leading-5 whitespace-nowrap text-black/87 ${
                i === active ? "font-bold" : "font-medium"
              }`}
            >
              {step}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
