// "use client";

// import { motion } from "framer-motion";

// const nodes = [
//   { x: "8%", y: "18%", size: 7, delay: 0 },
//   { x: "18%", y: "35%", size: 5, delay: 1.2 },
//   { x: "30%", y: "15%", size: 8, delay: 0.6 },
//   { x: "42%", y: "30%", size: 5, delay: 1.8 },
//   { x: "55%", y: "17%", size: 7, delay: 0.9 },
//   { x: "68%", y: "35%", size: 5, delay: 1.5 },
//   { x: "80%", y: "20%", size: 8, delay: 0.3 },
//   { x: "92%", y: "40%", size: 5, delay: 1.7 },

//   { x: "12%", y: "58%", size: 5, delay: 0.8 },
//   { x: "25%", y: "72%", size: 7, delay: 1.4 },
//   { x: "38%", y: "55%", size: 5, delay: 0.2 },
//   { x: "52%", y: "75%", size: 8, delay: 1.1 },
//   { x: "66%", y: "60%", size: 5, delay: 1.9 },
//   { x: "78%", y: "76%", size: 7, delay: 0.5 },
//   { x: "90%", y: "62%", size: 5, delay: 1.3 },
// ];

// const connections = [
//   { x1: "8%", y1: "18%", x2: "18%", y2: "35%" },
//   { x1: "18%", y1: "35%", x2: "30%", y2: "15%" },
//   { x1: "30%", y1: "15%", x2: "42%", y2: "30%" },
//   { x1: "42%", y1: "30%", x2: "55%", y2: "17%" },
//   { x1: "55%", y1: "17%", x2: "68%", y2: "35%" },
//   { x1: "68%", y1: "35%", x2: "80%", y2: "20%" },
//   { x1: "80%", y1: "20%", x2: "92%", y2: "40%" },

//   { x1: "12%", y1: "58%", x2: "25%", y2: "72%" },
//   { x1: "25%", y1: "72%", x2: "38%", y2: "55%" },
//   { x1: "38%", y1: "55%", x2: "52%", y2: "75%" },
//   { x1: "52%", y1: "75%", x2: "66%", y2: "60%" },
//   { x1: "66%", y1: "60%", x2: "78%", y2: "76%" },
//   { x1: "78%", y1: "76%", x2: "90%", y2: "62%" },

//   { x1: "18%", y1: "35%", x2: "38%", y2: "55%" },
//   { x1: "42%", y1: "30%", x2: "38%", y2: "55%" },
//   { x1: "55%", y1: "17%", x2: "52%", y2: "75%" },
//   { x1: "68%", y1: "35%", x2: "66%", y2: "60%" },
//   { x1: "80%", y1: "20%", x2: "78%", y2: "76%" },
// ];

// export default function BackgroundNodes() {
//   return (
//     <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
//       {/* Horizontal technical lines */}
//       <div className="absolute inset-0 opacity-40">
//         {Array.from({ length: 18 }).map((_, index) => (
//           <div
//             key={index}
//             className="absolute left-0 w-full border-t border-black/[0.07]"
//             style={{
//               top: `${index * 5.8}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* SVG network */}
//       <svg
//         className="absolute inset-0 h-full w-full"
//         viewBox="0 0 1000 800"
//         preserveAspectRatio="none"
//       >
//         {/* Connecting lines */}
//         {connections.map((line, index) => (
//           <motion.line
//             key={index}
//             x1={line.x1}
//             y1={line.y1}
//             x2={line.x2}
//             y2={line.y2}
//             stroke="rgba(0,0,0,0.10)"
//             strokeWidth="1"
//             initial={{ opacity: 0.15 }}
//             animate={{ opacity: [0.12, 0.28, 0.12] }}
//             transition={{
//               duration: 4,
//               delay: index * 0.15,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}

//         {/* Moving nodes */}
//         {nodes.map((node, index) => (
//           <motion.circle
//             key={index}
//             cx={node.x}
//             cy={node.y}
//             r={node.size}
//             fill="rgba(0,0,0,0.16)"
//             initial={{
//               opacity: 0.35,
//               scale: 0.8,
//             }}
//             animate={{
//               opacity: [0.25, 0.55, 0.25],
//               scale: [0.8, 1.25, 0.8],
//               cx: [
//                 node.x,
//                 `calc(${node.x} + ${index % 2 === 0 ? "1.5%" : "-1.5%"})`,
//                 node.x,
//               ],
//               cy: [
//                 node.y,
//                 `calc(${node.y} + ${index % 3 === 0 ? "2%" : "-2%"})`,
//                 node.y,
//               ],
//             }}
//             transition={{
//               duration: 5 + (index % 4),
//               delay: node.delay,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             style={{
//               transformOrigin: `${node.x} ${node.y}`,
//             }}
//           />
//         ))}

//         {/* Tiny floating dots */}
//         {Array.from({ length: 30 }).map((_, index) => {
//           const x = (index * 37) % 96;
//           const y = (index * 53) % 90;

//           return (
//             <motion.circle
//               key={`dot-${index}`}
//               cx={`${x}%`}
//               cy={`${y}%`}
//               r="1.5"
//               fill="rgba(0,0,0,0.18)"
//               animate={{
//                 opacity: [0.15, 0.45, 0.15],
//                 y: [0, -5, 0],
//               }}
//               transition={{
//                 duration: 3 + (index % 3),
//                 delay: index * 0.1,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           );
//         })}
//       {/* </svg> */}
//     </div>
//   );
// }