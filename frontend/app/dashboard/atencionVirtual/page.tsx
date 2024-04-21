'use client'

import * as React from 'react';
import { useEffect, useRef } from 'react'; // Importa useEffect y useRef
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len:any) {
  let result = '';
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function AtencionVirtual() {
  const roomID = getUrlParams().get('roomID') || randomID(5);
  const containerRef = useRef(null); // Usa useRef para crear una referencia
  
  useEffect(() => {
    // Dentro del useEffect, llama a la función myMeeting
    const myMeeting = async () => {
      // Genera el Kit Token
      const appID = 1166952768;
      const serverSecret = "37718261e157b7e1a6bca9b82957e731";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

      // Crea el objeto de instancia a partir del Kit Token
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // Inicia la llamada
      zp.joinRoom({
        container: containerRef.current, // Usa la referencia del contenedor
        sharedLinks: [
          {
            name: 'Personal link',
            url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // Para implementar llamadas 1 a 1, modifica el parámetro aquí a [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    };

    myMeeting();
    // Manejar el evento visibilitychange para reanudar la llamada cuando la pestaña se vuelve a mostrar
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        myMeeting();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Limpiar el evento al desmontar el componente
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
    
    
    
    
    // Llama a la función myMeeting al montar el componente
  }, [roomID]); // Usa un array vacío como dependencia para que useEffect se ejecute solo una vez al montar el componente

  return (
    <div
      className="myCallContainer"
      ref={containerRef} // Asigna la referencia al contenedor
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}