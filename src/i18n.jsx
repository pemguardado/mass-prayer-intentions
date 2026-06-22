import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const I18nContext = createContext(null);

const STORAGE_KEY = 'mass-prayer-locale';

const massTimesByLocale = {
  en: [
    { value: '', label: 'Select a Mass time...' },
    { value: 'saturday-5pm', label: 'Saturday Vigil - 5:00 PM' },
    { value: 'sunday-7am', label: 'Sunday - 7:00 AM' },
    { value: 'sunday-9am', label: 'Sunday - 9:00 AM' },
    { value: 'sunday-11am', label: 'Sunday - 11:00 AM (High Mass)' },
    { value: 'sunday-5pm', label: 'Sunday - 5:00 PM' },
    { value: 'weekday-8am', label: 'Weekday - 8:00 AM (Mon-Fri)' },
    { value: 'weekday-12pm', label: 'Weekday - 12:00 PM (Mon-Fri)' },
  ],
  es: [
    { value: '', label: 'Seleccione un horario de misa...' },
    { value: 'saturday-5pm', label: 'Vigilia del sabado - 5:00 PM' },
    { value: 'sunday-7am', label: 'Domingo - 7:00 AM' },
    { value: 'sunday-9am', label: 'Domingo - 9:00 AM' },
    { value: 'sunday-11am', label: 'Domingo - 11:00 AM (Misa solemne)' },
    { value: 'sunday-5pm', label: 'Domingo - 5:00 PM' },
    { value: 'weekday-8am', label: 'Dia de semana - 8:00 AM (Lun-Vie)' },
    { value: 'weekday-12pm', label: 'Dia de semana - 12:00 PM (Lun-Vie)' },
  ],
};

const translations = {
  en: {
    churchName: "St. Mary's Catholic Church",
    pageTitle: 'Prayer Intentions',
    languageLabel: 'Language',
    languageEnglish: 'English',
    languageSpanish: 'Spanish',
    footerCopyright: (year) => `Copyright ${year} St. Mary's Catholic Church. All rights reserved.`,
    footerVerse: '"The Lord is near to all who call on him" - Psalm 145:18',
    submittedTitle: 'Intention Submitted',
    submittedMessage: ({ name, massTime }) =>
      `Thank you, ${name}. Your prayer intention has been received and will be included during ${massTime}.`,
    submittedVerse:
      '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." - Philippians 4:6',
    submitAnother: 'Submit Another Intention',
    formTitle: 'Submit a Prayer Intention',
    formSubtitle: 'Share your prayer request with our parish community.',
    nameLabel: 'Name of the Prayer',
    namePlaceholder: 'e.g. "Healing for John" or "Thanksgiving"',
    intentionLabel: 'Intention Description',
    intentionPlaceholder: 'Describe your prayer intention...',
    massTimeLabel: 'Mass Time',
    submitButton: 'Submit Prayer Intention',
    validationName: 'Please enter a name for this prayer.',
    validationIntention: 'Please describe the prayer intention.',
    validationMassTime: 'Please select a Mass time.',
  },
  es: {
    churchName: 'Iglesia Catolica St. Mary\'s',
    pageTitle: 'Intenciones de Oracion',
    languageLabel: 'Idioma',
    languageEnglish: 'Ingles',
    languageSpanish: 'Espanol',
    footerCopyright: (year) => `Copyright ${year} Iglesia Catolica St. Mary's. Todos los derechos reservados.`,
    footerVerse: '"El Senor esta cerca de quienes lo invocan" - Salmo 145:18',
    submittedTitle: 'Intencion enviada',
    submittedMessage: ({ name, massTime }) =>
      `Gracias, ${name}. Su intencion de oracion ha sido recibida y se incluira durante ${massTime}.`,
    submittedVerse:
      '"No se inquieten por nada; mas bien, en toda ocasion, con oracion y ruego, presenten sus peticiones a Dios." - Filipenses 4:6',
    submitAnother: 'Enviar otra intencion',
    formTitle: 'Enviar una intencion de oracion',
    formSubtitle: 'Comparta su peticion de oracion con nuestra comunidad parroquial.',
    nameLabel: 'Nombre de la oracion',
    namePlaceholder: 'ej. "Sanacion para Juan" o "Accion de gracias"',
    intentionLabel: 'Descripcion de la intencion',
    intentionPlaceholder: 'Describa su intencion de oracion...',
    massTimeLabel: 'Horario de misa',
    submitButton: 'Enviar intencion de oracion',
    validationName: 'Ingrese un nombre para esta oracion.',
    validationIntention: 'Describa la intencion de oracion.',
    validationMassTime: 'Seleccione un horario de misa.',
  },
};

function detectInitialLocale() {
  const savedLocale = localStorage.getItem(STORAGE_KEY);
  if (savedLocale === 'en' || savedLocale === 'es') {
    return savedLocale;
  }

  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(detectInitialLocale);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => {
    const t = (key) => translations[locale]?.[key] ?? translations.en[key] ?? key;
    const massTimes = massTimesByLocale[locale] ?? massTimesByLocale.en;
    return { locale, setLocale, t, massTimes };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider');
  }
  return context;
}