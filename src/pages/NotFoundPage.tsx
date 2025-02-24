const NotFound: React.FC = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="text-center animate-fadeIn">
          <h1 className="text-9xl font-extrabold tracking-widest text-white drop-shadow-lg">
            404
          </h1>
          <p className="text-lg mt-4 text-gray-400 animate-fadeIn delay-300">
            お探しのページは見つかりませんでした。
          </p>
        </div>
      </div>
    );
  }

export default NotFound
  