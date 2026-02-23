export default function Footer() {
  return (
    <footer className="bg-[#1a237e] text-white text-center py-4 text-sm">
      <p className="opacity-80">
        &copy; {new Date().getFullYear()} St. Mary's Catholic Church. All rights reserved.
      </p>
      <p className="opacity-60 mt-1 text-xs italic">
        "The Lord is near to all who call on him" — Psalm 145:18
      </p>
    </footer>
  );
}
