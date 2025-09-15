function NewsWebsite() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <span className="inline-block mb-2 text-sm font-semibold text-[#01a89e] bg-[#01a89e]/10 px-3 py-1 rounded-full">
            Daily Highlights
          </span>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Latest Blog Posts
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Current top stories
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all duration-200 group">
          <span className="text-gray-700 group-hover:text-[#01a89e] font-medium">
            View All Latest Blogs
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400 group-hover:text-[#01a89e] transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left column */}
        <div className="md:col-span-3 space-y-6">
          {[6, 7].map((id, i) => (
            <article className="group" key={i}>
              <div className="relative aspect-[4/3] bg-[#01a89e]/5 rounded-lg overflow-hidden mb-3">
                <img src={`./assets/${id}.jpg`} alt="blog_post" />
              </div>
              <div className="space-y-1">
                <span className="inline-block px-2 py-1 bg-[#01a89e]/10 text-[#01a89e] text-xs font-medium rounded-full">
                  {i === 0 ? 'History' : 'Art & Culture'}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#01a89e] transition-colors">
                  {i === 0
                    ? 'The Vatican investigates Connecticut church miracle'
                    : 'Evolving tactics in book banning efforts nationwide'}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {i === 0
                    ? 'Every Eucharistic miracle visualized with historical context and expert analysis.'
                    : 'How censorship attempts are changing in school districts across the country.'}
                </p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>{i === 0 ? '27 AUG, 2024' : '26 AUG, 2024'}</span>
                  <span className="mx-2">•</span>
                  <span>{i === 0 ? '4' : '5'} min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Center column */}
        <div className="md:col-span-6">
          <article className="group">
            <div className="relative aspect-video bg-[#01a89e]/5 rounded-lg overflow-hidden mb-4">
              <img src="./assets/5.jpg" alt="blog_post" />
            </div>
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 bg-[#01a89e]/10 text-[#01a89e] text-xs font-medium rounded-full">
                Environment
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[#01a89e] transition-colors">
                Local governments take legal action against Big Oil companies
              </h3>
              <p className="text-gray-700">
                Municipalities across the nation are filing lawsuits alleging oil companies knowingly contributed to climate change while misleading the public about environmental impacts.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Updated 2 hours ago</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  1.4K
                </span>
              </div>
            </div>
          </article>
        </div>

        {/* Right column (duplicate of left for symmetry) */}
        <div className="md:col-span-3 space-y-6">
          {[8, 9].map((id, i) => (
            <article className="group" key={i}>
              <div className="relative aspect-[4/3] bg-[#01a89e]/5 rounded-lg overflow-hidden mb-3">
                <img src={`./assets/${id}.jpg`} alt="blog_post" />
              </div>
              <div className="space-y-1">
                <span className="inline-block px-2 py-1 bg-[#01a89e]/10 text-[#01a89e] text-xs font-medium rounded-full">
                  {i === 0 ? 'History' : 'Art & Culture'}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#01a89e] transition-colors">
                  {i === 0
                    ? 'The Vatican investigates Connecticut church miracle'
                    : 'Evolving tactics in book banning efforts nationwide'}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {i === 0
                    ? 'Every Eucharistic miracle visualized with historical context and expert analysis.'
                    : 'How censorship attempts are changing in school districts across the country.'}
                </p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>{i === 0 ? '27 AUG, 2024' : '26 AUG, 2024'}</span>
                  <span className="mx-2">•</span>
                  <span>{i === 0 ? '4' : '5'} min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsWebsite;
