export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const calc = mathFunction();
    queue.push(calc);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
