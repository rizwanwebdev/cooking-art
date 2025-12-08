const Paginations = ({ currentPage, setCurrentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <div className="mt-10 w-full flex flex-wrap justify-center items-center gap-1.5 ">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 rounded bg-primary-color text-white disabled:hidden cursor-pointer"
        >
          Prev
        </button>

        {pages.map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`${
              currentPage === num
                ? "bg-primary-color text-white font-semibold"
                : "bg-transparent text-blue-300 border-blue-300"
            } px-4 py-2 rounded border cursor-pointer`}
          >
            {num}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 rounded bg-primary-color text-white disabled:hidden cursor-pointer"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Paginations;
