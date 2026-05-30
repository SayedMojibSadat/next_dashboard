import { Settings, Bell, Search, Moon, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppHeader() {
    return (
        <header className="w-full h-16 bg-slate-950 border-b border-slate-800 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-slate-400">
                    <span>Dashboard</span>
                    <span>/</span>
                    <span className="text-white">Overview</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-shadow-slate-400">
                    <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-shadow-slate-400">
                    <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-shadow-slate-400">
                    <Moon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-shadow-slate-400 relative">
                    <Bell className="h-4 w-4" />
                    <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-shadow-slate-400">
                    <Settings className="h-4 w-4" />
                </Button>
            </div>
        </header>
    )
}