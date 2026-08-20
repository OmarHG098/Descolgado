export default function ContactoPage() {
  return (
    <main className="flex flex-1 flex-col px-4 py-8 sm:px-8">
      <h1 className="font-grotesque mb-4 text-2xl font-semibold">Contacto</h1>
      <p className="font-body max-w-2xl text-lg">
        Para escribirle a Santiago, mandá un mensaje a{" "}
        <a href="mailto:descolgado.galeria@gmail.com" className="text-accent underline">
          descolgado.galeria@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
