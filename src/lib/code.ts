// Turns a flat object into syntax-highlighted TypeScript lines for the code panels.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const span = (cls: string, v: string) => `<span class="tok-${cls}">${esc(v)}</span>`;
const str = (v: string) => span('str', `'${v}'`);

export type CodeValue = string | number | string[];

export function objectLines(name: string, obj: Record<string, CodeValue>): string[] {
  const lines = [`${span('kw', 'export const')} ${span('name', name)} ${span('punct', '= {')}`];
  for (const [key, value] of Object.entries(obj)) {
    const v = Array.isArray(value)
      ? `${span('punct', '[')}${value.map(str).join(span('punct', ', '))}${span('punct', ']')}`
      : typeof value === 'number'
        ? span('num', String(value))
        : str(value);
    lines.push(`  ${span('key', key)}${span('punct', ':')} ${v}${span('punct', ',')}`);
  }
  lines.push(span('punct', '};'));
  return lines;
}
