import Header from './components/Header';
import PrayerIntentionForm from './components/PrayerIntentionForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-shell min-h-screen flex flex-col">
      <Header />
      <main className="relative flex-1 flex items-start justify-center px-4 py-10 md:py-14">
        <PrayerIntentionForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
