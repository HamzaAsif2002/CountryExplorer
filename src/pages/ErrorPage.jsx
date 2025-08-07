import { useNavigate, useRouteError } from "react-router";
export const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4 text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
        {error && (
          <span className="text-sm text-gray-500 block mb-6">
            {error.data || error.message}
          </span>
        )}
      </p>
      <button
        onClick={handleNavigate}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Back
      </button>
    </div>
  );
};
