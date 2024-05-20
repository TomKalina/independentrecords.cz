export function Section({
  children,
  title,
  id,
}: {
  children: React.ReactNode;
  title?: string;
  id?: string;
}) {
  return (
    <section id={id} className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-screen-xl px-4 testimonials">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-5xl font-bold mb-4">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
