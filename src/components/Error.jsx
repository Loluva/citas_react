function Error({ children }) {
  return (
    <div>
      <span className="block bg-red-800 text-white font-bold text-center py-1 mb-5">
        {children}
      </span>
    </div>
  );
}

export default Error;
