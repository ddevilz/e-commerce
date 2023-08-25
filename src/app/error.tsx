"use client";

export default function ErrorPage() {
  return (
    <div className="via-greeen-300 flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-800 to-blue-500">
      <div className="mx-auto w-full max-w-lg rounded-lg bg-white px-10 py-8 shadow-xl">
        <div className="mx-auto max-w-md space-y-6">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
                500
              </h1>
              <p className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
                Internal Server Error.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                We are already working to solve the problem.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
