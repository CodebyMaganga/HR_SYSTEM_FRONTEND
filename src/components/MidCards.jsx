function MidCards() {
    return (
      <div className="flex jjustify-between p-4 w-full">
        {/* Attendance Overview Card */}
        <div className="w-1/2 rounded-[15px] overflow-hidden shadow-lg bg-white p-4 m-2">
          <h2 className="font-bold text-xl mb-2">Attendance Overview</h2>
          {/* Placeholder for graph */}
          <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
            <span>Graph Placeholder</span>
          </div>
        </div>
  
        {/* News and Events Card */}
        <div className="w-1/2 rounded-[15px] overflow-hidden shadow-lg bg-white p-4 m-2">
          <h2 className="font-bold text-xl mb-2">News and Events</h2>
          {/* Placeholder for content */}
          <div className="h-64 bg-gray-200 rounded">
            <p className="p-4">Content Placeholder</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default MidCards