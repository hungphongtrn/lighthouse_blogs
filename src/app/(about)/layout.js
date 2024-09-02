import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "120 Weekly Seminars Conducted",
  "Leaderboard AI City Challenge 2024",
  "Leaderboard AI City Challenge 2023",
  "CVPRW 2024 Accepted Paper",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
