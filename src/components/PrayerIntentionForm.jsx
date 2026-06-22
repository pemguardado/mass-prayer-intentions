import { useState } from 'react';
import { useI18n } from '../i18n.jsx';

const INITIAL_FORM = {
  name: '',
  intention: '',
  massTime: '',
};

export default function PrayerIntentionForm() {
  const { t, massTimes } = useI18n();
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = t('validationName');
    if (!form.intention.trim()) newErrors.intention = t('validationIntention');
    if (!form.massTime) newErrors.massTime = t('validationMassTime');
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // TODO: Replace with actual API call to persist the intention
    console.log('Prayer intention submitted:', form);
    setSubmitted(true);
  }

  function handleReset() {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  }

  const selectedMassLabel = massTimes.find((m) => m.value === form.massTime)?.label ?? '';
  const submittedMessage = t('submittedMessage')({
    name: form.name,
    massTime: selectedMassLabel,
  });

  if (submitted) {
    return (
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-4">🕊️</div>
        <h2 className="text-2xl font-serif font-bold text-[#1a237e] mb-2">
          {t('submittedTitle')}
        </h2>
        <p className="text-gray-600 mb-6">{submittedMessage}</p>
        <p className="text-sm text-gray-500 italic mb-8">
          {t('submittedVerse')}
        </p>
        <button
          onClick={handleReset}
          className="bg-[#1a237e] text-white px-6 py-2.5 rounded-lg hover:bg-[#283593] transition-colors cursor-pointer font-medium"
        >
          {t('submitAnother')}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-xl md:text-2xl font-serif font-bold text-[#1a237e] mb-1 text-center">
        {t('formTitle')}
      </h2>
      <p className="text-gray-500 text-sm text-center mb-6">
        {t('formSubtitle')}
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t('nameLabel')}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t('namePlaceholder')}
            value={form.name}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition
              ${errors.name ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-300 focus:border-[#1a237e] focus:ring-2 focus:ring-indigo-100'}`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Intention Description */}
        <div>
          <label htmlFor="intention" className="block text-sm font-medium text-gray-700 mb-1">
            {t('intentionLabel')}
          </label>
          <textarea
            id="intention"
            name="intention"
            rows={4}
            placeholder={t('intentionPlaceholder')}
            value={form.intention}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition resize-y
              ${errors.intention ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-300 focus:border-[#1a237e] focus:ring-2 focus:ring-indigo-100'}`}
          />
          {errors.intention && <p className="mt-1 text-xs text-red-500">{errors.intention}</p>}
        </div>

        {/* Mass Time Picker */}
        <div>
          <label htmlFor="massTime" className="block text-sm font-medium text-gray-700 mb-1">
            {t('massTimeLabel')}
          </label>
          <select
            id="massTime"
            name="massTime"
            value={form.massTime}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition bg-white cursor-pointer
              ${errors.massTime ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-300 focus:border-[#1a237e] focus:ring-2 focus:ring-indigo-100'}`}
          >
            {massTimes.map((mt) => (
              <option key={mt.value} value={mt.value} disabled={mt.value === ''}>
                {mt.label}
              </option>
            ))}
          </select>
          {errors.massTime && <p className="mt-1 text-xs text-red-500">{errors.massTime}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#1a237e] text-white py-3 rounded-lg font-medium hover:bg-[#283593] active:scale-[0.98] transition-all cursor-pointer text-sm tracking-wide"
        >
          &#10013;&ensp;{t('submitButton')}
        </button>
      </form>
    </div>
  );
}
