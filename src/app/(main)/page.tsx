// import { HOME_TEXT } from '@/data/texts';
import Image from 'next/image';

const HomePage = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 bg-gray-50 p-5 sm:gap-28 sm:p-8 lg:ml-80 lg:min-h-screen lg:p-24">
      <Image
        src="/la-mariposa.jpg"
        alt=""
        width={1000}
        height={1000 * 0.75}
        className="animate-fade-in hidden lg:block"
      />
      <section className="flex flex-col gap-4">
        <p className="max-w-5xl text-justify font-medium whitespace-pre-line">{`La periferia puede operar como un lugar de ocultamiento, un espacio de olvido donde la tragedia es común, cotidiana y fácilmente imperceptible, lo periférico implica la invisibilidad, la negación de lo otro, por ello estas grafías de la luz
pretenden desde los sujetos al margen, mostrar sus lugares de enunciación.\n\nEn el trayecto existe el recorrido, el viaje y sus paisajes, los paisajes humanos, documentos humanos, documentos fotográficos, evidencias del migrar.\n\nEl sedimento implica lo estático, lo depositado, quietud en el tiempo y en el espacio, del tiempo y del espacio específico capturado en la toma fotográfica como evidencia de eso otro que somos, es esta una condición de la imagen
fotográfica como documento, como texto sentipensante que nos invita a la reflexión de nuestro tiempo y de nuestros espacios.\n\nEn la bidimensionalidad de la fotografía están estas periferias fotográficas, soporte y mensaje al mismo tiempo, de un mensaje humano, social, político y ambiental.`}</p>
        <span className="text-right font-bold">William Andrés Aguirre Cortés</span>
        <div className="flex flex-col text-right font-medium italic">
          <span>Licenciado en Ciencias Sociales. Universidad de Caldas</span>
          <span>Magister en Filosofía. Universidad de Caldas</span>
        </div>
        <div className="flex flex-col text-right font-medium italic">
          <span>Doctorando en Historia y Artes </span>
          <span>Universidad de Granada - España (UGR)</span>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
