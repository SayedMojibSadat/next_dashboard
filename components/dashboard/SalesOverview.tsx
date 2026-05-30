"use client"

import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SalesOverview() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold">Sales Overview</h3>
                <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {/* Donut Chart */}
                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-40 h-40 rounded-full flex items-center justify-center"
                        style={{
                            background: `conic-gradient(
                                #10b981 0deg 288deg,
                                #334155 288deg 360deg
                            )`
                        }}
                    >
                        <div className="w-32 h-32 bg-slate-900 rounded-full flex flex-col items-center justify-center">
                            <p className="text-emerald-500 text-2xl font-bold">102k</p>
                            <p className="text-slate-400 text-xs">Weekly Visits</p>
                        </div>
                    </div>
                </div>

                {/* Legend and Stats */}
                <div className="col-span-2 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                            <div>
                                <p className="text-slate-300 text-sm">Number of Sales</p>
                                <p className="text-white font-semibold">$71,020</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
                            <div>
                                <p className="text-slate-300 text-sm">Revenue</p>
                                <p className="text-white font-semibold">$95,640</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="bg-slate-800 rounded p-2">
                            <p className="text-slate-400 text-xs">Refunds</p>
                            <p className="text-white font-semibold">$1,840</p>
                        </div>
                        <div className="bg-slate-800 rounded p-2">
                            <p className="text-slate-400 text-xs">Bonus</p>
                            <p className="text-white font-semibold">$2,100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
