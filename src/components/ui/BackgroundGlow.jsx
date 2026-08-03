export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px] animate-pulse" />

      <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[160px] animate-pulse" />
    </div>
  );
}