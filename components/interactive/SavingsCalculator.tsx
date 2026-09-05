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
    <div className="savings-calculator">
      {/* Inputs */}
      <div className="savings-inputs">
        <div>
          <label
            htmlFor={valueId}
            className="mb-3 block text-sm font-semibold text-brand-ink"
          >
            Valeur estimée du bien
          </label>
          <div className="savings-value-field">
            <input
              id={valueId}
              type="text"
              inputMode="numeric"
              value={formatThousands(value)}
              onChange={(e) => handleValueInput(e.target.value)}
              className="min-w-0 w-full bg-transparent font-display text-3xl font-medium text-brand-ink outline-none sm:text-4xl"
              aria-describedby={`${valueId}-suffix`}
            />
            <span id={`${valueId}-suffix`} className="text-sm font-bold text-brand-ink/70">
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
            className="savings-slider"
            aria-label="Ajuster la valeur du bien avec le curseur"
          />
        </div>

        <div>
          <label
            htmlFor={rateId}
            className="mb-3 block text-sm font-semibold text-brand-ink"
          >
            Taux de commission traditionnel estimé
          </label>
          <div className="savings-rates" role="group" aria-labelledby={rateId}>
            {RATE_PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                id={preset === DEFAULT_COMMISSION_RATE ? rateId : undefined}
                onClick={() => setRate(preset)}
                className={`min-h-12 rounded-xl border px-3 py-3 text-sm font-bold transition-colors ${
                  rate === preset
                    ? "border-brand-forest bg-brand-forest text-white shadow-sm"
                    : "border-brand-ink/15 bg-white text-brand-ink/80 hover:border-brand-forest hover:bg-brand-beige/40"
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
      <div className="savings-result">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="savings-comparison">
            <span>Commission traditionnelle estimée ({rate.toString().replace(".", ",")} %)</span>
            <span className="whitespace-nowrap font-semibold text-brand-ink">{formatMAD(traditionalCommission)}</span>
          </div>
          <div className="savings-comparison">
            <span>Commission propriétaire ImmoZen Groupe</span>
            <span className="whitespace-nowrap font-bold text-brand-forest">0 DH*</span>
          </div>
          <div className="h-px w-full bg-brand-ink/15" />
          <div>
            <span className="inline-flex rounded-full border border-brand-forest/20 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-forest-dark">
              100 % d&rsquo;économie garantie
            </span>
            <p className="mt-4 text-sm font-semibold text-brand-ink/75">Économie potentielle</p>
            <p className="savings-total font-display tabular-nums">
              {formatMAD(traditionalCommission)}
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <Button href="#confier-mon-bien" variant="primary" size="lg" className="min-h-12 w-full whitespace-normal px-4 text-center text-sm">
            Je souhaite vendre sans commission
          </Button>
          <p className="text-xs leading-relaxed text-brand-ink/65">
            *Simulation indicative basée sur le taux sélectionné. Les conditions
            exactes du service ImmoZen Groupe seront précisées contractuellement.
          </p>
        </div>
      </div>
    </div>
  );
}
