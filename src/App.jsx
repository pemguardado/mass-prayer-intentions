import Header from './components/Header';
import PrayerIntentionForm from './components/PrayerIntentionForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-start justify-center px-4 py-10">
        <PrayerIntentionForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
