import { TrendingUp, TrendingDown } from "lucide-react"

interface StatsCardProps {
    title: string
    value: string
    trend?: number
    trendUp?: boolean
    icon?: React.ReactNode
}

export function StatsCard({ title, value, trend, trendUp = true, icon }: StatsCardProps) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-slate-400 text-sm mb-1">{title}</p>
                    <p className="text-white text-2xl font-semibold">{value}</p>
                    {trend !== undefined && (
                        <div className="flex items-center gap-1 mt-2">
                            {trendUp ? (
                                <TrendingUp className="h-4 w-4 text-emerald-500" />
                            ) : (
                                <TrendingDown className="h-4 w-4 text-red-500" />
                            )}
                            <span className={trendUp ? "text-emerald-500" : "text-red-500"} style={{ fontSize: "0.875rem" }}>
                                {trendUp ? "+" : ""}{trend}%
                            </span>
                            <span className="text-slate-500 text-xs">vs last month</span>
                        </div>
                    )}
                </div>
                {icon && (
                    <div className="text-slate-600">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    )
}
