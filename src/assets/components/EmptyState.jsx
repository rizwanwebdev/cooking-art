const EmptyState = ({ displayText }) => {
  return (
    <>
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <p className="text-primary-text">{displayText} </p>
        </div>
      </section>
    </>
  );
};

export default EmptyState;
