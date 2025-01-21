function Card({ image, title, button_name, price }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg Card">
      <img className="w-full" src={image} />
      <div className="px-6 ">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      {price ? (
        <div className="font-bold text-xl mb-2"> {price}</div>
      ) : (
        <p></p>
      )}
      {button_name ? (
        <button
          className="rounded-lg bg-amber-700 py-3.5 px-6 border border-transparent text-center text-base text-white transition-all shadow hover:shadow-lg focus:shadow-none active:bg-amber-900	 hover:bg-amber-800	 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          {button_name}
        </button>
      ) : (
        <p></p>
      )}
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
}

export default Card;
