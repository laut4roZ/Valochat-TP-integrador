import agentImages from "../assets/images/images";
import fondo2 from "../assets/images/fondo2.png";

const contactos = [
    {
        id: 1,
        nombre: "Jett",
        estado: "offline",
        info: "Siempre un paso adelante.",
        img: agentImages.jett,
        fondo: fondo2,
        ultimavez: "últ. vez hoy a la(s) 19:10",
        chatHistory: [
            {
                id: 1,
                sender: "Jett",
                message: "La velocidad es mi mejor aliada. No dejes que nadie te atrape.",
                timestamp: "18:00"
            },
            {
                id: 2,
                sender: "Tú",
                message: "Jett, ¿cómo mejoro mis entradas rápidas sin morir en el intento?",
                timestamp: "18:02"
            },
            {
                id: 3,
                sender: "Jett",
                message: "Usa tus cortinas de humo para confundir y aprovecha tu dash para reposicionarte rápido.",
                timestamp: "18:06"
            },
            {
                id: 4,
                sender: "Tú",
                message: "¿Cuándo es mejor usar el dash para sorprender al enemigo?",
                timestamp: "18:07"
            },
            {
                id: 5,
                sender: "Jett",
                message: "Cuando veas que el enemigo está distraído o sin cobertura, así ganas la ventaja instantánea.",
                timestamp: "18:11"
            },
            {
                id: 6,
                sender: "Tú",
                message: "Me cuesta controlar las ráfagas con sus cuchillas, ¿algún tip?",
                timestamp: "18:14"
            },
            {
                id: 7,
                sender: "Jett",
                message: "Practica el lanzamiento desde distintas alturas y ángulos. La práctica hace la perfección.",
                timestamp: "18:18"
            },
            {
                id: 8,
                sender: "Tú",
                message: "¿Cómo coordinás con el equipo para hacer entradas efectivas?",
                timestamp: "18:22"
            },
            {
                id: 9,
                sender: "Jett",
                message: "Avísales cuando vas a entrar rápido para que te cubran y aprovechen la confusión que generás.",
                timestamp: "18:25"
            },
            {
                id: 10,
                sender: "Tú",
                message: "¿Qué te motiva a seguir siendo tan agresiva en cada partida?",
                timestamp: "18:33"
            },
            {
                id: 11,
                sender: "Jett",
                message: "Porque la adrenalina y la libertad no se negocian. Me encanta estar un paso adelante.",
                timestamp: "18:34"
            },
            {
                id: 12,
                sender: "Tú",
                message: "Una frase para sentirme más confiado antes de la próxima ronda.",
                timestamp: "18:40"
            },
            {
                id: 13,
                sender: "Jett",
                message: "\"Vuelo rápido, golpeo duro. No me verás venir hasta que sea tarde.\"",
                timestamp: "18:43"
            },
            {
                id: 14,
                sender: "Tú",
                message: "Gracias, Jett. Voy a intentarlo a full.",
                timestamp: "18:45"
            }
        ]
    },
    {
        id: 2,
        nombre: "Phoenix",
        estado: "Offline",
        info: "El fuego no me quema, me impulsa.",
        img: agentImages.phoenix,
        fondo: fondo2,
        ultimavez: "últ. vez hoy a la(s) 18:24",
        chatHistory: [
            {
                id: 1,
                sender: "Phoenix",
                message: "Siempre hay luz después de la oscuridad. ¡No te rindas!",
                timestamp: "17:00"
            },
            {
                id: 2,
                sender: "Tú",
                message: "Phoenix, ¿cómo manejo mejor mis habilidades en ofensiva?",
                timestamp: "17:02"
            },
            {
                id: 3,
                sender: "Phoenix",
                message: "Usa tus llamas para controlar el espacio y forzar a los enemigos a retroceder.",
                timestamp: "17:06"
            },
            {
                id: 4,
                sender: "Tú",
                message: "¿Cuándo es ideal lanzar la bola de fuego para curarme y atacar?",
                timestamp: "17:07"
            },
            {
                id: 5,
                sender: "Phoenix",
                message: "Cuando estés en combate cerrado o necesites recuperarte rápido, sin exponerte demasiado.",
                timestamp: "17:11"
            },
            {
                id: 6,
                sender: "Tú",
                message: "Me cuesta coordinar el muro de fuego con el equipo, ¿algún consejo?",
                timestamp: "17:14"
            },
            {
                id: 7,
                sender: "Phoenix",
                message: "Comunica tus movimientos y usa el muro para bloquear líneas de visión, dales una sorpresa.",
                timestamp: "17:18"
            },
            {
                id: 8,
                sender: "Tú",
                message: "¿Qué te motiva a seguir peleando cuando todo parece perdido?",
                timestamp: "17:22"
            },
            {
                id: 9,
                sender: "Phoenix",
                message: "El fuego que llevo dentro nunca se apaga. Siempre hay una oportunidad para volver a la pelea.",
                timestamp: "17:25"
            },
            {
                id: 10,
                sender: "Tú",
                message: "¿Algún consejo para mantener la confianza en rondas difíciles?",
                timestamp: "17:31"
            },
            {
                id: 11,
                sender: "Phoenix",
                message: "Recuerda: cada error es una lección, y cada victoria comienza con creer en ti mismo.",
                timestamp: "17:34"
            },
            {
                id: 12,
                sender: "Tú",
                message: "Una frase para encender el ánimo antes de la próxima ronda.",
                timestamp: "17:39"
            },
            {
                id: 13,
                sender: "Phoenix",
                message: "\"No importa cuán fuerte sea el fuego, siempre puedo ser más fuerte.\"",
                timestamp: "17:43"
            },
            {
                id: 14,
                sender: "Tú",
                message: "Gracias, Phoenix. ¡Vamos con todo!",
                timestamp: "17:45"
            }
        ]
    },
    {
        id: 3,
        nombre: "Sage",
        estado: "En línea",
        info: "Respira. Confía. Sigue.",
        img: agentImages.sage,
        fondo: fondo2,
        ultimavez: "en línea",
        chatHistory: [
            {
                id: 1,
                sender: "Sage",
                message: "La calma y la sanación son tan poderosas como la fuerza en la batalla.",
                timestamp: "16:00"
            },
            {
                id: 2,
                sender: "Tú",
                message: "Sage, ¿cuál es la mejor manera de usar tu orbe de sanación en equipo?",
                timestamp: "16:02"
            },
            {
                id: 3,
                sender: "Sage",
                message: "Siempre prioriza sanar a quien esté más herido o que pueda cambiar el rumbo de la ronda.",
                timestamp: "16:06"
            },
            {
                id: 4,
                sender: "Tú",
                message: "¿Y el muro? ¿Dónde conviene colocarlo para proteger mejor al equipo?",
                timestamp: "16:07"
            },
            {
                id: 5,
                sender: "Sage",
                message: "En puntos de acceso clave, para bloquear ataques y ganar tiempo mientras se reposicionan.",
                timestamp: "16:11"
            },
            {
                id: 6,
                sender: "Tú",
                message: "A veces me cuesta decidir cuándo usar la ulti. ¿Algún consejo?",
                timestamp: "16:14"
            },
            {
                id: 7,
                sender: "Sage",
                message: "Úsala para proteger a varios aliados o en momentos críticos donde todos dependan de ti.",
                timestamp: "16:18"
            },
            {
                id: 8,
                sender: "Tú",
                message: "¿Cómo puedo mejorar mi comunicación con el equipo?",
                timestamp: "16:22"
            },
            {
                id: 9,
                sender: "Sage",
                message: "Informa siempre cuándo vas a sanar o levantar a alguien, para que el equipo sepa cuándo empujar o defender.",
                timestamp: "16:25"
            },
            {
                id: 10,
                sender: "Tú",
                message: "¿Qué te motiva a seguir ayudando en cada batalla?",
                timestamp: "16:31"
            },
            {
                id: 11,
                sender: "Sage",
                message: "Creo en el poder de proteger la vida y dar esperanza incluso en las situaciones más oscuras.",
                timestamp: "16:34"
            },
            {
                id: 12,
                sender: "Tú",
                message: "Dame una frase para motivarme antes de la próxima ronda.",
                timestamp: "16:39"
            },
            {
                id: 13,
                sender: "Sage",
                message: "\"La luz que llevo no solo cura heridas, también ilumina el camino hacia la victoria.\"",
                timestamp: "16:43"
            },
            {
                id: 14,
                sender: "Tú",
                message: "Gracias, Sage. Voy a cuidar al equipo con más fuerza.",
                timestamp: "16:45"
            }
        ]
    },
    {
        id: 4,
        nombre: "Cypher",
        estado: "Offline",
        info: "Mis ojos están en todas partes.",
        img: agentImages.cypher,
        fondo: fondo2,
        ultimavez: "últ. vez hoy a la(s) 15:50",
        chatHistory: [
            {
                id: 1,
                sender: "Cypher",
                message: "Los ojos en las sombras ven más que mil palabras. Siempre mantén vigilancia.",
                timestamp: "15:00"
            },
            {
                id: 2,
                sender: "Tú",
                message: "Cypher, ¿cuál es la mejor manera de usar tus cámaras?",
                timestamp: "15:03"
            },
            {
                id: 3,
                sender: "Cypher",
                message: "Colócalas en puntos estratégicos, entradas y rutas de rotación para capturar cada movimiento.",
                timestamp: "15:07"
            },
            {
                id: 4,
                sender: "Tú",
                message: "¿Y las trampas? ¿Cómo sacarles el máximo provecho?",
                timestamp: "15:08"
            },
            {
                id: 5,
                sender: "Cypher",
                message: "Ponlas en lugares que el enemigo pasa seguro, pero que no puedan destruir fácilmente.",
                timestamp: "15:13"
            },
            {
                id: 6,
                sender: "Tú",
                message: "Me cuesta mantenerme atento a todo. ¿Algún consejo para no perderme nada?",
                timestamp: "15:15"
            },
            {
                id: 7,
                sender: "Cypher",
                message: "Entrena tu mente para dividir la atención. La información es poder, no dejes que nada se te escape.",
                timestamp: "15:20"
            },
            {
                id: 8,
                sender: "Tú",
                message: "¿Cómo me comunico mejor con el equipo usando tus habilidades?",
                timestamp: "15:22"
            },
            {
                id: 9,
                sender: "Cypher",
                message: "Comunica cada señal que recibas. Cada dato puede cambiar el curso de la ronda.",
                timestamp: "15:25"
            },
            {
                id: 10,
                sender: "Tú",
                message: "¿Qué te motiva a seguir en esta guerra silenciosa?",
                timestamp: "15:33"
            },
            {
                id: 11,
                sender: "Cypher",
                message: "La justicia en las sombras. Nadie ve lo que yo veo, y eso me da poder.",
                timestamp: "15:35"
            },
            {
                id: 12,
                sender: "Tú",
                message: "Una última frase para entrar con todo en la próxima ronda.",
                timestamp: "15:40"
            },
            {
                id: 13,
                sender: "Cypher",
                message: "\"El silencio es mi aliado, la vigilancia mi arma. Nunca subestimes al observador.\"",
                timestamp: "15:45"
            },
            {
                id: 14,
                sender: "Tú",
                message: "Gracias, Cypher. Voy a estar atento a cada movimiento.",
                timestamp: "15:47"
            }
        ]
    },
    {
        id: 5,
        nombre: "Sova",
        estado: "Offline",
        info: "Conoce a tu enemigo mejor que a ti mismo.",
        img: agentImages.sova,
        fondo: fondo2,
        ultimavez: "últ. vez hoy a la(s) 14:57",
        chatHistory: [
            {
                id: 1,
                sender: "Sova",
                message: "La precisión es clave, siempre apunta a la cabeza. Usa tus drones para recopilar información antes de entrar.",
                timestamp: "14:00"
            },
            {
                id: 2,
                sender: "Tú",
                message: "¿Sova, qué consejo me das para mejorar mi juego con arco?",
                timestamp: "14:03"
            },
            {
                id: 3,
                sender: "Sova",
                message: "Cuando sospecho que hay enemigos ocultos en zonas comunes, lanzo mi flecha de reconocimiento.",
                timestamp: "14:07"
            },
            {
                id: 4,
                sender: "Tú",
                message: "¿Y la flecha de choque? ¿Mejor para abrir caminos o defender?",
                timestamp: "14:08"
            },
            {
                id: 5,
                sender: "Sova",
                message: "Ambas, puedes usarla para hacer retroceder a los enemigos o limpiar ángulos cerrados rápidamente.",
                timestamp: "14:12"
            },
            {
                id: 6,
                sender: "Tú",
                message: "¿Cuál es tu lugar favorito para colocar el drone?",
                timestamp: "14:13"
            },
            {
                id: 7,
                sender: "Sova",
                message: "Depende del mapa, pero siempre en un lugar elevado que te dé visión sin exponerte demasiado.",
                timestamp: "14:18"
            },
            {
                id: 8,
                sender: "Tú",
                message: "Me cuesta coordinarme con el equipo para usar tus habilidades. ¿Algún tip?",
                timestamp: "14:22"
            },
            {
                id: 9,
                sender: "Sova",
                message: "Comunicación constante. Llama al equipo cuando uses el drone o las flechas para maximizar el impacto.",
                timestamp: "14:25"
            },
            {
                id: 10,
                sender: "Tú",
                message: "¿Qué te motiva a seguir luchando en cada partida?",
                timestamp: "14:33"
            },
            {
                id: 11,
                sender: "Sova",
                message: "La verdad y la precisión. No hay nada más satisfactorio que revelar la verdad oculta y ayudar a tu equipo.",
                timestamp: "14:34"
            },
            {
                id: 12,
                sender: "Tú",
                message: "Última cosa, ¿alguna frase para motivarme antes de la próxima ronda?",
                timestamp: "14:40"
            },
            {
                id: 13,
                sender: "Sova",
                message: "\"Con cada flecha, la verdad se revela. Nunca dejes que la oscuridad te ciegue.\"",
                timestamp: "14:45"
            },
            {
                id: 14,
                sender: "Tú",
                message: "Gracias, Sova. Voy a darle con todo.",
                timestamp: "14:47"
            }
        ]
    },
    {
        id: 6,
        nombre: "Omen",
        estado: "En línea",
        info: "El miedo es una herramienta poderosa.",
        img: agentImages.omen,
        fondo: fondo2,
        ultimavez: "en linea",
        chatHistory: [
            {
                id: 1,
                sender: "Omen",
                message: "Las sombras son mis aliadas, no temas lo desconocido.",
                timestamp: "19:30"
            },
            {
                id: 2,
                sender: "Tú",
                message: "Omen, ¿cómo aprovecho mejor tus smokes para controlar el mapa?",
                timestamp: "19:32"
            },
            {
                id: 3,
                sender: "Omen",
                message: "Colócalas en puntos estratégicos que bloqueen la visión enemiga y corta sus rotaciones.",
                timestamp: "19:35"
            },
            {
                id: 4,
                sender: "Tú",
                message: "¿Cuál es la mejor forma de reposicionarme después de lanzar smokes?",
                timestamp: "19:38"
            },
            {
                id: 5,
                sender: "Omen",
                message: "Usa las sombras para moverte sin ser visto y mantén siempre una ruta segura de escape.",
                timestamp: "19:40"
            },
            {
                id: 6,
                sender: "Tú",
                message: "Me cuesta anticipar los movimientos enemigos, ¿algún consejo?",
                timestamp: "19:43"
            },
            {
                id: 7,
                sender: "Omen",
                message: "Aprende sus patrones y controla zonas clave con tus habilidades para limitar sus opciones.",
                timestamp: "19:47"
            },
            {
                id: 8,
                sender: "Tú",
                message: "Gracias, Omen. Eso me ayuda mucho para mejorar mi juego sigiloso.",
                timestamp: "19:50"
            },
            {
                id: 9,
                sender: "Omen",
                message: "La oscuridad es un aliado; úsala para crear oportunidades.",
                timestamp: "19:53"
            },
            {
                id: 10,
                sender: "Tú",
                message: "¿Cuándo es mejor usar tu teleportación para sorprender?",
                timestamp: "19:56"
            },
            {
                id: 11,
                sender: "Omen",
                message: "Cuando el enemigo piensa que estás en otro lugar, reaparece detrás.",
                timestamp: "19:58"
            },
            {
                id: 12,
                sender: "Tú",
                message: "¿Alguna recomendación para no caer en emboscadas?",
                timestamp: "20:01"
            },
            {
                id: 13,
                sender: "Omen",
                message: "Siempre mantén una ruta de escape y escucha los sonidos del entorno.",
                timestamp: "20:03"
            },
            {
                id: 14,
                sender: "Tú",
                message: "Lo tendré en cuenta, gracias por los consejos.",
                timestamp: "20:05"
            }
        ]
    }
];



export default contactos;