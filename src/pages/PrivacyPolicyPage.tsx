import { Helmet } from "react-helmet-async";
import { Reveal } from "../components/ui/Reveal";

export const PrivacyPolicyPage = () => {
  return (
    <div className="pt-32 min-h-screen bg-deep-black">
      <Helmet>
        <title>Privacidad de Datos | TuSitioWeb</title>
        <meta name="description" content="Política de privacidad y protección de datos personales de TuSitioWeb." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 leading-tight">
            Privacidad de <span className="text-purple-500">Datos</span>
          </h1>
        </Reveal>

        <div className="prose prose-invert prose-purple max-w-none text-white/60 font-light leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Recopilación de Información</h2>
            <p>
              Recopilamos información personal cuando usted se pone en contacto con nosotros a través de formularios en nuestro sitio web, WhatsApp o correo electrónico. Esta información puede incluir su nombre, dirección de correo electrónico, número de teléfono y detalles sobre su proyecto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Uso de la Información</h2>
            <p>
              La información recopilada se utiliza exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar cotizaciones y responder a consultas.</li>
              <li>Gestionar y entregar los servicios contratados.</li>
              <li>Enviar actualizaciones sobre el estado de su proyecto.</li>
              <li>Enviar información relevante sobre renovaciones de hosting y dominio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad para proteger su información personal contra el acceso no autorizado, alteración o divulgación. No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento explícito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
            <p>
              Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario y analizar el tráfico del sitio. Usted puede configurar su navegador para rechazar las cookies, aunque esto puede afectar algunas funcionalidades del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Derechos del Usuario</h2>
            <p>
              De acuerdo con la Ley de Protección de Datos Personales (Ley N° 29733) en Perú, usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Puede ejercer estos derechos enviándonos una solicitud por correo electrónico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Enlaces a Terceros</h2>
            <p>
              Ocasionalmente, a nuestra discreción, podemos incluir o ofrecer productos o servicios de terceros en nuestro sitio web. Estos sitios de terceros tienen políticas de privacidad independientes. Por lo tanto, no tenemos responsabilidad por el contenido y las actividades de estos sitios vinculados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cambios en la Política de Privacidad</h2>
            <p>
              TuSitioWeb se reserva el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos a través de nuestro WhatsApp o correo electrónico oficial.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
