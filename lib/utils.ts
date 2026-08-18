/**
 * Concatène des classes Tailwind en filtrant les valeurs falsy.
 * Volontairement minimaliste : évite une dépendance externe (clsx) pour
 * un besoin aussi simple.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Regroupe les milliers d'un entier avec un espace (ex: 5000000 -> "5 000 000").
 *
 * Volontairement écrit à la main plutôt qu'avec `toLocaleString`/`Intl` :
 * le séparateur de milliers rendu par ces API peut différer entre le
 * serveur (Node/ICU) et le navigateur (espace normale vs espace fine
 * insécable selon les versions), ce qui casse l'hydratation React. Cette
 * implémentation produit un résultat strictement identique partout.
 */
export function formatThousands(value: number): string {
  if (!Number.isFinite(value)) return "0";
  const rounded = Math.round(value);
  const sign = rounded < 0 ? "-" : "";
  const digits = Math.abs(rounded).toString();
  const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${sign}${grouped}`;
}

/**
 * Formate un montant en dirhams marocains, sans décimales.
 */
export function formatMAD(value: number): string {
  return `${formatThousands(value)} DH`;
}
