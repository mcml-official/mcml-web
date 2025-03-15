"use client";

import { useState } from "react";
import news from "@/app/data/news.json";

export default function News() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(news.length / 10);

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">News</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className={`flex h-8 w-8 items-center justify-center rounded hover:cursor-pointer ${
              page === 1
                ? "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
            aria-label="Previous page"
          >
            ←
          </button>
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className={`flex h-8 w-8 items-center justify-center rounded hover:cursor-pointer ${
              page === totalPages
                ? "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
            aria-label="Next page"
          >
            →
          </button>
        </div>
      </div>
      <div className="grid gap-6">
        {news.slice((page - 1) * 10, page * 10).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 border-l-4 border-[#1f3566] pl-4 md:flex-row"
          >
            <div className="min-w-[80px] text-sm text-gray-600 dark:text-gray-400">
              {item.date}
            </div>
            <div>
              <h3
                className="text-lg font-medium"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
