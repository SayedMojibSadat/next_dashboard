"use client"

export function TotalProfit() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-white font-semibold mb-1">Total Profit</h3>
                    <p className="text-slate-400 text-sm">Improve your workplace 🎉</p>
                </div>
                <div className="text-right">
                    <p className="text-white font-semibold text-lg">$130,795.77</p>
                </div>
            </div>

            {/* Simple SVG Chart */}
            <svg className="w-full h-24" viewBox="0 0 300 100" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="25" x2="300" y2="25" stroke="#475569" strokeWidth="0.5" strokeDasharray="5,5" />
                <line x1="0" y1="50" x2="300" y2="50" stroke="#475569" strokeWidth="0.5" strokeDasharray="5,5" />
                <line x1="0" y1="75" x2="300" y2="75" stroke="#475569" strokeWidth="0.5" strokeDasharray="5,5" />

                {/* Trend line */}
                <polyline
                    points="0,75 30,60 60,50 90,40 120,35 150,25 180,30 210,20 240,25 270,15 300,10"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                />

                {/* Area under curve */}
                <polyline
                    points="0,75 30,60 60,50 90,40 120,35 150,25 180,30 210,20 240,25 270,15 300,10 300,100 0,100"
                    fill="#10b981"
                    opacity="0.1"
                />
            </svg>
        </div>
    )
}
