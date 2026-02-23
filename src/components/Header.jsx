export default function Header() {
  return (
    <header className="bg-[#1a237e] text-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-6 text-center">
        <div className="text-4xl mb-2">&#10013;</div>
        <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
          St. Mary's Catholic Church
        </h1>
        <p className="mt-1 text-amber-200 text-sm md:text-base font-light tracking-wider uppercase">
          Prayer Intentions
        </p>
      </div>
    </header>
  );
}
