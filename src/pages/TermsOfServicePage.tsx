import { Helmet } from "react-helmet-async";
import { Reveal } from "../components/ui/Reveal";

export const TermsOfServicePage = () => {
  return (
    <div className="pt-32 min-h-screen bg-deep-black">
      <Helmet>
        <title>Términos de Servicio | TuSitioWeb</title>
        <meta name="description" content="Términos y condiciones de uso de los servicios de TuSitioWeb." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 leading-tight">
            Términos de <span className="text-purple-500">Servicio</span>
          </h1>
        </Reveal>

        <div className="prose prose-invert prose-purple max-w-none text-white/60 font-light leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar los servicios de TuSitioWeb, usted acepta estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables en Perú. Si no está de acuerdo con alguno de estos términos, tiene prohibido utilizar o acceder a este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Descripción del Servicio</h2>
            <p>
              TuSitioWeb ofrece servicios de diseño web, desarrollo de software, hosting y registro de dominios. Cada servicio está sujeto a una cotización específica y un acuerdo de trabajo que detalla los alcances, tiempos de entrega y costos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Propiedad Intelectual</h2>
            <p>
              Una vez finalizado el pago total del proyecto, la propiedad intelectual del diseño y código personalizado de la página web se transfiere al cliente. TuSitioWeb se reserva el derecho de incluir el proyecto en su portafolio con fines promocionales, a menos que se acuerde lo contrario por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Pagos y Reembolsos</h2>
            <p>
              Manejamos un esquema de pago inicial (adelanto) para iniciar el proyecto y un pago final contra entrega. Debido a la naturaleza personalizada de nuestros servicios, los adelantos no son reembolsables una vez iniciado el trabajo de diseño o desarrollo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Hosting y Dominios</h2>
            <p>
              Los servicios de hosting y dominio se renuevan anualmente. Es responsabilidad del cliente realizar el pago de renovación antes de la fecha de vencimiento para evitar la suspensión del servicio o la pérdida del dominio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitación de Responsabilidad</h2>
            <p>
              TuSitioWeb no será responsable de ningún daño indirecto, incidental o consecuente que surja del uso o la imposibilidad de usar nuestros servicios, incluyendo pero no limitado a la pérdida de datos o beneficios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Modificaciones</h2>
            <p>
              TuSitioWeb puede revisar estos términos de servicio en cualquier momento sin previo aviso. Al utilizar este sitio web, usted acepta estar sujeto a la versión actual de estos Términos de Servicio.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
