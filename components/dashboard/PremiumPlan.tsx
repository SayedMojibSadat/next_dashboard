import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PremiumPlan() {
    return (
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg p-6">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-emerald-950 font-semibold text-lg mb-1">$30</p>
                    <p className="text-emerald-950 text-sm mb-3">Per Month</p>
                    <p className="text-emerald-900 text-xs mb-4">Improve your workspace. View and analyze your profile and losses</p>
                    <Button
                        className="bg-white text-emerald-600 hover:bg-emerald-50 gap-2"
                        size="sm"
                    >
                        Get Started <ArrowRight className="h-3 w-3" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
