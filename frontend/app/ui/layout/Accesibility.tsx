'use client';
import { useEffect, useState } from 'react';
import { Accessibility } from 'accessibility';

interface IconOptions {
  circular: boolean;
  img: 'accessibility' | 'accessible';
  useEmojis: boolean;
}
interface ModulesOptions {
  increaseText: boolean;
  decreaseText: boolean;
  invertColors: boolean;
  increaseTextSpacing: boolean;
  decreaseTextSpacing: boolean;
  increaseLineHeight: boolean;
  decreaseLineHeight: boolean;
  grayHues: boolean;
  underlineLinks: boolean;
  bigCursor: boolean;
  readingGuide: boolean;
  textToSpeech: boolean;
  speechToText: boolean;
  disableAnimations: boolean;
}
interface Language {
  textToSpeechLang: string;
  speechToTextLang: string;
}

interface AccessibilityLabels {
  resetTitle: string;
  closeTitle: string;
  menuTitle: string;
  increaseText: string;
  decreaseText: string;
  increaseTextSpacing: string;
  decreaseTextSpacing: string;
  increaseLineHeight: string;
  decreaseLineHeight: string;
  invertColors: string;
  grayHues: string;
  underlineLinks: string;
  bigCursor: string;
  readingGuide: string;
  textToSpeech: string;
  speechToText: string;
  disableAnimations: string;
  hotkeyPrefix: string;
}

const labels: AccessibilityLabels = {
  resetTitle: 'Reiniciar',
  closeTitle: 'Cerrar',
  menuTitle: 'Menu de Accesibilidad',
  increaseText: 'Aumentar texto',
  decreaseText: 'Reducir texto',
  increaseTextSpacing: 'Aumentar el espacio del texto',
  decreaseTextSpacing: 'Disminuir el espacio del texto',
  increaseLineHeight: 'Aumentar la altura de la línea',
  decreaseLineHeight: 'Disminuir la altura de la línea',
  invertColors: 'Invertir colores',
  grayHues: 'Activar tonos grises',
  underlineLinks: 'Enlaces subrayados',
  bigCursor: 'Cursor grande',
  readingGuide: 'Guía de lectura',
  textToSpeech: 'Texto a voz',
  speechToText: 'Dictado a texto',
  disableAnimations: 'Deshabilitar animaciones',
  hotkeyPrefix: 'Ctrl+Shift',
};

const initAccessibility = () => {
  const options = {
    labels: labels,
    language: {
      speechToTextLang: 'es-US',
      textToSpeechLang: 'es-US',
    } as Language,
    icon: {
      circular: true,
      img: 'accessibility',
      useEmojis: false,
    } as IconOptions,
    modules: {
      increaseText: true,
      decreaseText: true,
      invertColors: true,
      increaseTextSpacing: true,
      decreaseTextSpacing: true,
      increaseLineHeight: true,
      decreaseLineHeight: true,
      grayHues: true,
      underlineLinks: true,
      bigCursor: true,
      readingGuide: true,
      textToSpeech: true,
      speechToText: true,
      disableAnimations: true,
    } as ModulesOptions,
  };

  const accesibility = new Accessibility(options);
};

export default function AccessibilityComponent() {
  Accessibility;
  /* const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    window.addEventListener('load', initAccessibility, false);
    return () => {
      window.removeEventListener('load', initAccessibility);
    };
  }, []);
  if (!isOpen) {
    return null;
  } */
}
