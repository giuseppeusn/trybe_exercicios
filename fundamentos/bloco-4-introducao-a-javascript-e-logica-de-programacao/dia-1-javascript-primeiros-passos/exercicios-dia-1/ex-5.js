const x = 101;
const y = 45;
const z = '33';

if ((x + y + z ) === 180) {
  console.log(true);
} else if (typeof x === "number" || typeof y === "number"|| typeof z === "number") {
  console.log("Inválido");
} else {
  console.log(false);
}