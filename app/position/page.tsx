"use client";
export default function Position() {
  return (
    <div>
      <div className="static bg-purple-400/20 border border-purple-700/10 p-4 h-32 dark:bg-sky-400/20 dark:border-0">
        <p className="text-purple-700 dark:text-sky-200">Static parent</p>
      </div>
      <p className="absolute bottom-0 left-0 bg-purple-500 shadow-lg rounded-lg p-4 text-white dark:bg-sky-500">
        Absolute child
      </p>
    </div>
  );
}
