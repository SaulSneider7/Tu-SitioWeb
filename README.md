# Tu SitioWeb

Sitio de agencia digital en React, TypeScript y Vite. Rediseño con identidad marfil/violeta, navegación responsive, proyectos, planes, preguntas frecuentes y blog.

## Desarrollo y validación

- Instalar dependencias: npm install
- Desarrollo: npm run dev
- Producción: npm run build
- Comprobaciones: npm run lint y npm run check:seo
- Vista previa: npm run preview

En PowerShell, si la política bloquea npm.ps1, utilizar npm.cmd.

El build genera HTML con contenido completo para inicio, portafolio, blog, cada artículo y páginas legales. React hidrata ese contenido y conserva la navegación del sitio. También se generan sitemap.xml y 404.html. Los metadatos se centralizan en src/components/site/SEO.tsx.

## Contenido

- public/img/: imágenes generales del sitio.
- public/img/logos/: logos de la marca, clientes y favicons.
- public/img/portadas-portafolio/: portadas de proyectos.
- public/img/portadas-blog/: portadas de artículos y vista previa social.

Las imágenes se referencian con rutas desde `/img/`, sin incluir `public`.

- src/pricing-config.json: precios, prestaciones y servicios adicionales. Se conservan los valores originales. Una oferta solo se muestra si enabled está activo y endDate sigue vigente; se actualiza cada minuto en el navegador. Se recomienda incluir el huso horario en fechas nuevas, por ejemplo -05:00 para Perú.
- public/data/projects.json: proyectos y sus enlaces.
- public/data/blog.json: artículos y fechas ISO. Al editar cualquiera de los JSON, volver a compilar para actualizar el HTML y el sitemap.
- src/pages/HomePage.tsx: contenido comercial y preguntas frecuentes.
- src/index.css: sistema visual y adaptación a pantallas pequeñas.

## Publicación

Publicar el contenido de dist en la raíz del dominio https://tu-sitioweb.com. No publicar el código fuente ni node_modules.

Apache: dist incluye .htaccess para servir las páginas generadas y devolver errores 404 reales. Requiere mod_rewrite y AllowOverride habilitados. En otro hosting configurar rutas a los index.html generados y una respuesta HTTP 404 para URLs inexistentes; no redirigir todas las rutas a la portada.

La vista previa de Vite puede devolver la portada con estado 200 para URLs inexistentes: no representa la configuración 404 de producción. Si el dominio cambia, actualizar data.ts, HomePage.tsx, scripts/prerender.mjs y public/robots.txt.

Tras publicar, verificar las URLs y los códigos HTTP en el hosting, y enviar /sitemap.xml a Google Search Console. No se ha publicado ni conectado Search Console desde este entorno.

## Contenido editorial

Se actualizaron las guías del blog conservando sus URLs: se retiraron rankings sin respaldo y promesas absolutas, se añadieron fuentes técnicas y fechas de actualización. El blog incluye búsqueda, filtros, índices de lectura y artículos relacionados. El nuevo artículo de sistemas a medida recoge los casos descritos por el propietario: licorería, Metalmaq y botica.

## Verificación

El script check:seo comprueba el HTML de cada ruta: títulos únicos, canonical, descripción, un H1 y un main, imágenes locales existentes, enlaces internos, JSON-LD válido y sitemap. La revisión visual automatizada no se completó porque el control del navegador no estuvo disponible y el control de escritorio se detuvo al no poder identificar la URL con seguridad.


## Campañas temporales

Editar el bloque discount de src/pricing-config.json:

    "discount": {
        "enabled": true,
        "percentage": 10,
        "endDate": "2026-11-30T23:59:59-05:00"
    }

Esta fecha es un ejemplo; no se activó una nueva campaña automáticamente.
- enabled: false oculta la campaña y mantiene los precios normales.
- percentage: porcentaje mayor que 0 y menor que 100.
- endDate: fecha y hora de cierre. El sufijo -05:00 corresponde a Perú. Si se omite, se interpreta como hora de Perú.
- Al vencer, el banner desaparece y los precios originales se restauran automáticamente.
- El contador muestra días, horas, minutos y segundos. Banner y planes utilizan el mismo reloj.
- Aplica exclusivamente a los planes web; no a sistemas a medida, hosting, dominio ni otros servicios.
- Tras modificar el JSON, ejecutar npm run build y publicar dist nuevamente. En desarrollo Vite actualiza los cambios.
- El HTML prerenderizado muestra precios base; la campaña se comprueba al cargar JavaScript para evitar ofertas vencidas o contadores congelados en el HTML.
- Verificar la lógica con node scripts/verify-campaign.mjs (Node 24).

La sección #mejorar-propuesta permite consultar por WhatsApp una revisión de otra propuesta. La mejora se evalúa según alcance y viabilidad; no implica un compromiso automático de igualar cualquier precio.

## Páginas de políticas

Rutas: /privacidad, /terminos, /cookies y /devoluciones. Todas se enlazan desde el footer y se incluyen en el prerenderizado y sitemap.

Los textos son una base editorial que debe ajustarse a la operación real antes de publicar: confirmar la identidad legal/RUC y domicilio del responsable, proveedores y conservación de datos, condiciones contractuales de cancelación y procedimiento/plazos de devoluciones. No se han inventado esos datos ni se certifica cumplimiento legal. Verificar también las cookies o registros que añada el hosting real y la pertinencia del Libro de Reclamaciones; no se ha implementado uno como parte de estas páginas.

Referencias consultadas: Ley 29733 (https://www.gob.pe/institucion/congreso-de-la-republica/normas-legales/243470), derechos ARCO de la ANPD (https://www.gob.pe/9270), orientación de reclamos de Indecopi (https://www.gob.pe/532-presentar-reclamos-en-indecopi).
