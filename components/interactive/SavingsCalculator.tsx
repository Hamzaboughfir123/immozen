"use client";

import { Button } from "@/components/ui/Button";
import { DEFAULT_COMMISSION_RATE } from "@/lib/constants";
import { formatMAD, formatThousands } from "@/lib/utils";
import { useId, useMemo, useState } from "react";

const MIN_VALUE = 200_000;
const MAX_VALUE = 15_000_000;
const STEP_VALUE = 50_000;

const RATE_PRESETS = [1.5, 2.5, 3.5, 5];

export function SavingsCalculator() {
  const [value, setValue] = useState(5_000_000);
  const [rate, setRate] = useState(DEFAULT_COMMISSION_RATE);
  const valueId = useId();
  const rateId = useId();

  const traditionalCommission = useMemo(() => (value * rate) / 100, [value, rate]);

  function handleValueInput(raw: string) {
    const parsed = Number(raw.replace(/[^\d]/g, ""));
    if (Number.isNaN(parsed)) {
      setValue(0);
      return;
    }
    setValue(Math.min(parsed, 100_000_000));
  }

  return (
    <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_90px_-30px_rgba(16,18,15,0.25)] lg:grid-cols-2">
      {/* Inputs */}
      <div className="flex flex-col gap-8 p-8 sm:p-12">
        <div>
          <label
            htmlFor={valueId}
            className="mb-3 block text-sm font-semibold text-brand-ink/70"
          >
            Valeur estimée du bien
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-brand-ink/10 bg-brand-beige/40 px-5 py-4">
            <input
              id={valueId}
              type="text"
              inputMode="numeric"
              value={formatThousands(value)}
              onChange={(e) => handleValueInput(e.target.value)}
              className="w-full bg-transparent font-display text-2xl font-medium text-brand-ink outline-none"
              aria-describedby={`${valueId}-suffix`}
            />
            <span id={`${valueId}-suffix`} className="text-sm font-semibold text-brand-ink/50">
              DH
            </span>
          </div>
          <input
            type="range"
            min={MIN_VALUE}
            max={MAX_VALUE}
            step={STEP_VALUE}
            value={Math.min(value, MAX_VALUE)}
            onChange={(e) => setValue(Number(e.target.value))}
            className="mt-4 w-full accent-brand-forest"
            aria-label="Ajuster la valeur du bien avec le curseur"
          />
        </div>

        <div>
          <label
            htmlFor={rateId}
            className="mb-3 block text-sm font-semibold text-brand-ink/70"
          >
            Taux de commission traditionnel estimé
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby={rateId}>
            {RATE_PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                id={preset === DEFAULT_COMMISSION_RATE ? rateId : undefined}
                onClick={() => setRate(preset)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  rate === preset
                    ? "bg-brand-forest text-white"
                    : "bg-brand-beige/60 text-brand-ink/70 hover:bg-brand-beige"
                }`}
                aria-pressed={rate === preset}
              >
                {preset.toString().replace(".", ",")} %
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="flex flex-col justify-between gap-8 bg-brand-forest p-8 text-white sm:p-12">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>Commission traditionnelle estimée ({rate.toString().replace(".", ",")} %)</span>
            <span className="font-semibold text-white">{formatMAD(traditionalCommission)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>Commission propriétaire ImmoZen</span>
            <span className="font-semibold text-brand-pistachio">0 DH*</span>
          </div>
          <div className="h-px w-full bg-white/15" />
          <div>
            <p className="text-sm font-medium text-white/70">Économie potentielle</p>
            <p className="mt-2 font-display text-5xl font-medium text-brand-pistachio tabular-nums">
              {formatMAD(traditionalCommission)}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button href="#confier-mon-bien" variant="primary" size="lg" className="w-full">
            Je souhaite vendre sans commission
          </Button>
          <p className="text-xs leading-relaxed text-white/50">
            *Simulation indicative basée sur le taux sélectionné. Les conditions
            exactes du service ImmoZen seront précisées contractuellement.
          </p>
        </div>
      </div>
    </div>
  );
}
